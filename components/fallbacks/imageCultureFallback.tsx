import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

export interface Props {
  title?: string;
  content?: HTMLWidget;
  imgDesktop: ImageWidget;
  imgMobile: ImageWidget;
  alt?: string;
  button?: {
    label: string;
    href: string;
  };
}

export default function ImageCulture(props: Props) {
  const { title, content, button, imgMobile, imgDesktop, alt } = props;

  return (
    <div class="flex-col flex w-full h-auto gap-3 text-center">
      {title && <h2 class="text-3xl">{title}</h2>}
      {content && (
        <span class="text-base" dangerouslySetInnerHTML={{ __html: content }}>
        </span>
      )}
      <Picture>
        <Source
          media="(max-width: 1023)"
          fetchPriority={"auto"}
          src={imgMobile}
          width={350}
          height={300}
        />
        <Source
          media="(min-width: 1024px)"
          fetchPriority={"auto"}
          src={imgDesktop}
          width={1024}
          height={300}
        />
        <image
          class="w-full h-auto object-cover"
          src={imgMobile}
          width={350}
          height={300}
          alt={alt}
        >
        </image>
      </Picture>
      {button?.href &&
        (
          <a class="btn bg-primary" href={button?.href}>
            {button?.label}
          </a>
        )}
    </div>
  );
}
