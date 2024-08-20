/** Global import block
 * required packages
 * Next | Antd | Google font
 */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";

/** Custom import block
 * custom file based imports
 * custom component imports
 */
import "@/assets/style/globals.css";
import cls from "@/libs/cls";
import site from "./config/site.info";

/** Fonts setup
 * Inter | primary
 */
const primaryFont = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-primary",
});

/** Metadata Setup
 * Search Engine Optimization
 * Web shareability
 * Static Metadata
 */
export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

/* -------------------------------------------------------------------------- */
/*                                 root layout                                */
/* -------------------------------------------------------------------------- */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cls(primaryFont.variable, "font-primary")}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
