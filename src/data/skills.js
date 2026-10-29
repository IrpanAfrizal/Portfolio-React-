export const skillGroups = [
  { id:'web', name:'Web Development', desc:'Antarmuka dan fitur aplikasi web, dari alur CRUD sampai dashboard dan pengelolaan data.',
    tech:['PHP','CodeIgniter 4','React','JavaScript','HTML','CSS','Bootstrap','AdminLTE'],
    experience:['CRUD & Authentication','Role Management','Database & Relational Data','Dashboard & Reporting','Soft Delete & Form Input'] },
  { id:'backend', name:'Backend & Database', desc:'API dan penyimpanan data yang rapi.',
    tech:['PHP','CodeIgniter 4','MySQL','PostgreSQL','REST API','Qdrant'],
    experience:['REST API','Desain skema relasional','Vector database'] },
  { id:'ai', name:'AI & Machine Learning', desc:'Sistem tanya jawab berbasis LLM dan pencarian semantik.',
    tech:['LLM','RAG','Embeddings','Semantic Search','Vector DB'],
    experience:['Pipeline RAG','Evaluasi jawaban','Fallback rule-based'] },
  { id:'android', name:'Android Development', desc:'Aplikasi Android native dengan backend PHP.',
    tech:['Java','Android SDK','OSMDroid','PHP Backend','MySQL'],
    experience:['Aplikasi katalog','Peta interaktif'] },
]
export const tools = ['VS Code','Git','Postman','Laragon','pgAdmin','macOS']
export const experiments = [
  { title:'RAG vs Rule-Based', text:'Perbandingan LLM + RAG dengan sistem rule-based untuk perhitungan waris.', tags:['RAG','Rule-Based'] },
  { title:'LLM Evaluation', text:'Menguji beberapa model dan strategi fallback.', tags:['GPT-4o','Llama 3.2'] },
  { title:'Embedding & Vector Search', text:'Eksperimen embedding dan kemiripan semantik.', tags:['Voyage-3-Large','Qdrant'] },
  { title:'BERTScore Evaluation', text:'Menilai kualitas jawaban dengan BERTScore.', tags:['BERTScore','Semantic Similarity'] },
]
