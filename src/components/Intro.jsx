import { useEffect, useState } from 'react'
import useOnline from '../hooks/useOnline'
import { waitReady } from '../utils/waitReady'
import Spinner from './Spinner'

export default function Intro({ onDone }) {
  const [leaving, setLeaving] = useState(false)
  const [slow, setSlow] = useState(false)
  const online = useOnline()

  useEffect(() => {
    let alive = true
    const slowTimer = setTimeout(() => setSlow(true), 5000)
    const minTime = new Promise(r => setTimeout(r, 2800))
    Promise.all([minTime, waitReady()]).then(() => {
      if (!alive) return
      clearTimeout(slowTimer); setSlow(false); setLeaving(true)
      setTimeout(() => alive && onDone(), 700)
    })
    return () => { alive = false; clearTimeout(slowTimer) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={'intro' + (leaving ? ' out' : '')} role="status" aria-label="Memuat irpan.">
      <svg viewBox="0 0 560 220" className="intro-svg" aria-hidden="true">
        <text x="280" y="150" textAnchor="middle" className="intro-text">irpan.</text>
      </svg>
      <p className={'intro-note' + (slow || !online ? ' show' : '')}>
        <Spinner />{online ? 'Koneksi lambat, masih memuat…' : 'Tidak ada koneksi. Lanjut otomatis saat tersambung.'}
      </p>
    </div>
  )
}
