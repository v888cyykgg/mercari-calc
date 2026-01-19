import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "プライバシーポリシー | フリマ利益計算機",
  description: "フリマ利益計算機のプライバシーポリシーページです。個人情報の取り扱い、Cookieの使用、免責事項について記載しています。",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10 transition-all duration-300">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center">
          <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm flex items-center font-medium transition-colors">
            ← 計算機に戻る
          </Link>
          <h1 className="text-xl font-bold text-gray-800 ml-auto mr-auto">プライバシーポリシー</h1>
          <div className="w-16"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 w-full">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-6 md:p-8 space-y-8 text-sm text-gray-700 leading-relaxed">
          
          <p>
            当サイト「フリマ利益計算機」（以下、「当ツール」といいます）は、ユーザーの個人情報の取り扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます）を定めます。
          </p>
          
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3 border-b pb-1">第1条（個人情報の利用目的）</h2>
            <p>
              当ツールでは、お問い合わせフォームのご利用時に、お名前やメールアドレス等の個人情報をご入力いただく場合がございます。
              取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3 border-b pb-1">第2条（広告配信について）</h2>
            <div className="space-y-4">
              <p>
                当ツールでは、第三者配信の広告サービス（Google AdSense等）を利用しています。
                このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当ツールや他サイトへのアクセスに関する情報「Cookie」（氏名、住所、メール アドレス、電話番号は含まれません）を使用することがあります。
              </p>
              <p>
                また、Googleなどの第三者配信事業者は、Cookieを使用して、ユーザーが当ツールや他のウェブサイトに過去にアクセスした際の情報に基づいて広告を配信します。
              </p>
              <p>
                ユーザーは、<a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">広告設定</a>でパーソナライズ広告を無効にすることができます。
                または、<a href="https://www.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.aboutads.info</a>にアクセスすれば、パーソナライズ広告に使われる第三者配信事業者のCookieを無効にすることができます。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3 border-b pb-1">第3条（アクセス解析ツールについて）</h2>
            <p>
              当ツールでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
              このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
              このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
              この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3 border-b pb-1">第4条（免責事項）</h2>
            <div className="space-y-4">
              <p>
                当ツールからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
              </p>
              <p>
                また当ツールのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。
                当ツールに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
              </p>
              <p>
                当ツールの計算結果は各フリマアプリの利用規約や手数料率に基づき計算しておりますが、アプリ側の仕様変更等により、実際の利益額と異なる場合があります。
                最終的な利益額については、各アプリの公式情報をご確認ください。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3 border-b pb-1">第5条（著作権について）</h2>
            <p>
              当ツールで掲載している文章や画像などにつきましては、無断転載することを禁止します。
              当ツールはリンクフリーですが、画像への直リンクや、インラインフレームを使用したHTML内への表示はご遠慮ください。
            </p>
          </section>

          <div className="pt-4 text-right text-xs text-gray-500">
            <p>制定日：2026年1月18日</p>
            <p>運営者：Axis Studio</p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
