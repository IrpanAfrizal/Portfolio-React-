export const categories = ['All', 'Web', 'AI & Research', 'Android']
export const projects = [
  { slug:'mawaris-hybrid-chatbot', title:'Mawaris Hybrid Chatbot', type:'AI & Research', category:'AI & Research',
    image:'/images/projects/mawaris.webp', stack:['React','Python','Qdrant'],
    summary:'Chatbot waris Islam yang menggabungkan RAG + LLM dengan sistem berbasis aturan untuk perhitungan.',
    highlights:['RAG untuk tanya jawab konsep','Rule-based untuk perhitungan bagian waris','2.104 chunk di Qdrant'] },
  { slug:'archive-asset-management', title:'Archive & Asset Management', type:'Web Application', category:'Web',
    image:'/images/projects/archive.webp', stack:['CodeIgniter 4','MySQL'],
    summary:'Sistem arsip dan aset untuk DUKCAPIL Pekanbaru, dibuat saat magang.',
    highlights:['CRUD & autentikasi','Manajemen peran pengguna','Dashboard dan laporan'] },
  { slug:'nabila-fashion', title:'Nabila Fashion', type:'Android App', category:'Android',
    image:'/images/projects/nabila.webp', stack:['Java','PHP','MySQL'],
    summary:'Aplikasi Android toko fashion dengan backend PHP dan MySQL.',
    highlights:['Katalog & keranjang','Backend REST API PHP','Database relasional'] },
  { slug:'geographic-information-system', title:'Geographic Information System', type:'Android App', category:'Android',
    image:'/images/projects/gis.webp', stack:['Java','OSMDroid'],
    summary:'Aplikasi Android pemetaan lokasi memakai OSMDroid.',
    highlights:['Peta interaktif','Penanda lokasi','Data lokasi dari backend'] },
]
