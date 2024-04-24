
import { sendScoreEvent } from "../../../sdk/analytics.tsx";
import Icon from "../../ui/Icon.tsx";
import { numberOfLikes } from "../../../sdk/useLikes.ts";
import { useSignal, useSignalEffect } from "@preact/signals";
import { invoke } from "deco-sites/camp09/runtime.ts";

export default function TheLikes() {
  const number = useSignal(0);

  useSignalEffect(() => {
    async function getLikes() {
      const response = await invoke["deco-sites/camp09"].loaders.Product.getAllLikes({});
      number.value = response.total;
      sendScoreEvent(
        {
            name: "post_score",
            params:{
                score: Number(response.total)
            }
        }
      )
    }

    if (numberOfLikes.value) {
      getLikes();
    }

    setInterval(() => {
      getLikes();
    }, 3e4);

    getLikes();
  });

  return (
    <div class="flex flex-row gap-2">
      <Icon id="friends" size={24} />
      <span>{number.value}</span>
    </div>
  );
}
