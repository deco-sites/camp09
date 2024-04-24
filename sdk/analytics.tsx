import type { AnalyticsEvent } from "apps/commerce/types.ts";

/* ---
TODO: MOVE THIS EVENT TO CustomEvents.ts to extends customizable events 😛
--*/
export interface ScoreParams{
  score: number,
  level?: number,
  character?: string
}
export interface ScoreEvent{
  name: string,
  params: ScoreParams
}

export const sendEvent = <E extends AnalyticsEvent >(event: E ) => {
  console.log(JSON.stringify(event, null, 2));
  globalThis.window.DECO.events.dispatch(event);
};

export const sendScoreEvent = (event: ScoreEvent ) => {
  console.log(JSON.stringify(event, null, 2));
  globalThis.window.DECO.events.dispatch(event);
};
