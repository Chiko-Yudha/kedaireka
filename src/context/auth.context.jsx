import { useLocation, useNavigate } from "@solidjs/router";
import { createContext, createEffect, createSignal, onMount, useContext } from "solid-js";
import { db } from "~/lib/db";

export const AuthCtx = createContext();

export function AuthCtxProv(props) {

    const navigate = useNavigate();
    const location = useLocation();
    const ITEM_NAME = "user"
    const [auth, setAuth] = createSignal({});

    const isLogin = () => {
        return auth() && auth().username 
    }

    const login = async (data) => {
        const response = await db.user.login(data)
        if ( response.data.name ) {
            console.log(response);
            const item = {id:response.data.id, username: response.data.name, role: response.data.role, token: response.data.token};
            setAuth(item)
            localStorage.setItem(ITEM_NAME, JSON.stringify(item));
            navigate("/dashboard")
        }
    }

    const logout = () => {
        setAuth(null);
        localStorage.removeItem(ITEM_NAME);
    }

    const loadUser = () => {
        const storedUser = localStorage.getItem(ITEM_NAME);
        if (storedUser) {
            setAuth(JSON.parse(storedUser));
        }
    };

    createEffect(
        () => {
            if  ( location.pathname !== "/" && location.pathname !== "/about" ) {
                if ( !auth() || !auth().username ) navigate(import.meta.env.VITE_REDIRECT_TO_LOGIN)
            }
        }
    )

    return (
        <AuthCtx.Provider value={{ auth, login, logout, isLogin, loadUser }}>
            {props.children}
        </AuthCtx.Provider>
    )
}

export function UseAuthCtx() {
    return useContext(AuthCtx);
}