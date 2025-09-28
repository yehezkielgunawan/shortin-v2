import type { Metadata } from "next";

type OGImageProps = {
  title: string;
  description: string;
  slug?: string;
};

export function generateOGImage({ title, description }: OGImageProps) {
  return `https://og-image-rev.yehez.workers.dev/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&image=https://shortin.yehezgun.com/icon512_maskable.png&siteName=shortin.yehezgun.com&social=Twitter:%20@yehezgun`;
}

export const metadataContent = ({
  title,
  description,
  slug,
}: OGImageProps): Metadata => ({
  title,
  description,
  category: "website",
  manifest: "/manifest.json",
  icons: {
    icon: ["/icon512_maskable.png"],
    shortcut: ["/icon512_maskable.png"],
    apple: ["/icon512_maskable.png"],
    other: {
      rel: "icon",
      url: "/icon512_maskable.png",
    },
  },
  openGraph: {
    type: "website",
    siteName: "YehezGun",
    url: `https://yehezgun.com${slug ? `/${slug}` : ""}`,
    title,
    description,
    images: [
      {
        url: generateOGImage({
          title,
          description,
        }),
        width: 800,
        height: 600,
        alt: title,
      },
    ],
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    site: "@yehezgun",
    creator: "@yehezgun",
    images: [
      generateOGImage({
        title,
        description,
      }),
    ],
  },
});
