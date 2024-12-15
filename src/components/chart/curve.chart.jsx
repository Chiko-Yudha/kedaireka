import { createSignal, onMount, onCleanup, createEffect } from "solid-js";
import Chart from "chart.js/auto";
import ChartTypeSelection from "./type.chart";

const CurveChart = (props) => {
    let canvasRef; // Referensi untuk elemen <canvas>
    let chartInstance; // Instance Chart.js

    const [chartType, setChartType] = createSignal("line")
    const [dataSets, setDataSets] = createSignal(
        [
            {
                label: "Current (A)",
                // data: [30, 40, 20, 50, 60, 70, 80],
                data: [],
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                fill: true,
            },
            {
                label: "Voltage (V)",
                data: [],
                borderColor: "rgba(54, 162, 235, 1)",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                fill: true,
            },
        ]
    )

    const [options, setOptions] = createSignal({
        responsive: true,
        animations: false,
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
    })

    const [data, setData] = createSignal({
        labels: props.labels,
        datasets: dataSets(),
    });

    const [configs, setConfigs] = createSignal({
        type: chartType(),
        data: data(),
        options: options(),
    })

    createEffect(
        () => {
            setDataSets([
                {
                    label: "Current (A)",
                    // data: [30, 40, 20, 50, 60, 70, 80],
                    data: props.data ? props.data[0] : [],
                    borderColor: "rgba(255, 99, 132, 1)",
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    fill: true,
                },
                {
                    label: "Voltage (V)",
                    data: props.data ? props.data[1] : [],
                    borderColor: "rgba(54, 162, 235, 1)",
                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                    fill: true,
                },
            ])
            updateData()
        },
    )

    const updateData = () => {
        // Simulasi pembaruan data
        setData((prev) => {
            return {
                ...prev,
                datasets: dataSets(),
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
        chartInstance = new Chart(canvasRef, configs());
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
                <h1 class="text-xl font-bold text-center mb-0.5">I/V Curve </h1>
                <div class="relative w-[450px] h-[300px]"> {/* Ukuran grafik diperbesar */}
                    <canvas
                        ref={(el) => {
                            canvasRef = el;
                        }}
                    ></canvas>
                </div>

            </div>
        </div>

    );
};

export default CurveChart;
