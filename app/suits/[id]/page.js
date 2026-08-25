import Link from "next/link";
import { suits } from "../../../data/suits";

export default function SuitPage({ params }) {
  const suit = suits.find((item) => item.id === params.id);

  if (!suit) {
    return (
      <main style={{ padding: "40px" }}>
        <h1>機体が見つかりません</h1>
        <Link href="/">トップへ戻る</Link>
      </main>
    );
  }

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #f5f6f8;
          color: #111827;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Noto Sans JP",
            sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .header {
          background: #111827;
          color: white;
          padding: 22px 16px;
        }

        .header-inner {
          max-width: 1000px;
          margin: 0 auto;
        }

        .site-name {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.08em;
          opacity: 0.7;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 24px 16px 60px;
        }

        .breadcrumb {
          font-size: 13px;
          color: #6b7280;
          margin-bottom: 20px;
        }

        .breadcrumb a {
          color: #2563eb;
        }

        .machine {
          background: white;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 3px 15px rgba(0,0,0,0.07);
        }

        .machine-image {
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #eef0f3;
        }

        .machine-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .machine-info {
          padding: 24px;
        }

        .rank {
          display: inline-block;
          background: #111827;
          color: white;
          padding: 6px 12px;
          border-radius: 8px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        h1 {
          margin: 0 0 18px;
          font-size: 28px;
          line-height: 1.4;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 25px;
        }

        .info-box {
          background: #f5f6f8;
          border-radius: 10px;
          padding: 14px;
        }

        .info-label {
          display: block;
          color: #6b7280;
          font-size: 12px;
          margin-bottom: 4px;
        }

        .info-value {
          font-size: 18px;
          font-weight: 800;
        }

        .description {
          margin-top: 25px;
          padding-top: 25px;
          border-top: 1px solid #e5e7eb;
        }

        .description h2 {
          font-size: 20px;
          margin: 0 0 10px;
        }

        .description p {
          color: #4b5563;
          line-height: 1.8;
        }

        .back-links {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 20px;
        }

        .back-link {
          display: block;
          text-align: center;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 13px;
          font-weight: 700;
        }

        .back-link:hover {
          background: #f5f6f8;
        }

        footer {
          padding: 30px 16px;
          text-align: center;
          color: #9ca3af;
          font-size: 12px;
        }

        @media (min-width: 768px) {
          .machine {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
          }

          .machine-image {
            height: 100%;
            min-height: 500px;
            aspect-ratio: auto;
          }

          .machine-info {
            padding: 35px;
          }

          h1 {
            font-size: 32px;
          }
        }
      `}</style>

      <header className="header">
        <div className="header-inner">
          <div className="site-name">
            EXVS CHARACTER RANK
          </div>
        </div>
      </header>

      <main className="container">

        <div className="breadcrumb">
          <Link href="/">トップ</Link>
          {" ＞ "}
          <Link href={`/cost/${suit.cost}`}>
            {suit.cost}コスト
          </Link>
          {" ＞ "}
          {suit.name}
        </div>

        <article className="machine">

          <div className="machine-image">
            <img
              src={`/images/${suit.id}.jpg`}
              alt={suit.name}
            />
          </div>

          <div className="machine-info">

            <div className="rank">
              {suit.rank}
            </div>

            <h1>{suit.name}</h1>

            <div className="info-grid">

              <div className="info-box">
                <span className="info-label">
                  コスト
                </span>

                <span className="info-value">
                  {suit.cost}
                </span>
              </div>

              <div className="info-box">
                <span className="info-label">
                  ランク
                </span>

                <span className="info-value">
                  {suit.rank}
                </span>
              </div>

            </div>

            <div className="description">
              <h2>機体評価</h2>

              <p>
                {suit.name}の評価・特徴などを掲載予定です。
              </p>
            </div>

{suit.wiki && (
  <a
    href={suit.wiki}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "block",
      marginTop: "20px",
      padding: "14px",
      background: "#111827",
      color: "white",
      textAlign: "center",
      borderRadius: "10px",
      fontWeight: "700",
      textDecoration: "none",
    }}
  >
    Wikiを見る ↗
  </a>
)}
          </div>

        </article>

        <div className="back-links">

          <Link
            href={`/cost/${suit.cost}`}
            className="back-link"
          >
            ← {suit.cost}コスト一覧
          </Link>

          <Link
            href="/"
            className="back-link"
          >
            ← トップページ
          </Link>

        </div>

      </main>

      <footer>
        © EXVS CHARACTER RANK
      </footer>
    </>
  );
}
