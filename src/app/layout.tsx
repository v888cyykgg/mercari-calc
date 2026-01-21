import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "メルカリ利益計算機 | 手数料・送料・純利益を自動計算【ラクマ・PayPayフリマ対応】",
  description: "メルカリ、ラクマ、PayPayフリマ対応の利益計算ツール。販売価格と仕入れ値を入力するだけで、手数料や配送方法ごとの送料を差し引いた「本当の利益」と「利益率」を瞬時に自動計算します。出品前の価格決めや損益分岐点の確認に。",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased bg-slate-50 text-gray-900`}
      >
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8587688966704275"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
