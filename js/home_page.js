var lat = 49.191812;
var lon = -0.350457;
var zoomLevel = 16;

var map = L.map('map').setView([lat, lon], zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 17,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const emojiIcon = L.divIcon({
  className: 'emoji-marker',
  html: '🏰',
  iconSize: [30, 30],
  iconAnchor: [15, 15]
});

L.marker([49.191812, -0.350457], { icon: emojiIcon }).addTo(map)
  .bindPopup("<b>Le château des chevaliers</b>")

const contourCoords = [
  [49.193549, -0.348998],
  [49.193470, -0.350323],
  [49.193372, -0.350994],
  [49.193133, -0.352010],
  [49.191328, -0.351723],
  [49.191384, -0.351318],
  [49.190059, -0.350852],
  [49.190199, -0.349878],
  [49.190132, -0.349854],
  [49.190252, -0.349140],
  [49.191584, -0.349218]
];

L.polygon(contourCoords, {
  color: '#b2936d',
  weight: 2,
  fillOpacity: 0.1
}).addTo(map).bindPopup("Territoire des Chevaliers");

const body = document.body;

document.addEventListener('mousedown', () => {
  body.style.cursor = "url('../ressources/cursor.cur'), auto";
});

document.addEventListener('mouseup', () => {
  body.style.cursor = "url('../ressources/cursor.cur'), auto";
});

document.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    if (img.classList.contains('redirect')) return;

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightbox && lightboxImg) {
      lightboxImg.src = img.src;
      lightbox.classList.add('visible');

      lightboxImg.classList.remove('zoom');
      void lightboxImg.offsetWidth;
      lightboxImg.classList.add('zoom');
    }
  });
});

const lightbox = document.getElementById('lightbox');
if (lightbox) {
  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('visible');
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('lightbox')?.classList.remove('visible');
  }
});

document.querySelectorAll('.redirect').forEach(img => {
  img.addEventListener('click', () => {
    const url = img.getAttribute('data-url');
    if (url) {
      window.open(url, '_blank');
    }
  });
});
