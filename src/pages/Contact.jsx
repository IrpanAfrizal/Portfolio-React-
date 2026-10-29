import { useState } from 'react'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
const EMAIL = 'irpan.afrizal@gmail.com'
export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const set = k => e => setF({ ...f, [k]: e.target.value })
  const [sending, setSending] = useState(false)
  const submit = async e => {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 700))
    const body = `${f.message}\n\n— ${f.name} (${f.email})`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Pesan dari portfolio')}&body=${encodeURIComponent(body)}`
    setSending(false)
  }
  return (
    <div className="wrap section">
      <SectionHeading index="08 / 08" title="Contact" sub="Let's connect and build something great together." as="h1" />
      <div className="split">
        <div>
          <h3 style={{ font: '500 14px var(--sans)', marginBottom: 16 }}>Get in Touch</h3>
          <ul className="info">
            <li><b>Email</b><a className="muted" href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><b>Phone / WhatsApp</b><span className="muted">+62 812 3456 7890</span></li>
            <li><b>Location</b><span className="muted">Pekanbaru, Indonesia</span></li>
          </ul>
          <h3 style={{ font: '500 14px var(--sans)', marginBottom: 10 }}>Follow Me</h3>
          <div className="chips">
            <a className="chip" href="#">LinkedIn</a><a className="chip" href="#">GitHub</a><a className="chip" href="#">Instagram</a>
          </div>
          <Button href="/documents/irpan-cv.pdf" download style={{ marginTop: 28 }}>Download CV ↓</Button>
        </div>
        <form className="card" onSubmit={submit}>
          <h3 style={{ font: '500 14px var(--sans)', marginBottom: 16 }}>Send a Message</h3>
          <label className="field">Your Name<input required value={f.name} onChange={set('name')} placeholder="Nama Anda" /></label>
          <label className="field">Email Address<input required type="email" value={f.email} onChange={set('email')} placeholder="nama@email.com" /></label>
          <label className="field">Message<textarea required value={f.message} onChange={set('message')} placeholder="Tulis pesan Anda..." /></label>
          <Button type="submit" loading={sending} style={{ width: '100%', justifyContent: 'center' }}>Send Message</Button>
        </form>
      </div>
    </div>
  )
}
