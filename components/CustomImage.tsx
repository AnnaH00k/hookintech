import Image, { ImageProps } from "next/image";

type CustomImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

export function CustomImage({ src, ...props }: CustomImageProps) {
  const basePath = process.env.NODE_ENV === "production" ? "/hooked0ntech" : "";
  const normalizedPath = src.startsWith("/") ? src : `/${src}`;
  const fullPath = `${basePath}${normalizedPath}`;

  return <Image src={fullPath} unoptimized {...props} />;
}
