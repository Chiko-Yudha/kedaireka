import { createSignal } from "solid-js";

export default function ServoMotor() {
  const [angle, setAngle] = createSignal(90); // Sudut awal 90 derajat

  const incrementAngle = () => {
    if (angle() < 180) {
      const newAngle = angle() + 1; // Tambah 1 derajat
      setAngle(newAngle);
      sendAngleToServo(newAngle);
    }
  };

  const decrementAngle = () => {
    if (angle() > 0) {
      const newAngle = angle() - 1; // Kurangi 1 derajat
      setAngle(newAngle);
      sendAngleToServo(newAngle);
    }
  };

  const sendAngleToServo = (angle) => {
    // Contoh komunikasi ke backend (sesuaikan endpoint)
    fetch("http://localhost:3000/servo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ angle: parseInt(angle) }),
    }).catch((error) => console.error("Error:", error));
  };

  return (
    <div class="flex flex-col justify-center items-center bg-gray-200 p-4 rounded-lg w-[280px] h-[230px] shadow-lg">
      <h1 class="text-xl font-bold text-black-600 mb-4">Servo Motor Control</h1>
      <div class="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
        <p class="text-lg text-gray-700 mb-4">Sudut: {angle()}°</p>
        <div class="flex space-x-4">
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={decrementAngle}
          >
            Turun (-)
          </button>
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={incrementAngle}
          >
            Naik (+)
          </button>
        </div>
      </div>
    </div>
  );
}