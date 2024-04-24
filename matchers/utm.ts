import { MatchContext } from "deco/blocks/matcher.ts";

export interface Props {
  /** @title UTM Campaign for matcher */
  utm: string;
}

export default function Utm(props: Props, ctx: MatchContext) {
  const url = new URL(ctx.request.url);
  const utmParam = url.searchParams.get("utmcampaign");
  return utmParam === props.utm;
}
