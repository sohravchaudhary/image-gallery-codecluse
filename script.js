const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const captionText = document.getElementById('caption');
const closeModal = document.getElementsByClassName('close')[0];

// Sample image data
const images = [
    { src: 'images/nature1.jpg', category: 'nature', name: 'Nature Image ' },
    { src: 'images/nature2.jpg', category: 'nature', name: 'Nature Image ' },
    { src: 'images/nature3.jpg', category: 'nature', name: 'Nature Image ' },
    { src: 'images/nature4.jpg', category: 'nature', name: 'Nature Image ' },
    { src: 'images/architecture2.jpg', category: 'architecture', name: 'Architecture Image ' },
    { src: 'images/architecture3.jpg', category: 'architecture', name: 'Architecture Image ' },
    { src: 'images/architecture4.jpg', category: 'architecture', name: 'Architecture Image ' },
    { src: 'images/animals1.jpg', category: 'animals', name: 'Animal Image ' },
    { src: 'images/animals2.jpg', category: 'animals', name: 'Animal Image ' },
    { src: 'images/animals3.jpg', category: 'animals', name: 'Animal Image ' },
    { src: 'images/animals4.jpg', category: 'animals', name: 'Animal Image ' },
    { src: 'images/animals5.jpg', category: 'animals', name: 'Animal Image ' },
    // Add more image objects here
];

// Load images dynamically
function loadImages() {
    gallery.innerHTML = '';
    images.forEach(image => {
        const imgDiv = document.createElement('div');
        imgDiv.className = 'image';
        imgDiv.setAttribute('data-category', image.category);
        imgDiv.innerHTML = `<img src="${image.src}" alt="${image.name}" onclick="openModal('${image.src}', '${image.name}')">`;
        gallery.appendChild(imgDiv);
    });
}

// Filter images based on category
function filterImages(category) {
    const imgDivs = document.querySelectorAll('.gallery .image');
    imgDivs.forEach(div => {
        if (category === 'all' || div.getAttribute('data-category') === category) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
}

// Search images by name
document.getElementById('search').addEventListener('keyup', function () {
    const searchValue = this.value.toLowerCase();
    const imgDivs = document.querySelectorAll('.gallery .image');
    imgDivs.forEach(div => {
        const altText = div.querySelector('img').alt.toLowerCase();
        div.style.display = altText.includes(searchValue) ? 'block' : 'none';
    });
});

// Open modal
function openModal(src, name) {
    modal.style.display = 'block';
    modalImage.src = src;
    captionText.innerHTML = name;
}

// Close modal
closeModal.onclick = function () {
    modal.style.display = 'none';
};

// Close modal when clicking outside of the image
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Initialize gallery
loadImages();
