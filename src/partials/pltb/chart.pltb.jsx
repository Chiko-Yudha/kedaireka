import { createEffect, createMemo, createSignal, onMount, Show } from "solid-js"
import CurveChart from "~/components/chart/curve.chart"
import { UseDataCtx } from "~/context/data.context"


export default function ChartPLTB() {

    const { data } = UseDataCtx()
    const [chartData, setChartData] = createSignal([])
    const [value, setValue] = createSignal(Math.floor(Math.random() * 60))

    const arrL = []
    const arrA = []
    const arrV = []

    createMemo(
        () => {
            const counter = 5;
            arrV.push(parseFloat(data() && data().pv && data().pv.voltage));
            if (arrV.length > counter) arrV.splice(0, 1)
            arrA.push(parseFloat(data() && data().pv && data().pv.current));
            if (arrA.length > counter) arrA.splice(0, 1)
            if (arrL.length < counter) arrL.push(arrA.length)
            setChartData(
                [
                    arrV,
                    arrA
                ]
            )
            console.log(chartData())
        }
    )

    return (
        <div class="">
            <Show when={chartData().length > 0} fallback={() => <p class="">Loading chart data...</p>}>
                <CurveChart labels={arrL} data={chartData()} vb={value()} />
            </Show>
        </div>
    )
}