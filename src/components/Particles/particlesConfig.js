import '../../App.css';

const particlesConfig = {

    "particles": {
        color: {
            value: "#15cdfc",
        },
        links: {
        color: "#15cdfc",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
        },
        collisions: {
        enable: true,
        },
        move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 1,
        straight: false,
        },
        number: {
        density: {
            enable: true,
            value_area: 2500,
        },
        value: 80,
        },
        opacity: {
        value: 0.3,
        },
        shape: {
        type: "circle",
        },
        size: {
        random: true,
        value: 5,
        },
    },
    "retina_detect": true

}

export default particlesConfig