import { AuthCtxProv } from "./auth.context";
import { DataCtxProv } from "./data.context";
import { SocketCtxProv } from "./socket.context";

export function RootCtxProvider(props) {
    
    return (
        <DataCtxProv>
            <AuthCtxProv>
                <SocketCtxProv>
                    {props.children}
                </SocketCtxProv>
            </AuthCtxProv>
        </DataCtxProv>
    )
}