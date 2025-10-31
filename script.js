/*
  INSTRUCTIONS POUR MODIFIER LES GALERIES :
 
  C'est ici que vous g�rez vos galeries.
  1. Cr�ez un dossier nomm� "images" � c�t� de votre fichier "index.html".
  2. Placez toutes vos photos (JPG) et vid�os (MP4) dans ce dossier "images".
  3. Modifiez les listes ci-dessous pour qu'elles correspondent aux noms de vos fichiers.

  - Pour ajouter une image :
    { type: 'image', src: 'images/NOM_DE_VOTRE_IMAGE.jpg', alt: 'Description de l'image' }
   
  - Pour ajouter une vid�o :
    { type: 'video', src: 'images/NOM_DE_VOTRE_VIDEO.mp4', alt: 'Description de la vid�o' }
   
  N'oubliez pas la virgule (,) entre chaque �l�ment.
*/

// ==========================================================
// ===== VEUILLEZ MODIFIER LA SECTION CI-DESSOUS =====
// ==========================================================
const galleryData = {
    // Galerie 1: T�moignages Visas
    visas: [
        { type: 'image', src: 'images/visas/5197524608939587591.jpg', alt: 'Visa �tudiant 1' },
        { type: 'image', src: 'images/visas/5197524608939587593.jpg', alt: 'Visa �tudiant 2' },
        { type: 'image', src: 'images/visas/5197524608939587597.jpg', alt: 'Visa �tudiant 3' },
        { type: 'image', src: 'images/visas/5197524608939587613.jpg', alt: 'Visa �tudiant 4' }
    ],
    // Galerie 2: Vie �tudiante
    vie: [
        { type: 'image', src: 'images/vieetudiante/51975246089395875798.jpeg', alt: '�tudiant en Russie 1' },
        { type: 'image', src: 'images/vieetudiante/1729237164_small.jpeg', alt: 'Paysage russe' },
        { type: 'image', src: 'images/vieetudiante/5197524608939587571.jpg', alt: '�tudiant � Peterhof' },
        { type: 'image', src: 'images/vieetudiante/5197524608939587575.jpg', alt: '�tudiants en hiver' },
        { type: 'image', src: 'images/vieetudiante/5197524608939587598.jpg', alt: '�tudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5197524608939587576.jpg', alt: '�tudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5197524608939587583.jpg', alt: '�tudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5197524608939587585.jpg', alt: '�tudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5307837828870287969.jpg', alt: '�tudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5307837828870287975.jpg', alt: '�tudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5307837828870287999.jpg', alt: '�tudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5321138835779858797.jpg', alt: '�tudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5344065809292585967.jpg', alt: '�tudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5359433288177021157.jpg', alt: '�tudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5402577016349387691.jpg', alt: '�tudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/5402577016349387693.jpg', alt: '�tudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/capture1.jpeg', alt: '�tudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/capture1.jpeg', alt: '�tudiants avec job' },
        { type: 'image', src: 'images/vieetudiante/capture1.jpeg', alt: '�tudiants avec job' }
    ],
    // Galerie 3: Vid�os
    videos: [
        { type: 'video', src: 'images/videos/la_langue_Russe.mp4', alt: 'T�moignage sur la langue russe' },
        { type: 'video', src: 'images/videos/video5197524608483359381.mp4', alt: 'T�moignage sur la langue russe' },
        { type: 'video', src: 'images/videos/video5471975410994540289.mp4', alt: 'T�moignage sur la langue russe' }
    ]
};

// ==========================================================
// ===== D�BUT DU BLOC DE CODE 3 : LOGIQUE YOUTUBE (DATA ET FONCTION) =====
// ==========================================================

/*
  INSTRUCTIONS POUR AJOUTER VOS VID�OS YOUTUBE :
 
  1. Allez sur votre vid�o YouTube.
  2. Copiez l'identifiant (ID) de la vid�o depuis l'URL.
     Par exemple, dans : https://www.youtube.com/watch?v=dQw4w9WgXcQ
     L'ID est : dQw4w9WgXcQ
  3. Ajoutez un objet dans la liste ci-dessous :
     { videoId: 'VOTRE_ID_VIDEO', title: 'Titre de votre vid�o' }
*/
const youtubeVideos = [
    { videoId: 'gysYRGX5fIs', title: 'La verite Sur la vie en Russie: Est ce Vraiment une Bonne Idee d\'y Vivre ' },
    { videoId: 'X-DuwdiHRkI', title: 'La Vie �tudiante � Moscou' },
    { videoId: 'sbOpy1c6SVo', title: 'Choisir son Universit� en Russie' },
    { videoId: 'XCHQImigKCU', title: 'Les Erreurs � �viter pour un Visa' },
    { videoId: 'MHetC4y7Gco', title: 'T�moignage de R�ussite d\'un �tudiant Africain' }
    // Ajoutez vos vid�os ici en changeant l'ID et le titre.
];

// Fonction pour afficher les miniatures et g�rer le lecteur YouTube
function renderYouTubeGallery() {
    const player = document.getElementById('youtube-player');
    const thumbnailsContainer = document.getElementById('youtube-thumbnails');

    if (!player || !thumbnailsContainer) {
        console.error("�l�ments YouTube (lecteur ou miniatures) non trouv�s.");
        return;
    }

    if (!youtubeVideos.length) return; // Ne rien faire si pas de vid�os

    // Vider les miniatures au cas o�
    thumbnailsContainer.innerHTML = '';

    // G�n�rer les miniatures
    youtubeVideos.forEach((video, index) => {
        const thumb = document.createElement('img');
        // L'URL de la miniature par d�faut de YouTube
        thumb.src = `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`;
        thumb.alt = video.title;
        thumb.title = video.title;
        thumb.className = 'youtube-thumb';
        thumb.dataset.index = index;
        thumb.dataset.videoId = video.videoId;

        // Ajouter la classe 'active' � la premi�re miniature
        if (index === 0) {
            thumb.classList.add('active-thumb');
        }

        // G�rer le clic sur la miniature
        thumb.addEventListener('click', () => {
            // Mettre � jour le lecteur principal pour lire la vid�o (autoplay=1)
            player.src = `https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`;

            // Mettre � jour la classe 'active' pour le style
            thumbnailsContainer.querySelectorAll('.youtube-thumb').forEach(t => t.classList.remove('active-thumb'));
            thumb.classList.add('active-thumb');
        });

        thumbnailsContainer.appendChild(thumb);
    });

    // Charger la premi�re vid�o dans le lecteur par d�faut (sans autoplay initial)
    player.src = `https://www.youtube.com/embed/${youtubeVideos[0].videoId}?rel=0`;
}

// ==========================================================
// ===== FIN DU BLOC DE CODE 3 : LOGIQUE YOUTUBE =====
// ==========================================================

// --- Code pour faire fonctionner la galerie principale (pas besoin de modifier) ---

// Le 'defer' dans la balise script HTML garantit que le DOM est charg�.
// Mais pour �tre 100% s�r, surtout pour les scripts complexes, on utilise DOMContentLoaded.
document.addEventListener('DOMContentLoaded', () => {

    const galleryContent = document.getElementById('gallery-content');
    const galleryTabs = document.querySelectorAll('.gallery-tab');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');

    // V�rification que les �l�ments existent
    if (!galleryContent || !lightbox || !lightboxContent || galleryTabs.length === 0) {
        console.error("Un ou plusieurs �l�ments de la galerie principale sont manquants.");
        // On appelle quand m�me la galerie YouTube si elle existe
        if (document.getElementById('youtube-galerie')) {
             renderYouTubeGallery();
        }
        return; // On arr�te la partie galerie principale si les �l�ments manquent
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
                element.controls = false; // Les contr�les seront dans la lightbox
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
            // Ajouter la classe active � l'onglet cliqu�
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
        lightboxContent.innerHTML = ''; // Arr�ter la vid�o
    }

    galleryContent.addEventListener('click', openLightbox);
    // Note : Le clic sur le fond de la lightbox pour fermer est g�r� par l'attribut onclick="" dans le HTML

    // Afficher la premi�re galerie au chargement
    renderGallery('visas'); // Affiche la galerie 'visas' par d�faut
    
    // Afficher la galerie YouTube
    if (document.getElementById('youtube-galerie')) {
        renderYouTubeGallery();
    }
});
