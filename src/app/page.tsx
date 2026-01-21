import Calculator from "@/components/Calculator";
import SeoContent from "@/components/SeoContent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-center">
          <h1 className="text-xl font-bold text-gray-800">フリマ利益計算機</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 w-full">
        <div className="max-w-md mx-auto space-y-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center space-y-3">
            <p className="text-gray-600 leading-relaxed">
              販売価格、仕入れ値、送料を入力するだけで<br />
              利益と利益率を自動計算します。
            </p>
            <p className="text-xs text-rose-500 bg-rose-50 inline-block px-3 py-1 rounded-full font-medium">
              メルカリ、ラクマ、PayPayフリマの手数料に対応
            </p>
          </div>

          <Calculator />

          {/* 広告エリア: Pollet */}
          <div className="flex justify-center my-8">
            <a href="https://px.a8.net/svt/ejp?a8mat=4AVB45+4OHOZ6+4UHE+TT69D" rel="nofollow" target="_blank">
              <img
                width={300}
                height={250}
                alt="Pollet"
                src="https://www22.a8.net/svt/bgt?aid=260121605283&wid=001&eno=01&mid=s00000022613005007000&mc=1"
              />
            </a>
            <img
              width={1}
              height={1}
              src="https://www13.a8.net/0.gif?a8mat=4AVB45+4OHOZ6+4UHE+TT69D"
              alt=""
            />
          </div>
          <SeoContent />
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
