import {suits} from "../../../data/suits";
export default function SuitPage({params}){
 const s=suits.find(x=>x.id===params.id);
 if(!s)return <main className="wrap detail"><h1>機体が見つかりません</h1><a href="/">← 戻る</a></main>;
 return <main><header className="hero small"><div className="wrap"><div className="eyebrow">SUIT DETAIL</div><h1>{s.name}</h1></div></header>
 <div className="wrap detail"><a className="back" href="/">← ランク表に戻る</a>
 <img className="detail-image" src={"/images/"+s.id+".jpg"} onError={e=>{e.currentTarget.src="https://placehold.co/1200x800?text="+encodeURIComponent(s.name)}} alt={s.name}/>
 <div className="detail-meta"><span>{s.cost}コスト</span><b>{s.rank}</b></div>
 <section className="panel"><h2>機体評価</h2><p>ここに機体の評価・特徴・立ち回りを記載できます。</p></section>
 <section className="panel"><h2>強み</h2><p>ここに強みを記載できます。</p></section>
 <section className="panel"><h2>弱み</h2><p>ここに弱みを記載できます。</p></section>
 <section className="panel"><h2>外部リンク・アフィリエイト</h2><a className="button" href="#" onClick={e=>e.preventDefault()}>リンクを設定できます</a></section>
 </div></main>
}