
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

    // Event Listeners
    loadInfo();

    slider.addEventListener("input", moveDivisor);
    window.addEventListener("load", resetSlider);

})();