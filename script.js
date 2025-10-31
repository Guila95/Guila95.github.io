/*
  INSTRUCTIONS POUR MODIFIER LES GALERIES :
 
  C'est ici que vous gérez vos galeries.
  1. Créez un dossier nommé "images" à côté de votre fichier "index.html".
  2. Placez toutes vos photos (JPG) et vidéos (MP4) dans ce dossier "images".
  3. Modifiez les listes ci-dessous pour qu'elles correspondent aux noms de vos fichiers.

  - Pour ajouter une image :
    { type: 'image', src: 'images/NOM_DE_VOTRE_IMAGE.jpg', alt: 'Description de l'image' }
   
  - Pour ajouter une vidéo :
    { type: 'video', src: 'images/NOM_DE_VOTRE_VIDEO.mp4', alt: 'Description de la vidéo' }
   
  N'oubliez pas la virgule (,) entre chaque élément.
*/

// ==========================================================
// ===== VEUILLEZ MODIFIER LA SECTION CI-DESSOUS =====
// ==========================================================
const galleryData = {
    // Galerie 1: Témoignages Visas
    visas: [
        { type: 'image', src: 'images/visas/5197524608939587591.jpg', alt: 'Visa étudiant 1' },
        { type: 'image', src: 'images/visas/5197524608939587593.jpg', alt: 'Visa étudiant 2' },
        { type: 'image', src: 'images/visas/5197524608939587597.jpg', alt: 'Visa étudiant 3' },
        { type: 'image', src: 'images/visas/5197524608939587613.jpg', alt: 'Visa étudiant 4' }
    ],
    // Galerie 2: Vie Étudiante
    vie: [
        { type: 'image', src: 'images/vieetudiante/51975246089395875798.jpeg', alt: 'Étudiant en Russie 1' },
        { type: 'image', src: 'images/vieetudiante/1729237164_small.jpeg', alt: 'Paysage russe' },
        { type: 'image', src: 'images/vieetudiante/5197524608939587571.jpg', alt: 'Étudiant à Peterhof' },
        { type: 'image', src: 'images/vieetudiante/5197524608939587575.jpg', alt: 'Étudiants en hiver' },
        { type: 'image', src: 'images/vieetudiante/5197524608939587598.jpg', alt: 'Étudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5197524608939587576.jpg', alt: 'Étudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5197524608939587583.jpg', alt: 'Étudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5197524608939587585.jpg', alt: 'Étudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5307837828870287969.jpg', alt: 'Étudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5307837828870287975.jpg', alt: 'Étudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5307837828870287999.jpg', alt: 'Étudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5321138835779858797.jpg', alt: 'Étudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5344065809292585967.jpg', alt: 'Étudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5359433288177021157.jpg', alt: 'Étudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5402577016349387691.jpg', alt: 'Étudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5402577016349387693.jpg', alt: 'Étudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/capture1.jpeg', alt: 'Étudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/capture1.jpeg', alt: 'Étudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/capture1.jpeg', alt: 'Étudiants avec job' }
    ],
    // Galerie 3: Vidéos
    videos: [
        { type: 'video', src: 'images/videos/la_langue_Russe.mp4', alt: 'Témoignage sur la langue russe' },
        { type: 'video', src: 'images/videos/video5197524608483359381.mp4', alt: 'Témoignage sur la langue russe' },
        { type: 'video', src: 'images/videos/video5471975410994540289.mp4', alt: 'Témoignage sur la langue russe' }
    ]
};

// ==========================================================
// ===== DÉBUT DU BLOC DE CODE 3 : LOGIQUE YOUTUBE (DATA ET FONCTION) =====
// ==========================================================

/*
  INSTRUCTIONS POUR AJOUTER VOS VIDÉOS YOUTUBE :
 
  1. Allez sur votre vidéo YouTube.
  2. Copiez l'identifiant (ID) de la vidéo depuis l'URL.
     Par exemple, dans : https://www.youtube.com/watch?v=dQw4w9WgXcQ
     L'ID est : dQw4w9WgXcQ
  3. Ajoutez un objet dans la liste ci-dessous :
     { videoId: 'VOTRE_ID_VIDEO', title: 'Titre de votre vidéo' }
*/
const youtubeVideos = [
    { videoId: 'gysYRGX5fIs', title: 'La verite Sur la vie en Russie: Est ce Vraiment une Bonne Idee d\'y Vivre ' },
    { videoId: 'X-DuwdiHRkI', title: 'La Vie Étudiante à Moscou' },
    { videoId: 'sbOpy1c6SVo', title: 'Choisir son Université en Russie' },
    { videoId: 'XCHQImigKCU', title: 'Les Erreurs à Éviter pour un Visa' },
    { videoId: 'MHetC4y7Gco', title: 'Témoignage de Réussite d\'un Étudiant Africain' }
    // Ajoutez vos vidéos ici en changeant l'ID et le titre.
];

// Fonction pour afficher les miniatures et gérer le lecteur YouTube
function renderYouTubeGallery() {
    const player = document.getElementById('youtube-player');
    const thumbnailsContainer = document.getElementById('youtube-thumbnails');

    if (!player || !thumbnailsContainer) {
        console.error("Éléments YouTube (lecteur ou miniatures) non trouvés.");
        return;
    }

    if (!youtubeVideos.length) return; // Ne rien faire si pas de vidéos

    // Vider les miniatures au cas où
    thumbnailsContainer.innerHTML = '';

    // Générer les miniatures
    youtubeVideos.forEach((video, index) => {
        const thumb = document.createElement('img');
        // L'URL de la miniature par défaut de YouTube
        thumb.src = `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`;
        thumb.alt = video.title;
        thumb.title = video.title;
        thumb.className = 'youtube-thumb';
        thumb.dataset.index = index;
        thumb.dataset.videoId = video.videoId;

        // Ajouter la classe 'active' à la première miniature
        if (index === 0) {
            thumb.classList.add('active-thumb');
        }

        // Gérer le clic sur la miniature
        thumb.addEventListener('click', () => {
            // Mettre à jour le lecteur principal pour lire la vidéo (autoplay=1)
            player.src = `https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`;

            // Mettre à jour la classe 'active' pour le style
            thumbnailsContainer.querySelectorAll('.youtube-thumb').forEach(t => t.classList.remove('active-thumb'));
            thumb.classList.add('active-thumb');
        });

        thumbnailsContainer.appendChild(thumb);
    });

    // Charger la première vidéo dans le lecteur par défaut (sans autoplay initial)
    player.src = `https://www.youtube.com/embed/${youtubeVideos[0].videoId}?rel=0`;
}

// ==========================================================
// ===== FIN DU BLOC DE CODE 3 : LOGIQUE YOUTUBE =====
// ==========================================================

// --- Code pour faire fonctionner la galerie principale (pas besoin de modifier) ---

// Le 'defer' dans la balise script HTML garantit que le DOM est chargé.
// Mais pour être 100% sûr, surtout pour les scripts complexes, on utilise DOMContentLoaded.
document.addEventListener('DOMContentLoaded', () => {

    const galleryContent = document.getElementById('gallery-content');
    const galleryTabs = document.querySelectorAll('.gallery-tab');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');

    // Vérification que les éléments existent
    if (!galleryContent || !lightbox || !lightboxContent || galleryTabs.length === 0) {
        console.error("Un ou plusieurs éléments de la galerie principale sont manquants.");
        // On appelle quand même la galerie YouTube si elle existe
        if (document.getElementById('youtube-galerie')) {
             renderYouTubeGallery();
        }
        return; // On arrête la partie galerie principale si les éléments manquent
    }

    // Fonction pour afficher le contenu de la galerie
    function renderGallery(galleryName) {
        galleryContent.innerHTML = ''; // Vider la galerie
        const items = galleryData[galleryName];

        if (!items) return;

        items.forEach(item => {
            let element;
            if (item.type === 'image') {
                element = document.createElement('img');
                element.src = item.src;
                element.alt = item.alt;
                element.className = 'w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:shadow-xl transition duration-300';
                element.onerror = () => element.src = `https://placehold.co/400x300/e2e8f0/64748b?text=${encodeURIComponent(item.alt)}`;
            } else if (item.type === 'video') {
                element = document.createElement('video');
                element.src = item.src;
                element.alt = item.alt;
                element.className = 'w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:shadow-xl transition duration-300';
                element.controls = false; // Les contrôles seront dans la lightbox
                element.muted = true;
                element.loop = true;
                element.onmouseover = () => element.play();
                element.onmouseout = () => element.pause();
            }

            if (element) {
                element.dataset.type = item.type;
                galleryContent.appendChild(element);
            }
        });
    }

    // Gestion des clics sur les onglets
    galleryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Enlever la classe active de tous les onglets
            galleryTabs.forEach(t => t.classList.remove('active-tab'));
            // Ajouter la classe active à l'onglet cliqué
            tab.classList.add('active-tab');
            // Afficher la galerie correspondante
            renderGallery(tab.dataset.gallery);
        });
    });

    // Gestion de la Lightbox
    function openLightbox(event) {
        const target = event.target;
        if (target.tagName === 'IMG' || target.tagName === 'VIDEO') {
            lightboxContent.innerHTML = ''; // Vider
            let mediaElement;
            if (target.dataset.type === 'image') {
                mediaElement = document.createElement('img');
                mediaElement.src = target.src;
                mediaElement.alt = target.alt;
            } else if (target.dataset.type === 'video') {
                mediaElement = document.createElement('video');
                mediaElement.src = target.src;
                mediaElement.alt = target.alt;
                mediaElement.controls = true;
                mediaElement.autoplay = true;
            }
            if(mediaElement) {
                lightboxContent.appendChild(mediaElement);
                lightbox.classList.remove('hidden');
                lightbox.classList.add('flex');
            }
        }
    }

    function closeLightbox() {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        lightboxContent.innerHTML = ''; // Arrêter la vidéo
    }

    galleryContent.addEventListener('click', openLightbox);
    // Note : Le clic sur le fond de la lightbox pour fermer est géré par l'attribut onclick="" dans le HTML

    // Afficher la première galerie au chargement
    renderGallery('visas'); // Affiche la galerie 'visas' par défaut
    
    // Afficher la galerie YouTube
    if (document.getElementById('youtube-galerie')) {
        renderYouTubeGallery();
    }
});
