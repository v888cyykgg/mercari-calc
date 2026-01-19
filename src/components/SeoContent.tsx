import React from "react";

export default function SeoContent() {
  return (
    <div className="space-y-8 mb-8">
      {/* 使い方セクション */}
      <section className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
          フリマ利益計算機の使い方
        </h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">
              1
            </span>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">出品するアプリを選択</h3>
              <p className="text-sm text-gray-600">
                メルカリ、楽天ラクマ、Yahoo!フリマ（旧PayPayフリマ）の中から、出品予定のアプリを選択します。
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">
              2
            </span>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">販売価格と仕入れ値を入力</h3>
              <p className="text-sm text-gray-600">
                売りたい価格と、商品の原価（仕入れ値）を入力します。仕入れ値が0円の場合は未入力でOKです。
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">
              3
            </span>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">送料を選択または入力</h3>
              <p className="text-sm text-gray-600">
                配送方法リストから選ぶか、直接送料を入力すると、自動で販売手数料と利益、利益率が計算されます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 手数料比較セクション */}
      <section className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
          各フリマアプリの手数料について（2026年最新）
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 rounded-l-lg">アプリ名</th>
                <th scope="col" className="px-4 py-3 rounded-r-lg">販売手数料</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">メルカリ</td>
                <td className="px-4 py-3">販売価格の 10%</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">Yahoo!フリマ <span className="text-xs text-gray-400 font-normal">（旧PayPayフリマ）</span></td>
                <td className="px-4 py-3">販売価格の 5%</td>
              </tr>
              <tr className="bg-white hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">楽天ラクマ</td>
                <td className="px-4 py-3">
                  販売価格の 10%<br />
                  <span className="text-xs text-gray-500">（※実績により変動あり）</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-gray-500">
          ※2026年1月時点の情報です。キャンペーン等で変動する場合があります。
        </p>
      </section>

      {/* 送料完全攻略セクション */}
      <section className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
          【送料完全攻略】サイズ別・最安発送方法リスト
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          フリマアプリで利益を最大化する鍵は「発送方法の選び方」にあります。サイズごとの最安配送方法をまとめました。迷ったらこのチャートを参考にしてください。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600 border border-gray-100 rounded-lg">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 border-b">サイズ・厚さ</th>
                <th scope="col" className="px-4 py-3 border-b">おすすめ発送方法</th>
                <th scope="col" className="px-4 py-3 border-b">料金目安</th>
                <th scope="col" className="px-4 py-3 border-b">適した商品</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">
                  A4サイズ<br />
                  <span className="text-xs font-normal text-gray-500">厚さ3cm以内</span>
                </td>
                <td className="px-4 py-3">
                  <div className="space-y-1">
                    <p className="font-bold text-blue-600">ゆうパケットポストmini</p>
                    <p>ネコポス / ゆうパケットポスト</p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  約160円〜<br />
                  <span className="text-xs text-gray-400">約200円〜</span>
                </td>
                <td className="px-4 py-3">トレーディングカード、アクセサリー、スマホケース、薄手の服、本</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">
                  中型<br />
                  <span className="text-xs font-normal text-gray-500">厚さ3cm〜7cm</span>
                </td>
                <td className="px-4 py-3">
                  <div className="space-y-1">
                    <p className="font-bold text-green-600">宅急便コンパクト</p>
                    <p>ゆうパケットプラス</p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  約450円〜520円<br />
                  <span className="text-xs text-gray-400">（専用箱代込み）</span>
                </td>
                <td className="px-4 py-3">厚手の服（パーカー等）、化粧品セット、小型の雑貨、おもちゃ</td>
              </tr>
              <tr className="bg-white hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">
                  大型<br />
                  <span className="text-xs font-normal text-gray-500">60サイズ〜</span>
                </td>
                <td className="px-4 py-3">
                  <div className="space-y-1">
                    <p className="font-bold text-orange-600">宅急便</p>
                    <p>ゆうパック</p>
                  </div>
                </td>
                <td className="px-4 py-3">750円〜</td>
                <td className="px-4 py-3">靴（スニーカー）、アウター、家電、バッグ、まとめ売り</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 梱包の裏技セクション */}
      <section className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
          【利益アップ】送料を節約する「梱包の裏技」3選
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          メルカリなどで「送料 節約」をするには、少しの工夫でサイズダウンさせることが有効です。
        </p>
        <div className="flex flex-col gap-4">
          {/* 裏技1: 圧縮 */}
          <div className="bg-orange-50 rounded-xl p-5 border border-orange-100 flex flex-col sm:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center shadow-sm">
              <span className="text-2xl">🧥</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1 text-lg">圧縮テクニック</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                冬服やぬいぐるみは空気を多く含んでいます。<strong>圧縮袋</strong>を使ってペチャンコにすれば、60サイズの荷物が宅急便コンパクト（薄型）やゆうパケットポストに入るサイズまで小さくなることも！
              </p>
            </div>
          </div>

          {/* 裏技2: 箱加工 */}
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 flex flex-col sm:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center shadow-sm">
              <span className="text-2xl">📦</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1 text-lg">箱の加工</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                通販のダンボールをそのまま使うのはNG！中身に合わせてカッターで四隅に切り込みを入れ、<strong>高さを低く折りたたむ</strong>ことでサイズダウン（60サイズ化など）でき、数百円の節約になります。
              </p>
            </div>
          </div>

          {/* 裏技3: 封筒活用 */}
          <div className="bg-green-50 rounded-xl p-5 border border-green-100 flex flex-col sm:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center shadow-sm">
              <span className="text-2xl">✉️</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1 text-lg">封筒・袋の活用</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                壊れ物でなければ、ダンボール箱よりも<strong>「厚手の紙袋」や「宅配ビニール袋」</strong>がおすすめ。箱自体の厚みや重さをカットでき、ネコポスやゆうパケットポストで送りやすくなります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQセクション */}
      <section className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
          よくある質問（FAQ）
        </h2>
        <div className="space-y-6">
          <div className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            <h3 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
              <span className="text-blue-500 font-black">Q.</span>
              手数料はいつ引かれますか？
            </h3>
            <p className="text-sm text-gray-600 pl-6 leading-relaxed">
              <span className="font-bold text-gray-700">A.</span> 商品が売れた瞬間ではなく、取引完了後の売上金が入るタイミングで自動的に引かれます。出品時点でお金を払う必要はありません。
            </p>
          </div>
          <div className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            <h3 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
              <span className="text-blue-500 font-black">Q.</span>
              送料が出品価格より高くなったらどうなりますか？
            </h3>
            <p className="text-sm text-gray-600 pl-6 leading-relaxed">
              <span className="font-bold text-gray-700">A.</span> 利益がマイナス（赤字）になり、売上金から差し引かれるか、不足分を請求される場合があります。特に大きい荷物を安く売る場合は注意が必要です。必ず事前にこの計算機でチェックしましょう！
            </p>
          </div>
          <div className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            <h3 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
              <span className="text-blue-500 font-black">Q.</span>
              「着払い」は売れますか？
            </h3>
            <p className="text-sm text-gray-600 pl-6 leading-relaxed">
              <span className="font-bold text-gray-700">A.</span> フリマアプリでは「送料込み（出品者負担）」が圧倒的に売れやすいです。着払いは購入者にとって総額が分かりにくく敬遠されがちなので、基本的に避けましょう。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
