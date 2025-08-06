"use client";

import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Link } from "@heroui/link";
import { Image } from "@heroui/react";

interface IProps {
  images: string[];
}

export default function ImageGallery({ images }: IProps) {
  const isSingleImage = images.length === 1;

  return (
    <LightGallery
      elementClassNames={`mt-2 gap-2 ${isSingleImage ? "block w-full" : "grid grid-cols-2 place-items-center "}`}
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
    >
      {images.map((image, index) => (
        <Link
          className={`${
            isSingleImage
              ? "w-full"
              : `w-full ${images.length === 3 && index === 0 ? "col-span-2" : "col-span-1"}`
          }`}
          key={index}
          href={image}
        >
          <Image
            src={image}
            classNames={{
              wrapper: "!w-full !max-w-full",
              img: "!w-full object-cover",
              blurredImg: "!w-full",
            }}
            height={400}
            width="100%"
            alt={`image-${index + 1}`}
          />
        </Link>
      ))}
    </LightGallery>
  );
}
