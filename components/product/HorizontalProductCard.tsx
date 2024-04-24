import BeginProductCard from "deco-sites/camp09/islands/BeginProduct/BeginProductCard.tsx";
import ImageCulture from "../fallbacks/imageCultureFallback.tsx";
import AddToCartButtonVTEX from "../../islands/AddToCartButton/vtex.tsx";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import type { Product } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import { formatPrice } from "../../sdk/format.ts";
import { useOffer } from "../../sdk/useOffer.ts";

export interface Props {
  product?: Product | null;
  preload?: boolean;
  index?: number;
}

const WIDTH = 300;
const HEIGHT = 300;

export function ErrorFallback({ error }: { error?: Error }) {
  return (
    <ImageCulture
      title="Novidades"
      content="Veja mais sobre nossas Culturas"
      alt="culturas"
      imgDesktop="../DesktopBanner.jpg"
      imgMobile="../MobileBanner.jpg"
      button={{ href: "/culturas", label: "saiba mais" }}
    />
  );
}
export function LoadingFallback() {
  return <div class="skeleton w-full h-80"></div>;
}

export default function HorizontalProductCard(
  { product, preload, index }: Props,
) {
  if (!product) {
    return null;
  }

  const { productID, url, name, image: images, offers, isVariantOf } = product;
  const description = product.description || isVariantOf?.description;
  const productGroupID = isVariantOf?.productGroupID;
  const { listPrice, price, installments, seller = "1" } = useOffer(offers);
  const [front, back] = images ?? [];

  const eventItem = mapProductToAnalyticsItem({
    product,
    price,
    listPrice,
  });

  return (
    <div class="w-full h-auto py-2 px-1">
      <div class="container relative flex w-full flex-row max-w-4xl py-2 px-1 border rounded-xl  shadow-md">
        <Image
          src={front.url!}
          alt={front.alternateName}
          width={WIDTH}
          height={HEIGHT}
          class={`bg-base-100 col-span-full row-span-full rounded duration-100 transition-scale scale-100 lg:group-hover:scale-125 max-w-64 m-auto w-2/5 lg:w-5/12`}
          sizes="(max-width: 640px) 50vw, 20vw"
          preload={preload}
          loading={preload ? "eager" : "lazy"}
          decoding="async"
        />
        <BeginProductCard productId={productID} />
        <div class="flex flex-col gap-2 w-3/5 lg:w-3/5 lg:flex-col">
          <div class="flex flex-col lg:gap-3 lg:w-10/12">
            <h2
              class=" text-lg lg:text-2xl font-semibold"
              dangerouslySetInnerHTML={{ __html: name ?? "" }}
            >
            </h2>
            <span
              class="truncate text-sm"
              dangerouslySetInnerHTML={{ __html: description ?? "" }}
            >
            </span>
          </div>
          <div class="flex flex-col lg:justify-end lg:gap-3 lg:items-center">
            <span class="font-bold lg:text-3xl">
              {formatPrice(price, offers?.priceCurrency)}
            </span>
            <AddToCartButtonVTEX
              eventParams={{ items: [eventItem] }}
              productID={productID}
              seller={seller}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
