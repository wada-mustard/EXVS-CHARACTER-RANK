import Link from "next/link";
import { suits } from "../../../data/suits";

const ranks = [
  "S",
  "A＋",
  "A",
  "A-",
  "B＋",
  "B",
  "C",
  "新機体",
];

export default function CostPage({ params }) {
  const cost = Number(params.cost);

  const filtered = suits.filter((suit) => suit.cost === cost);

  const grouped = {};

  for (const rank of ranks) {
    grouped[rank] = [];
  }

  for (const suit of filtered) {
    if (grouped[suit.rank]) {
      grouped[suit.rank].push(suit);
    }
  }

  return (
    <main>
      <header className="site-header">
        <div className="wrap">
          <Link href="/" className="site-title">
            エクバ機体ランク
          </Link>

          <div className="site-sub">
            EXVS CHARACTER RANK
          </div>
        </div>
      </header>

      <div className="wrap">

        <div className="breadcrumbs">
          <Link href="/">トップ</Link>
          {"　>　"}
          {cost}コスト
        </div>

        <section className="intro">
          <div className="eyebrow">
            EXVS CHARACTER RANK
          </div>

          <h1>{cost}コスト 機体ランク</h1>

          <p>
            {filtered.length}機の機体を掲載しています
          </p>
        </section>

        <nav className="cost-nav">
          {[3000, 2500, 2000, 1500].map((c) => (
            <Link
              href={"/cost/" + c}
              className={c === cost ? "selected" : ""}
              key={c}
            >
              {c}
            </Link>
          ))}
        </nav>

        {ranks.map((rank) => {
          const list = grouped[rank];

          if (!list || list.length === 0) {
            return null;
          }

          return (
            <section className="rank-section" key={rank}>

              <div className="rank-title">
                <span className="rank-badge">
                  {rank}
                </span>

                <h2>
                  {rank === "新機体"
                    ? "新機体"
                    : rank + "ランク"}
                </h2>
              </div>

              <div className="grid">

                {list.map((suit) => (
                  <Link
                    href={"/suits/" + suit.id}
                    className="card"
                    key={suit.id}
                  >

                    <div className="image-wrap">
                      <img
                        src={"/images/" + suit.id + ".jpg"}
                        alt={suit.name}
                      />
                    </div>

                    <div className="card-body">

                      <h3>{suit.name}</h3>

                      <div className="meta">
                        <span>
                          {suit.cost}コスト
                        </span>

                        <strong>
                          {suit.rank}
                        </strong>
                      </div>

                    </div>

                  </Link>
                ))}

              </div>

            </section>
          );
        })}

      </div>

      <footer>
        © EXVS 機体ランク
      </footer>
    </main>
  );
}
