"use client";

import Link from "next/link";

const costs = [3000, 2500, 2000, 1500];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="wrap">
          <Link href="/" className="site-title">
            イニブ機体ランク
          </Link>

          <div className="site-sub">
            EXVS CHARACTER RANK
          </div>
        </div>
      </header>

      <div className="wrap">
        <section className="intro">
          <div className="eyebrow">
            EXVS CHARACTER RANK
          </div>

          <h1>
            機動戦士ガンダム
            <br />
            エクストリームバーサス2インフィニットブースト
          </h1>

          <p>
            機体の評価・ランクをコスト別にまとめています。
          </p>
        </section>

        <h2 className="section-heading">
          コストから探す
        </h2>

        <div className="cost-grid">
          {costs.map((cost) => (
            <Link
              href={"/cost/" + cost}
              className="cost-banner"
              key={cost}
            >
              <strong>{cost}</strong>
              <span>コスト</span>
            </Link>
          ))}
        </div>

        <section className="notice">
          <h2>機体ランクについて</h2>

          <p>
            コストを選択すると、
            S・A+・A・A-・B+・B・C・新機体の順に
            機体を確認できます。
             <br />ランク評価基準
             <br />・機体独自の強さがある
             <br />・特定の条件下で高いパフォーマンスを発揮する
             <br />・対応力の高さ
             <br />・対策の難しさ

             <br />サイト運営者の実力
             <br />・チームホールドExtreme∞~2
          </p>
        </section>
      </div>

      <footer>
        © EXVS 機体ランク
      </footer>
    </main>
  );
}
