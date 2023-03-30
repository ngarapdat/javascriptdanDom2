const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.flexbox');
const prevBtn = slider.querySelector('.btn button:first-child');
const nextBtn = slider.querySelector('.btn button:last-child');
let slideIndex = 0;

// membuat fungsi untuk menampilkan slide
function showSlide() {
    // menyembunyikan semua slide
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // menampilkan slide yang sesuai dengan slideIndex
    slides[slideIndex].style.display = 'flex';
}

// membuat fungsi untuk mengubah slide ke slide berikutnya
function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide();
}

// membuat fungsi untuk mengubah slide ke slide sebelumnya
function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide();
}

// menampilkan slide pertama saat pertama kali halaman dimuat
showSlide();

// menambahkan event listener untuk tombol prev dan next
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);


//pop up
const popups = document.querySelectorAll('.popup');
popups.forEach(popup => {
    popup.addEventListener('click', () => {
        const description = popup.dataset.popup;
        const popupHTML = `<div class="popup-container">
                                    <p>${description}</p>
                                </div>`;
        document.body.insertAdjacentHTML('beforeend', popupHTML);
    });
});

document.addEventListener('click', e => {
    if (e.target.classList.contains('popup-container')) {
        e.target.remove();
    }
});



//pesan kesalahan

const inputText = document.getElementById("input-text");
const errorMessage = document.getElementById("error-message");
const areaMessage = document.getElementById("message-error-message")
const inputArea = document.getElementById("input-area");
inputText.addEventListener("input", (event) => {
    const text = event.target.value.trim();

    if (text.length === 0) {
        errorMessage.innerText = "Text tidak boleh kosong";
    } else if (!/^[a-zA-Z]+$/.test(text)) {
        errorMessage.innerText = "Text hanya boleh berisi huruf";
    } else {
        errorMessage.innerText = "";
    }
});
inputArea.addEventListener("input", (event) => {
    const area = event.target.value.trim();

    if (area.length === 0) {
        areaMessage.innerText = "Text tidak boleh kosong";
    } else if (!/^[a-zA-Z]+$/.test(area)) {
        areaMessage.innerText = "Text hanya boleh berisi huruf";
    } else {
        areaMessage.innerText = "";
    }
});

//accordian
const ItemHeaders = document.querySelectorAll(".answer")
ItemHeaders.forEach(ItemHeader => {
    ItemHeader.addEventListener("click", event => {
        ItemHeader.classList.toggle("active")
        const ItemBody = ItemHeader.nextElementSibling;

        if (ItemHeader.classList.contains("active")) {
            ItemBody.style.maxHeight =ItemBody.scrollHeight +"px"
        } else {
            ItemBody.style.maxHeight = 0;
        }
    })
})

