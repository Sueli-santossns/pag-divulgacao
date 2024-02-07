document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });

            // Destaca o link de navegação ativo
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Adiciona um ouvinte de rolagem para destacar o link de navegação ativo
    window.addEventListener('scroll', function () {
        const fromTop = window.scrollY + document.querySelector('header').offsetHeight;

        navLinks.forEach(link => {
            const section = document.getElementById(link.getAttribute('href').substring(1));

            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});
// Adicione este código ao seu arquivo script.js

document.addEventListener("DOMContentLoaded", function () {
    // Selecione todas as imagens na galeria
    const galleryImages = document.querySelectorAll(".gallery-item img");

    // Adicione um ouvinte de evento de clique a cada imagem
    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            // Crie uma modal para exibir a imagem ampliada
            const modal = document.createElement("div");
            modal.className = "modal";

            // Crie uma imagem dentro da modal
            const modalImage = document.createElement("img");
            modalImage.src = this.src;
            modalImage.alt = this.alt;

            // Adicione a imagem à modal
            modal.appendChild(modalImage);

            // Adicione a modal ao corpo do documento
            document.body.appendChild(modal);

            // Adicione um ouvinte de evento de clique à modal para fechar quando clicar fora da imagem
            modal.addEventListener("click", function () {
                document.body.removeChild(modal);
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery-item img");
    let currentIndex;

    // Adicione um ouvinte de evento de clique a cada imagem
    galleryImages.forEach(function (image, index) {
        image.addEventListener("click", function () {
            currentIndex = index;

            // Abre a modal com a imagem atual
            openModal(this.src, this.alt);
        });
    });

    function openModal(src, alt) {
        const modal = document.createElement("div");
        modal.className = "modal";

        const modalImage = document.createElement("img");
        modalImage.src = src;
        modalImage.alt = alt;

        const prevButton = document.createElement("div");
        prevButton.className = "prev-button";
        prevButton.innerHTML = "&#10094;";
        prevButton.addEventListener("click", function () {
            navigate(-1);
        });

        const nextButton = document.createElement("div");
        nextButton.className = "next-button";
        nextButton.innerHTML = "&#10095;";
        nextButton.addEventListener("click", function () {
            navigate(1);
        });

        modal.appendChild(prevButton);
        modal.appendChild(modalImage);
        modal.appendChild(nextButton);

        document.body.appendChild(modal);

        modal.addEventListener("click", function () {
            document.body.removeChild(modal);
        });

        document.addEventListener("keydown", handleKeyPress);
    }

    function navigate(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = galleryImages.length - 1;
        } else if (currentIndex >= galleryImages.length) {
            currentIndex = 0;
        }

        const currentImage = galleryImages[currentIndex];
        openModal(currentImage.src, currentImage.alt);
    }

    function handleKeyPress(event) {
        if (event.key === "ArrowLeft") {
            navigate(-1);
        } else if (event.key === "ArrowRight") {
            navigate(1);
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery-item img");
    let currentIndex;

    galleryImages.forEach(function (image, index) {
        image.addEventListener("click", function () {
            currentIndex = index;
            openModal(this.src, this.alt);
        });
    });

    function openModal(src, alt) {
        const modal = document.createElement("div");
        modal.className = "modal";

        const modalImage = document.createElement("img");
        modalImage.src = src;
        modalImage.alt = alt;

        const closeButton = document.createElement("div");
        closeButton.className = "close-button";
        closeButton.innerHTML = "&times;";
        closeButton.addEventListener("click", function () {
            closeModal(modal);
        });

        const prevButton = document.createElement("div");
        prevButton.className = "prev-button";
        prevButton.innerHTML = "&#10094;";
        prevButton.addEventListener("click", function () {
            navigate(-1);
        });

        const nextButton = document.createElement("div");
        nextButton.className = "next-button";
        nextButton.innerHTML = "&#10095;";
        nextButton.addEventListener("click", function () {
            navigate(1);
        });

        modal.appendChild(closeButton);
        modal.appendChild(prevButton);
        modal.appendChild(modalImage);
        modal.appendChild(nextButton);

        document.body.appendChild(modal);

        modal.addEventListener("click", function () {
            closeModal(modal);
        });

        document.addEventListener("keydown", handleKeyPress);
    }

    function navigate(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = galleryImages.length - 1;
        } else if (currentIndex >= galleryImages.length) {
            currentIndex = 0;
        }

        const currentImage = galleryImages[currentIndex];
        openModal(currentImage.src, currentImage.alt);
    }

    function closeModal(modal) {
        document.body.removeChild(modal);
        document.removeEventListener("keydown", handleKeyPress);
    }

    function handleKeyPress(event) {
        if (event.key === "ArrowLeft") {
            navigate(-1);
        } else if (event.key === "ArrowRight") {
            navigate(1);
        } else if (event.key === "Escape") {
            const modal = document.querySelector(".modal");
            if (modal) {
                closeModal(modal);
            }
        }
    }
});
