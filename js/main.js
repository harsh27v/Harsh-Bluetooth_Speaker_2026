(() => {

    // Variables
    const infoBoxes = [
        {
            title: "Bluetooth Controls",
            text: "Adjust the volume and play music using the inbuilt buttons.",
            image: "images/controls.svg"
        },
        {
            title: "Fabric Grip",
            text: " The soft texture of the fabric surface gives a comfortable grip and makes it easier to use the speaker.",
            image: "images/fabric.svg"
        },
        {
            title: "AUX Input",
            text: "Connect an AUX input to a compatible device to listen using a wired connection.",
            image: "images/speaker-aux.svg"
        },
        {
            title: "USB-C Charging",
            text: "Connect a USB-C cable to recharge the speaker.",
            image: "images/speaker-usb.svg"
        }
    ];

    const divisor = document.querySelector("#divisor");
    const slider = document.querySelector("#slider");
    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1078;

    const frameCount = 181;
    const images = [];

    const speaker = {
        frame: 0
    };

    // Load animation images
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = `images/Animation/${i}.webp`;
        images.push(img);
    }

    // Functions
    function loadInfo() {
        infoBoxes.forEach((infoBox, index) => {
            const selected = document.querySelector(`#hotspot-${index + 1}`);

            const imageElement = document.createElement("img");
            imageElement.src = infoBox.image;
            imageElement.alt = "";

            const titleElement = document.createElement("h2");
            titleElement.textContent = infoBox.title;

            const textElement = document.createElement("p");
            textElement.textContent = infoBox.text;

            selected.appendChild(imageElement);
            selected.appendChild(titleElement);
            selected.appendChild(textElement);
        });
    }

    function moveDivisor() {
        divisor.style.width = `${slider.value}%`;
    }

    function resetSlider() {
        slider.value = "50";
        moveDivisor();
    }

    function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[speaker.frame], 0, 0);
    }

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero text animation
    gsap.to(".hero-content", {
        opacity: 0,
        y: -100,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1
        }
    });

    // Speaker scroll animation
    gsap.to(speaker, {
        frame: frameCount - 1,
        ease: "none",
        snap: "frame",
        scrollTrigger: {
            trigger: "#speaker-animation",
            pin: true,
            start: "top top",
            end: "+=2500",
            scrub: 1
        },
        onUpdate: render
    });

    // When the first image is loaded, call render
    images[0].addEventListener("load", render);

    // Event Listeners
    loadInfo();

    slider.addEventListener("input", moveDivisor);
    window.addEventListener("load", resetSlider);

})();