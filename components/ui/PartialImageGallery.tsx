import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @titleBy alt
 */
interface Banner {
  src: ImageWidget;
  alt: string;
}

export interface Props {
  imgs: Banner[];
  count: number;
}

export default function PartialImageGallery({ imgs, count }: Props) {
  return (
    <div class="flex flex-col w-full h-auto items-center justify-center gap-3 py-6">
      <div class="flex flex-row flex-wrap gap-3 container w-full">
        {imgs?.map((img, index) => {
          if (index < count) {
            return (
              <Image
                src={img.src}
                alt={img.alt}
                width={100}
                height={100}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                class="w-[calc(33.33%-0.75rem)]"
              />
            );
          }
        })}
      </div>
      {imgs.length > count &&
        (
          <button
            class="btn bg-blue-700"
            {...usePartialSection({ props: { count: count + 3 } })}
          >
            Carregar mais
          </button>
        )}
    </div>
  );
}
