import SectionHeading from '../components/SectionHeading'
export default function About() {
  return (
    <div className="wrap">
      <section className="section split">
        <div>
          <SectionHeading index="02 / 08" title="About Me" sub="A short story about my journey, background, and future goals." as="h1" />
          <p>I am Irpan Afrizal Putra Eriani, a fresh graduate from Informatics Engineering at UIN SUSKA Riau, with a strong interest in web development, backend development, and AI applications.</p>
          <p style={{ marginTop: 14 }}>During my study, I gained experience through real projects, an internship at DUKCAPIL Pekanbaru, and research on an Islamic inheritance chatbot. I'm constantly learning and improving myself to become a professional developer.</p>
          <div className="facts">
            <div><b>Education</b><span className="muted">S1 Informatics Engineering, UIN SUSKA Riau</span></div>
            <div><b>Experience</b><span className="muted">Internship at DUKCAPIL Pekanbaru, research & personal projects</span></div>
            <div><b>Career Goal</b><span className="muted">Junior Software Developer, AI Application Developer</span></div>
          </div>
        </div>
        <div className="portrait" style={{ borderRadius: 'var(--r-md)' }}>
          <img src="/images/profile.webp" alt="" onError={e => (e.currentTarget.style.display = 'none')} />
          <q>Small steps today, big progress tomorrow.</q>
        </div>
      </section>
    </div>
  )
}
