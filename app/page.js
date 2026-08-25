"use client";

import Link from "next/link";
import { updates, currentVersion } from "../data/updates";

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

          {/* 現在の評価バッジ */}
          <div className="version-badge">
            <span>現在の評価</span>
            <strong>{currentVersion}</strong>
          </div>
        </section>

        {/* 更新履歴 */}
        <section className="updates">
          <div className="updates-header">
            <h2>更新履歴</h2>
            <span>UPDATE HISTORY</span>
          </div>

          <div className="updates-list">
            {updates.map((update, index) => (
              <div className="update-item" key={index}>
                <div className="update-date">
                  {update.date}
                </div>

                <div className="update-content">
                  <strong>{update.title}</strong>
                  <p>{update.text}</p>
                </div>
              </div>
            ))}
          </div>
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
            <br />
            ランク評価基準
            <br />
            ・機体独自の強さがある
            <br />
            ・特定の条件下で高いパフォーマンスを発揮する
            <br />
            ・対応力の高さ
            <br />
            ・対策の難しさ
            <br />
            サイト運営者の実力
            <br />
            ・チームホールドExtreme∞~2
          </p>
        </section>
      </div>

      <footer>
        © イニブ機体ランク
      </footer>

      <style jsx>{`

        /* 現在の評価 */

        .version-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: 20px;
          padding: 10px 16px;
          border-radius: 999px;
          background: #111827;
          color: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        }

        .version-badge span {
          font-size: 12px;
          opacity: 0.7;
        }

        .version-badge strong {
          font-size: 15px;
          letter-spacing: 0.03em;
        }

        /* 更新履歴 */

        .updates {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          margin: 28px 0;
          overflow: hidden;
        }

        .updates-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px;
          border-bottom: 1px solid #e5e7eb;
        }

        .updates-header h2 {
          margin: 0;
          font-size: 20px;
        }

        .updates-header span {
          font-size: 11px;
          color: #9ca3af;
          letter-spacing: 0.08em;
        }

        .updates-list {
          max-height: 260px;
          overflow-y: auto;
        }

        .update-item {
          display: grid;
          grid-template-columns: 95px 1fr;
          gap: 14px;
          padding: 15px 20px;
          border-bottom: 1px solid #f0f0f0;
        }

        .update-item:last-child {
          border-bottom: none;
        }

        .update-date {
          font-size: 12px;
          color: #6b7280;
          padding-top: 2px;
        }

        .update-content strong {
          font-size: 14px;
        }

        .update-content p {
          margin: 5px 0 0;
          color: #6b7280;
          font-size: 13px;
          line-height: 1.6;
        }

        .updates-list::-webkit-scrollbar {
          width: 7px;
        }

        .updates-list::-webkit-scrollbar-track {
          background: #f3f4f6;
        }

        .updates-list::-webkit-scrollbar-thumb {
          background: #c7cbd1;
          border-radius: 10px;
        }

        @media (max-width: 600px) {

          .version-badge {
            margin-top: 16px;
            padding: 9px 14px;
          }

          .version-badge span {
            font-size: 11px;
          }

          .version-badge strong {
            font-size: 14px;
          }

          .updates-header {
            padding: 16px;
          }

          .update-item {
            grid-template-columns: 82px 1fr;
            gap: 10px;
            padding: 14px 16px;
          }

          .updates-list {
            max-height: 240px;
          }

          .update-date {
            font-size: 11px;
          }

          .update-content strong {
            font-size: 13px;
          }

          .update-content p {
            font-size: 12px;
          }

        }

      `}</style>
    </main>
  );
}
