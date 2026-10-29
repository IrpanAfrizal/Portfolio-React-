import SectionHeading from '../components/SectionHeading'
import { journey } from '../data/experience'
export default function Experience() {
  return (
    <div className="wrap section">
      <SectionHeading index="05 / 08" title="Experience & Journey" sub="Key experiences, internships, and projects that shaped my skills." as="h1" />
      <ol className="timeline">
        {journey.map(j => <li key={j.year + j.label}><span><b>{j.year}</b><span className="muted">{j.label}</span></span><span>{j.text}</span></li>)}
      </ol>
      <p className="card quote">Every experience is a step towards a bigger goal.</p>
    </div>
  )
}
