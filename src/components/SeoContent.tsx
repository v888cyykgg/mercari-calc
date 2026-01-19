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

      {/* 利益を出すポイントセクション */}
      <section className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
          利益を出すためのポイント
        </h2>
        <div className="space-y-4">
          <h3 className="font-bold text-gray-800 flex items-center gap-2">
            <span className="text-amber-500">💡</span> 送料を抑えるコツ
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            フリマアプリで利益を最大化するためには、送料をできるだけ安く抑えることが重要です。特に「厚さ」が3cmを超えると送料が大きく跳ね上がります。
          </p>
          <div className="bg-amber-50 rounded-lg p-4 text-sm text-gray-700">
            <p className="font-medium mb-2">おすすめの配送方法（A4サイズ以下）</p>
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li><span className="font-medium">ネコポス（らくらくメルカリ便）</span>：厚さ3cm以内</li>
              <li><span className="font-medium">ゆうパケットポスト（ゆうゆうメルカリ便）</span>：ポスト投函可能ならOK（目安4cm程度まで）</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600">
            衣類などは圧縮袋を活用して厚さを減らすことで、宅急便コンパクトや宅急便（700円以上）を使わずに、200円〜230円程度の送料で送れる場合があります。
          </p>
        </div>
      </section>
    </div>
  );
}
