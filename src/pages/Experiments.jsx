import SectionHeading from '../components/SectionHeading'
import { experiments } from '../data/skills'
export default function Experiments() {
  return (
    <div className="wrap section">
      <SectionHeading index="07 / 08" title="Experiments & Lab" sub="Testing, evaluation, and experiments to improve the system performance." as="h1" />
      <div className="grid g2">
        {experiments.map(x => (
          <div className="card" key={x.title}>
            <h3 style={{ font: '500 14px var(--sans)' }}>{x.title}</h3>
            <p className="muted" style={{ margin: '6px 0 12px', fontSize: 12 }}>{x.text}</p>
            <div className="chips">{x.tags.map(t => <span className="chip" key={t}>{t}</span>)}</div>
          </div>
        ))}
      </div>
      <p className="pull">Better evaluation today, better AI tomorrow.</p>
    </div>
  )
}
