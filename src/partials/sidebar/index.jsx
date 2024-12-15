import { A, useLocation } from "@solidjs/router";
import { Index, Show } from "solid-js";
import { UseAuthCtx } from "~/context/auth.context";

export default function Sidebar(props) {
  const location = useLocation();
  const { logout } = UseAuthCtx();

  const LiItem = (props) => {
    return (
      <li>
        <div class="">
          <A href={props.url}>{props.label}</A>
          <Show when={props.childs}>
            <ul class="space-y-2xx">
              <Index each={props.childs} fallback={<div>Loading...</div>}>
                {(child) => (
                  <li>
                    <div class="ml-4">
                      <A
                        href={child().url}
                        class="text-pretty font-light text-xs "
                      >
                        {child().label}
                      </A>
                    </div>
                  </li>
                )}
              </Index>
            </ul>
          </Show>
        </div>
      </li>
    );
  };

  return (
    <aside class="flex flex-col justify-between bg-gray-800 h-screen">
      <div class="text-white ml-4">
        <div class="flex flex-row justify-center items-center p-4">
          <A href="/Dashboard" class="text-lg font-bold text-center">
            DASHBOARD
          </A>
        </div>
        <nav>
          <ul class="space-y-4 ">
            <Index each={props.menuItems} fallback={<div>Loading...</div>}>
              {(item) => (
                <LiItem
                  label={item().label}
                  url={item().url}
                  childs={item().childs}
                />
              )}
            </Index>
          </ul>
        </nav>
      </div>
      <div class="p-4 ">
        <button
          class="flex items-center p-3 hover:bg-gray-700 rounded-md text-white"
          onClick={() => logout("/")}
        >
          <span class="material-icons mr-2">logout</span>
        </button>
      </div>
    </aside>
  );
}
