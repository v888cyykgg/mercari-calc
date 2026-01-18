"use client";

import React, { useState } from "react";

const SHIPPING_PRESETS = [
  { label: "ネコポス", value: 210 },
  { label: "ゆうパケットプラス", value: 520 },
  { label: "宅急便60", value: 750 },
  { label: "宅急便80", value: 850 },
  { label: "宅急便100", value: 1050 },
];

type AppType = "mercari" | "yahoo" | "rakuma" | "other";

const APP_CONFIG = {
  mercari: {
    name: "メルカリ",
    feeRate: 10,
    headerGradient: "bg-gradient-to-r from-rose-400 to-red-500",
    ring: "focus:ring-rose-200",
    border: "focus:border-rose-400",
    // Button styles
    btnActive: "bg-rose-500 text-white shadow-md transform scale-105",
    btnInactive: "bg-white border border-rose-200 text-rose-500 hover:bg-rose-50",
    // Text colors
    textProfit: "text-rose-600",
  },
  yahoo: {
    name: "Yahoo!フリマ",
    feeRate: 5,
    headerGradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
    ring: "focus:ring-yellow-200",
    border: "focus:border-yellow-400",
    btnActive: "bg-yellow-500 text-white shadow-md transform scale-105",
    btnInactive: "bg-white border border-yellow-200 text-yellow-600 hover:bg-yellow-50",
    textProfit: "text-yellow-600",
  },
  rakuma: {
    name: "楽天ラクマ",
    feeRate: 10,
    headerGradient: "bg-gradient-to-r from-blue-400 to-indigo-500",
    ring: "focus:ring-blue-200",
    border: "focus:border-blue-400",
    btnActive: "bg-blue-500 text-white shadow-md transform scale-105",
    btnInactive: "bg-white border border-blue-200 text-blue-600 hover:bg-blue-50",
    textProfit: "text-blue-600",
  },
  other: {
    name: "その他",
    feeRate: 10,
    headerGradient: "bg-gradient-to-r from-gray-500 to-slate-600",
    ring: "focus:ring-gray-200",
    border: "focus:border-gray-400",
    btnActive: "bg-gray-600 text-white shadow-md transform scale-105",
    btnInactive: "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",
    textProfit: "text-gray-700",
  },
};

export default function Calculator() {
  const [selectedApp, setSelectedApp] = useState<AppType>("mercari");
  const [price, setPrice] = useState<number | "">("");
  const [cost, setCost] = useState<number | "">("");
  const [shipping, setShipping] = useState<number | "">("");
  const [feeRate, setFeeRate] = useState<number | "">(10);

  // App Selection Handler
  const handleAppChange = (app: AppType) => {
    setSelectedApp(app);
    setFeeRate(APP_CONFIG[app].feeRate);
  };

  // Calculate results directly from inputs (derived state)
  const p = Number(price) || 0;
  const c = Number(cost) || 0;
  const s = Number(shipping) || 0;
  const r = Number(feeRate) || 0;

  const fee = Math.floor(p * (r / 100));
  const profit = p - fee - s - c;
  const margin = p > 0 ? (profit / p) * 100 : 0;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const currentTheme = APP_CONFIG[selectedApp];

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className={`${currentTheme.headerGradient} p-6 text-white text-center transition-all duration-300`}>
        <h2 className="text-2xl font-bold tracking-wide">利益計算</h2>
      </div>

      <div className="p-8 space-y-8">
        {/* App Selection */}
        <div className="space-y-2">
            <label htmlFor="app-select" className="block text-sm font-bold text-gray-600">
                出品するアプリ
            </label>
            <div className="relative">
                <select
                    id="app-select"
                    value={selectedApp}
                    onChange={(e) => handleAppChange(e.target.value as AppType)}
                    className={`block w-full rounded-lg border-gray-300 pr-10 focus:outline-none focus:ring-2 ${currentTheme.ring} ${currentTheme.border} text-lg p-3 border appearance-none bg-white transition-shadow duration-200`}
                >
                    <option value="mercari">メルカリ (10%)</option>
                    <option value="yahoo">Yahoo!フリマ (5%)</option>
                    <option value="rakuma">楽天ラクマ (変動/10%)</option>
                    <option value="other">その他 (自由入力)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </div>

        {/* User Inputs Grid */}
        <div className="grid grid-cols-2 gap-6">
             {/* 販売価格 */}
            <div className="space-y-2 col-span-2">
            <label
                htmlFor="price"
                className="block text-sm font-bold text-gray-600"
            >
                販売価格 (円)
            </label>
            <div className="relative rounded-md shadow-sm">
                <input
                type="number"
                id="price"
                className={`block w-full rounded-lg border-gray-300 pr-12 focus:outline-none focus:ring-2 ${currentTheme.ring} ${currentTheme.border} text-xl p-4 border transition-shadow duration-200`}
                placeholder="0"
                value={price}
                onChange={(e) =>
                    setPrice(e.target.value === "" ? "" : Number(e.target.value))
                }
                onFocus={handleFocus}
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                <span className="text-gray-400 font-medium">円</span>
                </div>
            </div>
            </div>

            {/* 手数料率 */}
            <div className="space-y-2">
                <label htmlFor="feeRate" className="block text-sm font-bold text-gray-600">
                    手数料率 (%)
                </label>
                <div className="relative rounded-md shadow-sm">
                    <input
                        type="number"
                        id="feeRate"
                        className={`block w-full rounded-lg border-gray-300 pr-8 focus:outline-none focus:ring-2 ${currentTheme.ring} ${currentTheme.border} text-lg p-3 border transition-shadow duration-200`}
                        placeholder="10"
                        value={feeRate}
                        onChange={(e) => setFeeRate(e.target.value === "" ? "" : Number(e.target.value))}
                        onFocus={handleFocus}
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <span className="text-gray-400 font-medium">%</span>
                    </div>
                </div>
            </div>

             {/* 仕入れ値 */}
            <div className="space-y-2">
            <label
                htmlFor="cost"
                className="block text-sm font-bold text-gray-600"
            >
                仕入れ値 (円)
            </label>
            <div className="relative rounded-md shadow-sm">
                <input
                type="number"
                id="cost"
                className={`block w-full rounded-lg border-gray-300 pr-12 focus:outline-none focus:ring-2 ${currentTheme.ring} ${currentTheme.border} text-lg p-3 border transition-shadow duration-200`}
                placeholder="0"
                value={cost}
                onChange={(e) =>
                    setCost(e.target.value === "" ? "" : Number(e.target.value))
                }
                onFocus={handleFocus}
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                <span className="text-gray-400 font-medium">円</span>
                </div>
            </div>
            </div>
        </div>

        {/* 送料 */}
        <div className="space-y-2">
          <label
            htmlFor="shipping"
            className="block text-sm font-bold text-gray-600"
          >
            送料 (円)
          </label>
          <div className="relative rounded-md shadow-sm">
            <input
              type="number"
              id="shipping"
              className={`block w-full rounded-lg border-gray-300 pr-12 focus:outline-none focus:ring-2 ${currentTheme.ring} ${currentTheme.border} text-lg p-3 border transition-shadow duration-200`}
              placeholder="0"
              value={shipping}
              onChange={(e) =>
                setShipping(e.target.value === "" ? "" : Number(e.target.value))
              }
              onFocus={handleFocus}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <span className="text-gray-400 font-medium">円</span>
            </div>
          </div>

          {/* 送料プリセット */}
          <div className="flex flex-wrap gap-2 mt-3">
            {SHIPPING_PRESETS.map((preset) => {
              // Simply check if value matches to style 'active'
              const isActive = shipping === preset.value;
              return (
              <button
                key={preset.value}
                type="button"
                onClick={() => setShipping(preset.value)}
                className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive ? currentTheme.btnActive : currentTheme.btnInactive
                }`}
              >
                {preset.label}: {preset.value}円
              </button>
            )})}
          </div>
        </div>

        {/* 結果表示エリア */}
        <div className="rounded-xl p-6 bg-slate-100 space-y-4">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>販売手数料 ({r}%)</span>
            <span className="font-medium">-{fee.toLocaleString()} 円</span>
          </div>

          <div className="border-t border-gray-200 my-2 pt-4">
            <div className="flex justify-between items-end">
              <span className="text-gray-800 font-bold text-xl pb-1">利益</span>
              <span
                className={`text-4xl font-extrabold tracking-tight ${profit >= 0 ? currentTheme.textProfit : "text-red-500"}`}
              >
                {profit.toLocaleString()}{" "}
                <span className="text-base font-bold text-gray-400 ml-1">円</span>
              </span>
            </div>
          </div>

          <div className="flex justify-end items-center text-sm pt-1">
            <span className="text-gray-500 mr-2 font-medium">利益率:</span>
            <span
              className={`font-bold text-lg ${margin >= 20 ? "text-green-600" : margin > 0 ? "text-gray-600" : "text-red-500"}`}
            >
              {margin.toFixed(1)} %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
