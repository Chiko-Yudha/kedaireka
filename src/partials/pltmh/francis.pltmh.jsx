import BoxControl from "~/components/control/box.control";
import FanSpeedControl from "~/components/control/FanSpeedControl";
import ToggleSwitch from "~/components/control/OnOff";
import { UseDataCtx } from "~/context/data.context";

export default function Francis(props) {

    const { data, setData } = UseDataCtx();

    return (
        <BoxControl>
            <ToggleSwitch label="FRANCIS" />
            <FanSpeedControl title="RPM LEVEL" value={data().pltmh} />
        </BoxControl>
    )
}