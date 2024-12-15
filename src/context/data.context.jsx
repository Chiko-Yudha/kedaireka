import { createContext, createSignal, useContext } from "solid-js";
import { db } from "~/lib/db";

export const DataCtx = createContext();

export function DataCtxProv(props) {

    const [plts, setPlts] = createSignal();
    const [pltb, setPltb] = createSignal();
    const [pltmh, setPltmh] = createSignal();

    const initialValue = {
        plts, pltb, pltmh
    }

    const command = async (cmd,data) => {
        console.log("data.contex.jsx:command",cmd,data);
        const response = await db.command[cmd](data);
        if (response.data) {
            console.log("data.contex.jsx:command",response,data);
        }
    }

    const [data, setData] = createSignal(initialValue);

    return (
        <DataCtx.Provider value={{ data, setData, command }}>
            {props.children}
        </DataCtx.Provider>
    )
}

export function UseDataCtx() {
    return useContext(DataCtx);
}