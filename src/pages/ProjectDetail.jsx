import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button'
import { projects } from '../data/projects'
export default function ProjectDetail() {
  const { slug } = useParams()
  const p = projects.find(x => x.slug === slug)
  if (!p) return <div className="wrap section"><h1>Proyek tidak ditemukan</h1><Button to="/projects" style={{ marginTop: 20 }}>Kembali ke Projects</Button></div>
  return (
    <div className="wrap section" style={{ maxWidth: 820 }}>
      <Link to="/projects" className="muted">← Semua proyek</Link>
      <h1 style={{ margin: '16px 0 8px' }}>{p.title}</h1>
      <p className="muted">{p.type}</p>
      <div className="portrait" style={{ aspectRatio: '16/9', borderRadius: 'var(--r-md)', margin: '24px 0' }}>
        <img src={p.image} alt={p.title} onError={e => (e.currentTarget.style.display = 'none')} />
      </div>
      <p>{p.summary}</p>
      <h3 style={{ margin: '28px 0 10px' }}>Highlights</h3>
      <ul className="checks">{p.highlights.map(h => <li key={h}>{h}</li>)}</ul>
      <div className="chips" style={{ marginTop: 24 }}>{p.stack.map(s => <span className="chip" key={s}>{s}</span>)}</div>
    </div>
  )
}
