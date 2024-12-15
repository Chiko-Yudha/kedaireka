import FanSpeedControl from "~/components/control/FanSpeedControl";
import Gauge from "~/components/metering/Gauge";
import ToggleSwitch from "~/components/control/OnOff";
import Pelton from "./pelton.pltmh";
import CrossFlow from "./cross_flow.pltmh";
import Keplan from "./keplan.pltmh";
import Francis from "./francis.pltmh";
import { UseDataCtx } from "~/context/data.context";
import { SOCKET_TAG } from "~/context/socket.constanta";

export default function ContentPLTMH(props) {

    const {data} = UseDataCtx()

    const value = ( attr ) => {
        return data() && data()[SOCKET_TAG.pltmh] && data()[SOCKET_TAG.pltmh][attr]
    }

    return (
        <div class="flex flex-col justify-center items-center">
            {/* <div id="control" class="flex flex-row justify-between items-center py-2 gap-x-4 min-w-full bg-red-400xx"> */}
            <div id="control" class="grid grid-cols-4 sm:grid-cols-3 xs:grid-cols-1 justify-between items-center py-2 gap-x-4 min-w-full">
                <Pelton />
                <CrossFlow />
                <Keplan />
                <Francis />
            </div>
            <div class="">
            <div class="mt-8 flex flex-row justify-center items-center gap-x-4">
                <Gauge label="Pump Water Flow" color="red" role="m³/s" value={ value("pumpWaterFlow")} />
                <Gauge label="Turbine Water Flow" color="blue" role="m³/s" value={ value("turbinWaterFlow")} />
                <Gauge label="Voltage" color="green" role="V" value={ value("voltage")} />
                <Gauge label="Current" color="Purple" role="A" value={ value("current")} />
            </div>
            <div class="mt-8 flex flex-row justify-center items-center gap-x-4">
                <Gauge label="Pressure" color="brown" role="psi/bar" value={ value("pressure")} />
                <Gauge label="Turbine Rotation" color="black" role="RPM" value={ value("turbinRotation")} />
                <Gauge label="Turbine Torque" color="turquoise" role="N/m" value={ value("turbinTorque")} />
            </div>
            </div>
        </div>
    )
}