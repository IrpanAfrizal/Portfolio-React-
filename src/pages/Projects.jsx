import { useState } from 'react'
import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { projects, categories } from '../data/projects'
export default function Projects() {
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? projects : projects.filter(p => p.category === cat)
  return (
    <div className="wrap section">
      <SectionHeading index="04 / 08" title="Selected Projects" sub="Real projects I've built, from web applications to AI-powered systems." as="h1" />
      <div className="filters" role="group" aria-label="Filter proyek">
        {categories.map(c => <Button plain key={c} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</Button>)}
      </div>
      <div className="grid g2">{list.map(p => <ProjectCard key={p.slug} p={p} />)}</div>
    </div>
  )
}
