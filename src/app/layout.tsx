import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { personSchema, websiteSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/ui/JsonLd";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...buildMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
    path: "/",
  }),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={personSchema()} />
        <JsonLd data={websiteSchema()} />
        {children}
      </body>
    </html>
  );
}
