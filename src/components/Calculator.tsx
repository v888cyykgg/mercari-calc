"use client";

import React, { useState } from "react";

const SHIPPING_PRESETS = [
  { label: "ネコポス", value: 210 },
  { label: "ゆうパケットプラス", value: 520 },
  { label: "宅急便60", value: 750 },
  { label: "宅急便80", value: 850 },
  { label: "宅急便100", value: 1050 },
];

export default function Calculator() {
  const [price, setPrice] = useState<number | "">("");
  const [cost, setCost] = useState<number | "">("");
  const [shipping, setShipping] = useState<number | "">("");

  // Calculate results directly from inputs (derived state)
  const p = Number(price) || 0;
  const c = Number(cost) || 0;
  const s = Number(shipping) || 0;

  const fee = Math.floor(p * 0.1);
  const profit = p - fee - s - c;
  const margin = p > 0 ? (profit / p) * 100 : 0;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="bg-blue-500 p-4 text-white text-center">
        <h2 className="text-xl font-bold">利益計算</h2>
      </div>

      <div className="p-6 space-y-6">
        {/* 販売価格 */}
        <div className="space-y-2">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            販売価格 (円)
          </label>
          <div className="relative rounded-md shadow-sm">
            <input
              type="number"
              id="price"
              className="block w-full rounded-lg border-gray-300 pr-12 focus:border-blue-500 focus:ring-blue-500 text-lg p-3 border"
              placeholder="0"
              value={price}
              onChange={(e) =>
                setPrice(e.target.value === "" ? "" : Number(e.target.value))
              }
              onFocus={handleFocus}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm">円</span>
            </div>
          </div>
        </div>

        {/* 仕入れ値 */}
        <div className="space-y-2">
          <label
            htmlFor="cost"
            className="block text-sm font-medium text-gray-700"
          >
            仕入れ値 (円)
          </label>
          <div className="relative rounded-md shadow-sm">
            <input
              type="number"
              id="cost"
              className="block w-full rounded-lg border-gray-300 pr-12 focus:border-blue-500 focus:ring-blue-500 text-lg p-3 border"
              placeholder="0"
              value={cost}
              onChange={(e) =>
                setCost(e.target.value === "" ? "" : Number(e.target.value))
              }
              onFocus={handleFocus}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm">円</span>
            </div>
          </div>
        </div>

        {/* 送料 */}
        <div className="space-y-2">
          <label
            htmlFor="shipping"
            className="block text-sm font-medium text-gray-700"
          >
            送料 (円)
          </label>
          <div className="relative rounded-md shadow-sm">
            <input
              type="number"
              id="shipping"
              className="block w-full rounded-lg border-gray-300 pr-12 focus:border-blue-500 focus:ring-blue-500 text-lg p-3 border"
              placeholder="0"
              value={shipping}
              onChange={(e) =>
                setShipping(e.target.value === "" ? "" : Number(e.target.value))
              }
              onFocus={handleFocus}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm">円</span>
            </div>
          </div>

          {/* 送料プリセット */}
          <div className="flex flex-wrap gap-2 mt-2">
            {SHIPPING_PRESETS.map((preset) => (
              <button
                key={preset.value}
                type="button"
                onClick={() => setShipping(preset.value)}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors border border-blue-200"
              >
                {preset.label}: {preset.value}円
              </button>
            ))}
          </div>
        </div>

        {/* 結果表示エリア */}
        <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200 space-y-4">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>販売手数料 (10%)</span>
            <span className="font-medium">-{fee.toLocaleString()} 円</span>
          </div>

          <div className="border-t border-gray-200 my-2 pt-2">
            <div className="flex justify-between items-end">
              <span className="text-gray-900 font-bold text-lg">利益</span>
              <span
                className={`text-3xl font-bold ${profit >= 0 ? "text-blue-600" : "text-red-500"}`}
              >
                {profit.toLocaleString()}{" "}
                <span className="text-sm font-normal text-gray-500">円</span>
              </span>
            </div>
          </div>

          <div className="flex justify-end items-center text-sm">
            <span className="text-gray-500 mr-2">利益率:</span>
            <span
              className={`font-medium ${margin >= 20 ? "text-green-600" : margin > 0 ? "text-gray-700" : "text-red-500"}`}
            >
              {margin.toFixed(1)} %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
