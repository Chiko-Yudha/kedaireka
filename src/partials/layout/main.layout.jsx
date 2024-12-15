import MyNavBar from "../MyNavBar";
import Sidebar from "../sidebar"

import { menuRows } from "../../json/menu-json"
import { onMount, Show } from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";
import { UseAuthCtx } from "~/context/auth.context";

export default function MainLayout(props) {

    const location = useLocation()
    const navigate = useNavigate();
    const { auth, loadUser } = UseAuthCtx()

    onMount(
        () => {
            loadUser()
            if (auth() && auth().username === undefined) navigate(import.meta.env.VITE_REDIRECT_TO_HOME)
        }
    )

    return (
            <div class="flex flex-col md:flex-row">
                <Show when={location.pathname !== "/" && location.pathname !== "/about" && location.pathname !== "/login"}>
                    <Sidebar menuItems={menuRows} />
                </Show>
                <main class="flex-1 w-full">
                    <MyNavBar />
                    <div class="mt-x">
                        {props.children}
                    </div>
                </main>
            </div>
    )
}