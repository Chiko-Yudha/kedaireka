import { Index } from "solid-js";
import Card from "~/components/Card";

const items = [
  { title: "PV", description: "Solar Panel Photovoltaics", url: "/plts/pv", imageUrl: "plts.jpg" },
  { title: "Off Grid", description: "Wind Turbine simulation practical", url: "/plts/offgrid", imageUrl: "pltB.jpg" },
  { title: "On GRid", description: "Micro Hydro simulation practical", url: "/plts/ongrid", imageUrl: "pltmh.jpg" },
]

export default function ContentPLTS(props) {
  return (
    <div class="">
      <div class="flex flex-row gap-6">
        <Index each={items}>
          {
            item => {
              return (
                <Card
                  title={item().title}
                  description={item().description}
                  imageUrl={item().imageUrl}
                  url={item().url}
                />
              )
            }
          }
        </Index>
      </div>
    </div>
  )
}