import Spinner from './Spinner'
import useOnline from '../hooks/useOnline'
export default function PageLoader() {
  const online = useOnline()
  return (
    <div className="pl" role="status" aria-live="polite">
      <Spinner size={22} />
      <span className="muted">{online ? 'Memuat halaman…' : 'Tidak ada koneksi. Halaman dimuat otomatis saat tersambung.'}</span>
    </div>
  )
}
