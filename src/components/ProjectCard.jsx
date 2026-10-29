import { Link } from 'react-router-dom'
export default function ProjectCard({ p, showStack = true }) {
  return (
    <Link to={`/projects/${p.slug}`} className="card pc">
      <div className="thumb"><img src={p.image} alt={p.title} loading="lazy" onError={e => (e.currentTarget.style.display = 'none')} /></div>
      <div className="meta">
        <div><h3>{p.title}</h3><span>{p.type}</span></div>
        <span className="arrow" aria-hidden>→</span>
      </div>
      {showStack && <div className="chips">{p.stack.map(s => <span className="chip" key={s}>{s}</span>)}</div>}
    </Link>
  )
}
