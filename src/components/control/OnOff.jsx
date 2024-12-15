import { createSignal } from "solid-js";

function ToggleSwitch(props) {

  const [isOn, setIsOn] = createSignal(false);

  return (
    <div class="flex flex-col items-center justify-center w-full bg-gray-200 p-4 rounded-lg xw-[140px] h-[95px] shadow-lg">
      <div class="flex flex-col items-center">
        {/* Text Header */}
        <span class="text-m font-bold text-gray-800 mb-4">{props.label || "Default Label"}</span>

        {/* Toggle Container */}
        <div
          class={`w-20 h-10 flex items-center rounded-full p-1 cursor-pointer transition-colors ${ props.value ? "bg-green-500" : "bg-red-500"
            }`}
          onClick={
            () => {
              setIsOn(!isOn())
              if (props.callback) props.callback(isOn())
            }
          }
        >
          {/* Toggle Button */}
          <div
            class={`h-8 w-8 bg-white rounded-full shadow-md transform transition-transform ${ props.value ? "translate-x-10" : "translate-x-0"
              }`}
          ></div>
        </div>
      </div>

    </div>
  );
}

export default ToggleSwitch;
