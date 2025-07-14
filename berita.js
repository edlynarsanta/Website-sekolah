const beritaData = [
  {
    judul: "Juara Olimpiade Sains 2025",
    gambar: "../img/berita1.jpg",
    isi: "SMA Negeri 1 Tampaksiring meraih juara pertama pada ajang Olimpiade Sains Nasional 2025."
  },
  {
    judul: "Penanaman 100 Pohon oleh Siswa",
    gambar: "../img/berita2.jpg",
    isi: "Dalam rangka Hari Lingkungan Hidup, siswa menanam 100 pohon di sekitar sekolah."
  },
  {
    judul: "Tim Debat Tembus Provinsi",
    gambar: "../img/berita3.jpg",
    isi: "Tim debat SMA N 1 Tampaksiring lolos ke final tingkat provinsi lomba debat B. Indonesia."
  },
  {
    judul: "Pameran Karya Seni Siswa",
    gambar: "../img/berita4.jpg",
    isi: "Siswa menampilkan lukisan dan patung karya mereka di aula sekolah."
  },
  {
    judul: "Pelatihan Literasi Digital",
    gambar: "../img/berita5.jpg",
    isi: "Siswa dan guru mengikuti pelatihan tentang keamanan dan etika digital."
  }
];

let beritaTampil = 0;
const beritaPerPage = 3;
const beritaContainer = document.getElementById("beritaContainer");
const loadMoreBtn = document.getElementById("loadMore");

function tampilkanBerita() {
  const batas = beritaTampil + beritaPerPage;
  for (let i = beritaTampil; i < batas && i < beritaData.length; i++) {
    const item = document.createElement("div");
    item.className = "berita-item";
    item.innerHTML = `
      <img src="${beritaData[i].gambar}" alt="${beritaData[i].judul}" />
      <div class="berita-info">
        <h3>${beritaData[i].judul}</h3>
        <p>${beritaData[i].isi}</p>
      </div>
    `;
    beritaContainer.appendChild(item);
  }
  beritaTampil = batas;
  if (beritaTampil >= beritaData.length) {
    loadMoreBtn.style.display = "none";
  }
}

loadMoreBtn.addEventListener("click", tampilkanBerita);

// Muat pertama kali
tampilkanBerita();
