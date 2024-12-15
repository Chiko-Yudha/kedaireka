import { createSignal } from "solid-js";

function FanSpeedControl(props) {
    const [speedLevel, setSpeedLevel] = createSignal(0);
    const increaseSpeed = () => {
        if (speedLevel() < 3) {
            setSpeedLevel(speedLevel() + 1);
        }
    };
    const decreaseSpeed = () => {
        if (speedLevel() > 0) {
            setSpeedLevel(speedLevel() - 1);
        }
    };

    return (
        <div class="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-lg w-[225px] h-[130px] shadow-lg">
            <h1 class="text-m font-bold text-gray-800 mb-4">{props.title || "Default Title"}</h1>
            <div class="flex items-center space-x-6">
                {/* Tombol panah kiri */}
                <button
                    onClick={decreaseSpeed}
                    class="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl"
                >
                    &#8592;
                </button>
                {/* Tombol panah kanan */}
                <button
                    onClick={increaseSpeed}
                    class="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl"
                >
                    &#8594;
                </button>
            </div>
            {/* Level kecepatan */}
            <p class="text-m font-bold text-gray-800 mt-4">{speedLevel()}</p>
        </div>
    );
}

export default FanSpeedControl;
