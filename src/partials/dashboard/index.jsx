
import { Index } from "solid-js";
import Card from "~/components/Card";

const items = [
  { title: "PLTS", description: "Solar Panel simulation practical", url: "/plts", imageUrl: "/plts.jpg" },
  { title: "PLTB", description: "Wind Turbine simulation practical", url: "/pltb", imageUrl: "/pltB.jpg" },
  { title: "PLTMH", description: "Micro Hydro simulation practical", url: "/pltmh", imageUrl: "/pltmh.jpg" },
]

export default function ContentDashboard(props) {
  let delay = 0;
  return (
      <div class="flex flex-row gap-6 w-full">
        <Index each={items}>
          {
            (item, index) => {
              // delay +=  150;
              return (
                <Card
                  animation={`animate-in fade-in zoom-in delay-${delay+=100*(index+1)} duration-300`}
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
  )
}