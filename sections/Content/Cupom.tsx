import { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
  couponCode: string;
  couponDescription: HTMLWidget;
}

export default function coupon(
  { couponCode, couponDescription }: Props,
) {
  return (
<div class="container mx-auto">
  <div
    class="bg-gradient-to-br from-blue-600 to-lime-600 text-white text-center py-10 px-20 rounded-lg shadow-md relative">
    <h3 class="text-2xl font-semibold mb-4" dangerouslySetInnerHTML={{ __html: couponDescription }}/>
    <div class="flex items-center space-x-2 mb-6">
      <span
        id="couponCode"
        class="text center border-dashed border text-white px-4 py-2 rounded-l">{couponCode}</span>
    </div>
    <div
      class="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
    <div
      class="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
  </div>
</div>

  );
}
