import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | フリマ利益計算機",
  description: "フリマ利益計算機のプライバシーポリシーページです。個人情報の取り扱い、免責事項について記載しています。",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center">
          <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm flex items-center">
            ← 計算機に戻る
          </Link>
          <h1 className="text-xl font-bold text-gray-800 ml-auto mr-auto">プライバシーポリシー</h1>
          <div className="w-16"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 w-full">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-6 space-y-6 text-sm text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2 border-b pb-1">個人情報の利用目的</h2>
            <p>
              当サイトでは、お問い合わせの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。
              取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、
              これらの目的以外では利用いたしません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2 border-b pb-1">広告について</h2>
            <p>
              当サイトでは、第三者配信の広告サービス（Googleアドセンスなど）を利用しており、
              ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。
              クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、
              お客様個人を特定できるものではありません。
            </p>
            <p className="mt-2">
              Cookieを無効にする方法やGoogleアドセンスに関する詳細は
              <a 
                href="https://policies.google.com/technologies/ads?hl=ja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                「広告 – ポリシーと規約 – Google」
              </a>
              をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2 border-b pb-1">アクセス解析ツールについて</h2>
            <p>
              当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
              このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。
              このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2 border-b pb-1">免責事項</h2>
            <p>
              当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
            </p>
            <p className="mt-2">
              また当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、
              正確性や安全性を保証するものではありません。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
            </p>
            <p className="mt-2">
              当サイトの計算結果はあくまで目安です。各フリマアプリの仕様変更等により、実際の利益と異なる場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2 border-b pb-1">著作権について</h2>
            <p>
              当サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-6 mt-8">
        <div className="max-w-md mx-auto px-4 text-center space-y-2">
          <p className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()} Flea Market Profit Calculator
          </p>
        </div>
      </footer>
    </div>
  );
}
