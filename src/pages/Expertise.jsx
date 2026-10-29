import { useState } from 'react'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import SkillGroup from '../components/SkillGroup'
import { skillGroups, tools } from '../data/skills'
export default function Expertise() {
  const [id, setId] = useState(skillGroups[0].id)
  const g = skillGroups.find(x => x.id === id)
  return (
    <div className="wrap section">
      <SectionHeading index="03 / 08" title="Skills & Expertise" sub="Tools and technologies I have used and mastered through study, projects, and real experience." as="h1" />
      <div className="skills">
        <div className="tabs" role="tablist" aria-orientation="vertical">
          {skillGroups.map(s => <Button plain key={s.id} role="tab" aria-selected={s.id === id} onClick={() => setId(s.id)}>{s.name}</Button>)}
        </div>
        <div className="panel" role="tabpanel">
          <h3>{g.name}</h3>
          <p className="muted" style={{ marginTop: 6 }}>{g.desc}</p>
          <h4>Technologies</h4>
          <div className="chips">{g.tech.map(t => <span className="chip" key={t}>{t}</span>)}</div>
          <h4>Key Experience</h4>
          <ul className="checks">{g.experience.map(e => <li key={e}>{e}</li>)}</ul>
        </div>
      </div>
      <div className="grid g2" style={{ marginTop: 20 }}>
        {skillGroups.slice(1).map(s => <SkillGroup key={s.id} group={s} />)}
        <SkillGroup group={{ name: 'Tools & Others', tech: tools }} />
      </div>
    </div>
  )
}
