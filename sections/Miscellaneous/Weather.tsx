import { Temperature } from "apps/weather/loaders/temperature.ts";
export interface Props {
  temperature?: Temperature | null;
}
export default function Weather({ temperature }: Props) {
  return temperature && (
    <div class="flex fixed items-center justify-end">
      <p class="flex-col w-full h-20 badge badge-info gap-2 rounded-full text-blue-500 ">
        Brasil <span class="text-primary text-lg">{temperature?.celsius}°</span>
      </p>
    </div>
  );
}
