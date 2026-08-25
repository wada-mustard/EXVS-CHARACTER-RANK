 "use client";
import {useMemo,useState} from "react";
import {suits} from "../data/suits";

const costs=["ALL",3000,2500,2000,1500];
const ranks=["S","A＋","A","A-","B＋","B","C","新機体"];
const rankOrder={"S":0,"A＋":1,"A":2,"A-":3,"B＋":4,"B":5,"C":6,"新機体":7};

export default function Home(){
 const [cost,setCost]=useState("ALL");
 const [rank,setRank]=useState("ALL");
 const [q,setQ]=useState("");
 const filtered=useMemo(()=>suits.filter(s=>
   (cost==="ALL"||s.cost===Number(cost)) &&
   (rank==="ALL"||s.rank===rank) &&
   s.name.toLowerCase().includes(q.toLowerCase())
 ),[cost,rank,q]);
 const grouped=useMemo(()=>{
   const g={}; for(const r of ranks) g[r]=[];
   filtered.forEach(s=>g[s.rank]?.push(s));
   return g;
 },[filtered]);
 return <main>
  <header className="hero"><div className="wrap">
   <div className="eyebrow">EXVS CHARACTER RANK</div>
   <h1>EXVS 機体ランク</h1>
   <p>機体の評価・ランクをまとめたランキングサイト</p>
  </div></header>
  <div className="wrap">
   <section className="controls">
    <input value={q} onChange={e=>setQ(e.target.value)} placeholder="機体名を検索…" />
    <div className="tabs">{costs.map(c=><button key={c} className={cost===c?"active":""} onClick={()=>setCost(c)}>{c==="ALL"?"全コスト":c}</button>)}</div>
    <div className="tabs ranks">{["ALL",...ranks].map(r=><button key={r} className={rank===r?"active":""} onClick={()=>setRank(r)}>{r==="ALL"?"全ランク":r}</button>)}</div>
   </section>
   <p className="count">{filtered.length}機</p>
   {ranks.map(r=>grouped[r]?.length>0&&<section className="rank-section" key={r}>
    <div className="rank-head"><span className={"badge rank-"+r.replace("+","plus").replace("-","minus")}>{r}</span><h2>{r==="新機体"?"新機体":`${r}ランク`}</h2></div>
    <div className="grid">{grouped[r].map(s=>
      <a className="card" href={"/suits/"+s.id} key={s.id}>
       <div className="image-wrap"><img src={"/images/"+s.id+".jpg"} alt={s.name} onError={e=>{e.currentTarget.src="https://placehold.co/600x400?text="+encodeURIComponent(s.name)}}/></div>
       <div className="card-body"><div className="meta"><span>{s.cost}</span><strong>{s.rank}</strong></div><h3>{s.name}</h3></div>
      </a>
    )}</div>
   </section>)}
  </div>
  <footer>© EXVS 機体ランク</footer>
 </main>
}