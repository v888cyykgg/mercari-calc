import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "お問い合わせ | フリマ利益計算機",
  description: "フリマ利益計算機に関するお問い合わせフォームです。ご意見・不具合報告などはこちらからお願いします。",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10 transition-all duration-300">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center">
          <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm flex items-center font-medium transition-colors">
            ← 計算機に戻る
          </Link>
          <h1 className="text-xl font-bold text-gray-800 ml-auto mr-auto">お問い合わせ</h1>
          <div className="w-16"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 w-full">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-6 md:p-8 space-y-6">
          <div className="text-center space-y-2 mb-4">
            <p className="text-sm text-gray-600">
              ツールに関するご意見・不具合報告は<br />
              こちらのフォームよりお願いします。
            </p>
          </div>
          
          <div className="w-full overflow-hidden rounded-lg">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfOWGEAhJcjd0KM7qtH1QG8I7jchbIf8vE1t6GTkrRLqjaVuQ/viewform?embedded=true" 
              width="100%" 
              height="850" 
              className="border-none w-full"
              title="お問い合わせフォーム"
            >
              読み込んでいます…
            </iframe>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
