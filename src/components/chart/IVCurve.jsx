import { createSignal, onMount, onCleanup } from "solid-js";
import Chart from "chart.js/auto";

const IVChart = () => {
  let canvasRef; // Referensi untuk elemen <canvas>
  let chartInstance; // Instance Chart.js

  const [data, setData] = createSignal({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Current (A)",
        data: [30, 40, 20, 50, 60, 70, 80],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
      {
        label: "Voltage (V)",
        data: [10, 15, 10, 20, 25, 30, 35],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
    ],
  });

  const updateData = () => {
    // Simulasi pembaruan data
    setData((prev) => {
      const updatedCurrent = prev.datasets[0].data.map(
        (val) => val + Math.round(Math.random() * 10 - 5)
      );
      const updatedVoltage = prev.datasets[1].data.map(
        (val) => val + Math.round(Math.random() * 5 - 2)
      );

      return {
        ...prev,
        datasets: [
          { ...prev.datasets[0], data: updatedCurrent },
          { ...prev.datasets[1], data: updatedVoltage },
        ],
      };
    });

    // Update data pada Chart.js
    if (chartInstance) {
      chartInstance.data = data();
      chartInstance.update();
    }
  };

  onMount(() => {
    // Inisialisasi grafik Chart.js
    chartInstance = new Chart(canvasRef, {
      type: "line",
      data: data(),
      options: {
        responsive: true,
        maintainAspectRatio: false, // Agar tinggi/lebar bisa dikustomisasi
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              // Menampilkan angka pada sumbu Y
              callback: (value) => `${value}`, // Format angka di sumbu Y
              color: "#000", // Warna angka di sumbu Y
              font: {
                size: 14, // Ukuran font angka
                weight: "bold",
              },
            },
          },
          x: {
            ticks: {
              color: "#000", // Warna label di sumbu X
              font: {
                size: 14, // Ukuran font label
                weight: "bold",
              },
            },
          },
        },
        plugins: {
          legend: {
            position: "top", // Menampilkan legenda di bagian atas
          },
        },
      },
    });
  });

  onCleanup(() => {
    // Hapus instance Chart.js saat komponen dilepas
    if (chartInstance) {
      chartInstance.destroy();
    }
  });

  return (
    <div class="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-lg w-[500px] h-[390px] shadow-lg">
       <div class="p-4 max-w-5xl mx-auto">
      <h1 class="text-xl font-bold text-center mb-0.5">I/V Curve</h1>
      <div class="relative w-[450px] h-[300px]"> {/* Ukuran grafik diperbesar */}
        <canvas
          ref={(el) => {
            canvasRef = el;
          }}
        ></canvas>
      </div>
      <button
        class="mt- px-6 py-2.5 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={updateData}
      >
        Update Data
      </button>
    </div> 
    </div>
    
  );
};

export default IVChart;
