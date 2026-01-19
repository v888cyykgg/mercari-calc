import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 mt-12 bg-slate-50">
      <div className="max-w-md mx-auto px-4 text-center space-y-4">
        <p className="text-xs text-gray-400 leading-relaxed">
          ※当ツールは非公式です。各フリマアプリの公式ツールではありません。<br />
          手数料は各アプリの規約に基づき計算していますが、実際の金額と異なる場合があります。
        </p>
        <div className="flex justify-center gap-6 text-xs text-gray-500">
          <Link href="/privacy" className="hover:text-gray-800 underline transition-colors">
            プライバシーポリシー
          </Link>
          <Link href="/contact" className="hover:text-gray-800 underline transition-colors">
            お問い合わせ
          </Link>
        </div>
        <p className="text-xs text-gray-300 font-light pt-2">
          &copy; {new Date().getFullYear()} Axis Studio
        </p>
      </div>
    </footer>
  );
}
