import Link from "next/link";
import { suits } from "../../../data/suits";

const ranks = ["S", "A＋", "A", "A-", "B＋", "B", "C", "新機体"];

export default function CostPage({ params }) {
  const cost = Number(params.cost);

  const machines = suits.filter((suit) => suit.cost === cost);

  const grouped = {};

  ranks.forEach((rank) => {
    grouped[rank] = machines.filter((suit) => suit.rank === rank);
  });

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
          max-width: 1200px;
          margin: 0 auto;
        }

        .site-name {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.08em;
          opacity: 0.7;
        }

        .header h1 {
          margin: 5px 0 0;
          font-size: 26px;
        }

        .container {
          max-width: 1200px;
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

        .intro {
          background: white;
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .intro-label {
          font-size: 12px;
          font-weight: 700;
          color: #2563eb;
          letter-spacing: 0.1em;
        }

        .intro h2 {
          margin: 7px 0;
          font-size: 28px;
        }

        .intro p {
          margin: 0;
          color: #6b7280;
        }

        .cost-nav {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          margin-bottom: 30px;
          padding-bottom: 4px;
        }

        .cost-nav a {
          flex: 0 0 auto;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 10px 20px;
          font-weight: 700;
        }

        .cost-nav a.active {
          background: #111827;
          color: white;
          border-color: #111827;
        }

        .rank-section {
          margin-bottom: 38px;
        }

        .rank-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .rank-badge {
          min-width: 50px;
          text-align: center;
          padding: 7px 10px;
          border-radius: 8px;
          background: #111827;
          color: white;
          font-size: 15px;
          font-weight: 800;
        }

        .rank-header h2 {
          margin: 0;
          font-size: 20px;
        }

        .machine-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .machine-card {
          display: block;
          overflow: hidden;
          background: white;
          border-radius: 14px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 3px 10px rgba(0,0,0,0.05);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .machine-card:nth-child(even) {
          transform: translateY(10px);
        }

        .machine-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }

        .machine-card:nth-child(even):hover {
          transform: translateY(7px);
        }

        .machine-image {
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #eef0f3;
          overflow: hidden;
        }

        .machine-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .machine-info {
          padding: 11px 12px 13px;
        }

        .machine-name {
          margin: 0 0 9px;
          font-size: 14px;
          line-height: 1.45;
          font-weight: 700;
        }

        .machine-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: #6b7280;
        }

        .machine-rank {
          color: #111827;
          font-size: 14px;
          font-weight: 800;
        }

        .empty {
          padding: 30px;
          background: white;
          border-radius: 12px;
          text-align: center;
          color: #6b7280;
        }

        footer {
          padding: 30px 16px;
          text-align: center;
          color: #9ca3af;
          font-size: 12px;
        }

        @media (min-width: 768px) {
          .container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .machine-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
          }

          .machine-card:nth-child(even) {
            transform: translateY(12px);
          }

          .machine-card:nth-child(even):hover {
            transform: translateY(8px);
          }
        }

        @media (min-width: 1100px) {
          .machine-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .header h1 {
            font-size: 32px;
          }
        }
      `}</style>

      <header className="header">
        <div className="header-inner">
          <div className="site-name">
            EXVS CHARACTER RANK
          </div>
          <h1>{cost}コスト 機体ランク</h1>
        </div>
      </header>

      <main className="container">

        <div className="breadcrumb">
          <Link href="/">トップ</Link>
          {" ＞ "}
          {cost}コスト
        </div>

        <section className="intro">
          <div className="intro-label">
            EXVS CHARACTER RANK
          </div>

          <h2>{cost}コスト機体一覧</h2>

          <p>
            {machines.length}機をランク別に掲載しています。
          </p>
        </section>

        <nav className="cost-nav">
          {[3000, 2500, 2000, 1500].map((c) => (
            <Link
              key={c}
              href={`/cost/${c}`}
              className={c === cost ? "active" : ""}
            >
              {c}
            </Link>
          ))}
        </nav>

        {ranks.map((rank) => {
          const list = grouped[rank];

          if (list.length === 0) {
            return null;
          }

          return (
            <section className="rank-section" key={rank}>

              <div className="rank-header">
                <span className="rank-badge">
                  {rank}
                </span>

                <h2>
                  {rank === "新機体"
                    ? "新機体"
                    : `${rank}ランク`}
                </h2>
              </div>

              <div className="machine-grid">

                {list.map((suit) => (
                  <Link
                    href={`/suits/${suit.id}`}
                    className="machine-card"
                    key={suit.id}
                  >

                    <div className="machine-image">
                      <img
                        src={`/images/${suit.id}.jpg`}
                        alt={suit.name}
                      />
                    </div>

                    <div className="machine-info">

                      <h3 className="machine-name">
                        {suit.name}
                      </h3>

                      <div className="machine-meta">
                        <span>
                          {suit.cost}コスト
                        </span>

                        <span className="machine-rank">
                          {suit.rank}
                        </span>
                      </div>

                    </div>

                  </Link>
                ))}

              </div>

            </section>
          );
        })}

        {machines.length === 0 && (
          <div className="empty">
            このコストの機体はありません。
          </div>
        )}

      </main>

      <footer>
        © EXVS CHARACTER RANK
      </footer>
    </>
  );
}
