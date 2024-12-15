import { Show } from "solid-js";
import Header from "~/components/Header";
import { UseAuthCtx } from "~/context/auth.context";

const PreLoad = () => {
    return (
        <div class="flex flex-row justify-center items-center min-h-screen w-screen">
            <h1 class="font-light text-gray-600 text-4xl">Loding page.....</h1>
        </div>
    )
}

export default function ContentLayout(props) {

    const { auth } = UseAuthCtx();

    return (
        <div class="w-full p-4 bg-gray-100">
            <Show when={auth() && auth().username} fallback={<PreLoad />}>
                <Header title={props.title} />
                <div class="flex flex-col w-full">
                    {props.children}
                </div>
            </Show>
        </div>
    )
}