// Create the AudioContext
var audioContext = new AudioContext();

// Create an audio element. Feed into audio graph.
var sound = new Audio("../sounds/sound.wav");
var mediaElementAudioSource = audioContext.createMediaElementSource(sound);
var isPlaying = false;
var playStopButton = document.getElementById("playStopButton");
sound.loop = true;

let canvasControl;
let Bonus2Scene;
let soundSource;
var sourcePosition = {x: 0.25, y: 0, z: 0.25};

let onLoad = function() {
    Bonus2Scene = new ResonanceAudio(audioContext);
    soundSource = Bonus2Scene.createSource();
    mediaElementAudioSource.connect(soundSource.input);
    Bonus2Scene.output.connect(audioContext.destination);

    let canvas = document.getElementById("canvas");
    let elements = [
        {
            icon: "sourceAIcon",
            x: 0.25,
            y: 0.25,
            radius: 0.04,
            alpha: 0.75,
            clickable: true,
        },
        {
            icon: "listenerIcon",
            x: 0.5,
            y: 0.5,
            radius: 0.04,
            alpha: 0.75,
            clickable: true,
        },
    ];

    canvasControl = new CanvasControl(canvas, elements, updatePositions);
};

window.addEventListener("load", onLoad);

document.getElementById("sourceHeightSlider").addEventListener("input", function(e) {
    sourcePosition.y = ((this.value/100)*dimensions[dimensionSelection].height);
    soundSource.setPosition(sourcePosition.x, sourcePosition.y, sourcePosition.z);
});

document.getElementById("roomSizeList").addEventListener("change", function(e) {
    setRoomProperties();
});

document.getElementById("roomMaterialList").addEventListener("change", function(e) {
    setRoomProperties();
});

function setRoomProperties() {
    dimensionSelection = document.getElementById('roomSizeList').value;
    materialSelection = document.getElementById('roomMaterialList').value;
    Bonus2Scene.setRoomProperties(dimensions[dimensionSelection], materials[materialSelection]);
}

function updatePositions(elements) {
    for (let i = 0; i < elements.length; i++) {
        let x = (elements[i].x - 0.5) * dimensions[dimensionSelection].width / 2;
        let y = 0;
        let z = (elements[i].y - 0.5) * dimensions[dimensionSelection].depth / 2;
        if (i < elements.length - 1) {
            sourcePosition.x = x;
            sourcePosition.z = z;
            soundSource.setPosition(x, sourcePosition.y, z);
        } else {
            Bonus2Scene.setListenerPosition(x, y, z);
        }
    }
}

playStopButton.addEventListener("click", function (e) {
    if (isPlaying) {
        sound.pause();
        playStopButton.innerHTML = "Play";
    } else {
        sound.play();
        playStopButton.innerHTML = "Stop";
    }
    isPlaying = !isPlaying;
  });
  
  sound.addEventListener("ended", function (e) {
    isPlaying = false;
    playStopButton.innerHTML = "Play";
});