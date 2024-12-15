import Gauge from "~/components/metering/Gauge";
import { UseDataCtx } from "~/context/data.context";
import { SOCKET_TAG } from "~/context/socket.constanta";

export default function ContentOnGrid(props) {

    const {data} = UseDataCtx()

    const value = ( attr ) => {
        return data() && data()[SOCKET_TAG.pltsOnGrid] && data()[SOCKET_TAG.pltsOnGrid][attr]
    }

    return (
        <div class="">
            <div class="flex flex-col items-center">
                {/* Baris pertama Gauge */}
                <div class="mt-8 flex gap-x-10">
                    <Gauge label="DC Current" color="#FFD700" role="Ampere" value={ value("dcCurrent")} />
                    <Gauge label="DC Voltage" color="#40E0D0" role="Volt" value={ value("dcVoltage")} />
                    <Gauge label="PV Power" color="#FF69B4" role="Watt" value={ value("pvPower")} />
                </div>

                {/* Baris kedua Gauge */}
                <div class="mt-8 flex gap-x-10">
                    <Gauge label="AC Current" color="#1F51FF" role="Ampere" value={ value("acCurrent")} />
                    <Gauge label="AC Voltage" color="#32CD32" role="Volt" value={ value("acVoltage")} />
                    <Gauge label="AC Frequency" color="#FF5733" role="Hz" value={ value("acFrequency")} />
                </div>
            </div>
        </div>
    )
}