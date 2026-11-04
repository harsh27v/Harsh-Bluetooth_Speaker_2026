(() => {

    // Variables
    const infoBoxes = [
        {
            title: "AUX Input",
            text: "Connect a compatible device through the AUX input for listening with a wired connection.",
            image: "images/speaker-aux.svg"
        },
        {
            title: "USB-C Charging",
            text: "Connect a USB-C cable to recharge the speaker.",
            image: "images/speaker-usb.svg"
        },
        {
            title: "Fabric Grip",
            text: "The textured fabric surface provides a comfortable hold and makes the speaker easier to handle.",
            image: "images/fabric.svg"
        },
        {
            title: "Bluetooth Controls",
            text: "Use the built-in buttons to adjust the volume and manage music playback.",
            image: "images/controls.svg"
        }
    ];

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

    // Event Listeners

    loadInfo();

})();