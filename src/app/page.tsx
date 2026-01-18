import Calculator from "@/components/Calculator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-center">
          <h1 className="text-xl font-bold text-gray-800">フリマ利益計算機</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 w-full">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">
              販売価格、仕入れ値、送料を入力するだけで<br />
              利益と利益率を自動計算します。
            </p>
            <p className="text-xs text-blue-600 bg-blue-50 inline-block px-3 py-1 rounded-full">
              メルカリ、ラクマ、PayPayフリマの手数料(10%)に対応
            </p>
          </div>

          <Calculator />
          
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-6 mt-8">
        <div className="max-w-md mx-auto px-4 text-center space-y-2">
          <p className="text-xs text-gray-400">
            ※当ツールは非公式です。各フリマアプリの公式ツールではありません。<br />
            手数料は一律10%で計算しています。
          </p>
          <p className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()} Flea Market Profit Calculator
          </p>
        </div>
      </footer>
    </div>
  );
}
