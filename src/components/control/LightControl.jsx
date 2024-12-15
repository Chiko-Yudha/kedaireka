import { createSignal } from "solid-js";

function LightControl() {
  const [intensity, setIntensity] = createSignal(0);


  const handleSliderChange = (e) => {
    const value = Math.round(e.target.value / 10) * 10;
    setIntensity(value);
  };

  return (
    <div class="flex flex-col items-center justify-center bg-gray-200 p-6 rounded-lg w-[350px] h-[200px] shadow-lg">
      {}
      <h1 class="text-lg font-bold text-gray-800 mb-4">Light Intensity (lux)</h1>

      {/* Slider gambar */}
      <div class="flex items-center w-full px-4 space-x-4">
        {/*  Lampu Kiri */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-gray-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V18c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-3.26C17.81 13.47 19 11.38 19 9c0-3.87-3.13-7-7-7zM9 21h6v2H9z" />
        </svg>

        {/* Slider */}
        <input
          type="range"
          min="0"
          max="100"
          step="10"
          value={intensity()}
          onInput={handleSliderChange}
          class="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-gray-600"
        />

        {/* Lampu Kanan */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-gray-900"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V18c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-3.26C17.81 13.47 19 11.38 19 9c0-3.87-3.13-7-7-7zM9 21h6v2H9z" />
        </svg>
      </div>

      {/* Nilai Intensitas */}
      <p class="text-2xl font-bold text-gray-800 mt-4">{intensity()}</p>
    </div>
  );
}

export default LightControl;
