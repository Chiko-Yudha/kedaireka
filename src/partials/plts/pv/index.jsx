import FanSpeedControl from "~/components/control/FanSpeedControl"
import Gauge from "~/components/metering/Gauge"
import IVChart from "~/components/chart/IVCurve"
import LightControl from "~/components/control/LightControl"
import ToggleSwitch from "~/components/control/OnOff"
import ServoMotor from "~/components/control/ServoMotor"
import { UseDataCtx } from "~/context/data.context"
import { SOCKET_TAG } from "~/context/socket.constanta"

export default function ContentPV(props) {

    const { data, setData, command } = UseDataCtx()

    const value = (attr) => {
        return data() && data()[SOCKET_TAG.pltsPV] && data()[SOCKET_TAG.pltsPV][attr]
    }

    return (
        <div class="">
            <div class="flex flex-row justify-center gap-4 p-4">
                <div class="flex flex-col gap-y-2">
                    <ToggleSwitch label="Sprayer" value={ value("PV_HMI_SPRAYER") } callback={ (value) => { command("pv",{ tag: "PV_SPRAYER", value }) }} />
                    <ToggleSwitch label="Heather" value={ value("PV_HMI_HEATER") } callback={ (value) => { command("pv",{ tag: "PV_HEATER", value }) }} />
                </div>
                <ServoMotor />
                <LightControl />
                <FanSpeedControl title="FAN SPEED"/>
            </div>
            {/* Layout Wrapper */}
            <div class="mt-8 flex flex-col items-center">
                {/* Main Section */}
                <div class="flex justify-between w-full max-w-5xl gap-8">
                    {/* I/V Curve */}
                    <div class="flex-1">
                        <IVChart />
                    </div>

                    {/* Gauges */}
                    <div class="flex flex-col gap-6">
                        {/* First Row: 3 Gauges */}
                        <div class="flex justify-center gap-4">
                            <Gauge label="Irradiance" color="Yellow" role="W/m²" value={value("irradiance")} />
                            <Gauge label="Wind Speed" color="Coral" role="m/s" value={value("windSpeed")} />
                            <Gauge label="Tilt Angle" color="Magenta" role="°" value={value("tiltAngle")} />
                        </div>
                        {/* Second Row: 2 Gauges */}
                        <div class="flex justify-center gap-4">
                            <Gauge label="Temperature" color="Lime" role="°C" value={value("temperature")} />
                            <Gauge label="Humidity" color="Cyan" role="%" value={value("humidity")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}