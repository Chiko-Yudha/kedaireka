import { createContext, createSignal, createEffect, onMount, useContext, createMemo } from "solid-js";

import { io } from "socket.io-client";
import { UseAuthCtx } from "./auth.context";
import { SOCKET_TAG } from "./socket.constanta";
import { UseDataCtx } from "./data.context";

export const SocketCtx = createContext();

export function SocketCtxProv(props) {

    const [nodeSocket, setNodeSocket] = createSignal();
    const { data, setData } = UseDataCtx();
    const { auth } = UseAuthCtx();

    createEffect(
        () => {
            if (nodeSocket() && auth() && auth().token ) {
                nodeSocket().emit(SOCKET_TAG.refresh, { userId: auth().id, name: auth().name, role: auth().role })
            }
            console.log(auth())
        }
    )

    onMount(
        async () => {

            
            const conn = await io(`${import.meta.env.VITE_SOCKET_SERVER_HOST}`)
            setNodeSocket(
                conn
            )

            nodeSocket().on("connect", () => {

                // console.log(`connected to socket server ${import.meta.env.VITE_SOCKET_SERVER_HOST}`)
                console.log(`connected to socket server`)

                nodeSocket().on(SOCKET_TAG.pltsPV, (value) => {
                    setData({ ...data(), [SOCKET_TAG.pltsPV]: value.payload })
                    console.log("SocketCtxProv/onMount", SOCKET_TAG.pltsPV, data())
                })

                nodeSocket().on(SOCKET_TAG.pltsOffGrid, (value) => {
                    setData({ ...data(), [SOCKET_TAG.pltsOffGrid]: value.payload })
                    // console.log("SocketCtxProv/onMount", SOCKET_TAG.pltsOffGrid, data())
                })

                nodeSocket().on(SOCKET_TAG.pltsOnGrid, (value) => {
                    setData({ ...data(), [SOCKET_TAG.pltsOnGrid]: value.payload })
                    // console.log("SocketCtxProv/onMount", SOCKET_TAG.pltsOffGrid, data())
                })

                nodeSocket().on(SOCKET_TAG.pltb, (value) => {
                    setData({ ...data(), [SOCKET_TAG.pltb]: value.payload })
                })

                nodeSocket().on(SOCKET_TAG.pltmh, (value) => {
                    setData({ ...data(), [SOCKET_TAG.pltmh]: value.payload })
                })

            })

            nodeSocket().on("disconnect", () => {
                console.log(`disconnecting from socket server ${import.meta.env.VITE_SOCKET_SERVER_HOST}`)
            })

        }
    )

    return (
        <SocketCtx.Provider value={{ nodeSocket, setNodeSocket }}>
            {props.children}
        </SocketCtx.Provider>
    )
    
}

export function UseSocketCtx() {
    return useContext(SocketCtx);
}