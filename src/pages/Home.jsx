import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'
export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <div>
          <p className="tag">Software Developer</p>
          <h1>Irpan Afrizal<br />Putra Eriani</h1>
          <p>Fresh graduate in Informatics Engineering at UIN SUSKA Riau. I build web applications, backend systems, and AI-powered solutions.</p>
          <div className="cta">
            <Button to="/projects">Explore My Projects</Button>
            <Button to="/about" variant="ghost">About Me</Button>
          </div>
          <p className="open muted">Open to entry-level opportunities</p>
        </div>
        <div className="portrait">
          <img src="/images/profile.JPG" alt="Foto Irpan Afrizal Putra Eriani" onError={e => (e.currentTarget.style.display = 'none')} />
          <q>Better Code, Bigger Impact.</q>
        </div>
      </section>
      <section className="wrap section">
        <SectionHeading index="01 / 08" title="Selected Works" sub="A selection of applications, systems, and research projects I've worked on." as="h3" />
        <div className="grid g3">{projects.slice(0, 3).map(p => <ProjectCard key={p.slug} p={p} showStack={false} />)}</div>
      </section>
    </>
  )
}
