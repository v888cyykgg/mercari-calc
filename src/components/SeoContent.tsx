import React from "react";

export default function SeoContent() {
  return (
    <div className="space-y-8 mb-8">
      {/* 送料比較ガイド */}
      <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-100 pb-2">
          フリマアプリの送料比較ガイド
        </h2>
        <div className="space-y-4 text-sm text-gray-600">
          <p>
            利益を最大化するためには、最適な配送方法を選ぶことが重要です。
            主な配送方法とサイズ・料金の目安をまとめました。
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-700 mb-2">小型・薄型の商品（〜A4サイズ）</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>ネコポス (らくらくメルカリ便)</strong>
                  <br />
                  <span className="text-xs">全国一律 210円 / 角形A4サイズ / 厚さ3cm以内</span>
                </li>
                <li>
                  <strong>ゆうパケットポスト (ゆうゆうメルカリ便)</strong>
                  <br />
                  <span className="text-xs">全国一律 215円 (+シール代) / ポスト投函</span>
                </li>
                <li>
                  <strong>ゆうパケット (ゆうゆうメルカリ便)</strong>
                  <br />
                  <span className="text-xs">全国一律 230円 / A4サイズ / 厚さ3cm以内</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-700 mb-2">中型〜大型の商品</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>宅急便コンパクト (らくらくメルカリ便)</strong>
                  <br />
                  <span className="text-xs">全国一律 450円 (+専用BOX代 70円)</span>
                </li>
                <li>
                  <strong>ゆうパケットプラス (ゆうゆうメルカリ便)</strong>
                  <br />
                  <span className="text-xs">全国一律 455円 (+専用BOX代 65円)</span>
                </li>
                <li>
                  <strong>宅急便 60サイズ〜</strong>
                  <br />
                  <span className="text-xs">750円〜 / 重さやサイズに応じて変動</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            ※料金は変更される場合があります。最新情報は各アプリの公式ガイドをご確認ください。
          </p>
        </div>
      </section>

      {/* 利益を出すための価格設定のコツ */}
      <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-100 pb-2">
          利益を出すための価格設定のコツ
        </h2>
        <div className="space-y-4 text-sm text-gray-600">
          <p>
            「思ったより利益が少なかった…」とならないために、出品前に以下のポイントをチェックしましょう。
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-700">1. 手数料と送料を先に引いて考える</h3>
              <p className="mt-1">
                販売価格の10%が手数料として引かれます。さらに送料を差し引いた額が手元に残る金額（利益）です。
                <br />
                例えば、1000円で売れても、手数料100円と送料210円を引くと、利益は690円になります。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-700">2. 値下げ交渉分を上乗せしておく</h3>
              <p className="mt-1">
                フリマアプリでは値下げ交渉が頻繁に行われます。
                最初からギリギリの価格で出品せず、10%程度値引きしても利益が出る価格設定にしておくと安心です。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-700">3. 厚さに注意する</h3>
              <p className="mt-1">
                送料は「重さ」より「厚さ」で大きく変わることがあります。
                3cmを超えると送料が急に高くなる（200円台→400円台〜）ため、
                圧縮できる衣類などは工夫して3cm以内に収めると利益アップにつながります。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
