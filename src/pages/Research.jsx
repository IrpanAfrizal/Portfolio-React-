import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import { research } from '../data/experience'
export default function Research() {
  return (
    <div className="wrap section">
      <SectionHeading index="06 / 08" title="Research & Publications" sub="My research on Islamic inheritance chatbot and academic publication in SINTA 3 journal." as="h1" />
      <div className="card">
        <span className="chip">{research.journal}</span>
        <h3 style={{ margin: '12px 0 8px' }}>{research.title}</h3>
        <p className="muted" style={{ fontSize: 12, marginBottom: 14 }}>{research.authors}</p>
        <Button href={research.link} size="sm">View Article</Button>
      </div>
      <div className="grid g4" style={{ marginTop: 20 }}>
        {research.stats.map(([a, b]) => <div className="card" key={a}><b>{a}</b><div className="muted" style={{ fontSize: 12 }}>{b}</div></div>)}
      </div>
    </div>
  )
}
