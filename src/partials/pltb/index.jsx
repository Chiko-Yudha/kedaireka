import FanSpeedControl from "~/components/control/FanSpeedControl";
import Gauge from "~/components/metering/Gauge";
import ChartPLTB from "./chart.pltb";
import { UseDataCtx } from "~/context/data.context";
import { SOCKET_TAG } from "~/context/socket.constanta";

export default function ContentPLTB(props) {
    const {data} = UseDataCtx()

    const value = ( attr ) => {
        return data() && data()[SOCKET_TAG.pltb] && data()[SOCKET_TAG.pltb][attr]
    }

    return (
        <div class="">
            <div class="flex flex-row gap-5">
            <FanSpeedControl title="FAN SPEED" />
                {/* <ChartPLTB /> */}
            </div>
            <div class="mt-8 flex flex-row justify-center items-center gap-x-10">
                <Gauge label="Wind Speed" color="Beige" role="m/s" value={ value("windSpeed")} />
                <Gauge label="Current" color="Teal" role="ampere" value={ value("current")} />
                <Gauge label="Turbine Rotation" color="cyan" role="RPM" value={ value("turbinRotation")} />
            </div>
            <div class="mt-8 flex flex-row justify-center items-center gap-x-10">
                <Gauge label="Voltage" color="pink" role="Volt" value={ value("voltage")} />
                <Gauge label="turbine Torque" color="olive" role="n/m" value={ value("turbinTorque")} />
                <Gauge label="Vertical Fan Rotation" color="brown" role="RPM" value={ value("fanRotation")} />
            </div>
        </div>
    )
}