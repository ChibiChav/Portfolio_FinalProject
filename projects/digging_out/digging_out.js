console.log('JS Loaded')

function toggleLightMode() {
    console.log('prendido');
    let el = document.getElementById('app');
    el.classList.toggle('-light');
}

function App() {
    let lightModeButton = document.getElementById('light-mode');
    console.log(lightModeButton);

    lightModeButton.addEventListener('click', toggleLightMode)
}

document.addEventListener('DOMContentLoaded', App);