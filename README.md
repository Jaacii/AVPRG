# Erweitert die Aufagabe Bonus 1 um Sechs Slider. Über jeweils drei Slider kann man die Position des Listeners sowie der Sound-Quelle auf den X, Y und Z Achsen verschieben.

Eine Live-Demo der Aufgabe findet ihr hier: https://jakobsudau.github.io/AVPRG/Bonus2/index.html

Tipp: Benutzt hierfür die MediaElementSourceNode und das Resonance Audio SDK (https://developers.google.com/resonance-audio/develop/web/getting-started), und das HTML Input Element von type=range.

Beispielcode: Einbindung des Resonance Audio SDKs in euer HTML
```
<script src="https://cdn.jsdelivr.net/npm/resonance-audio/build/resonance-audio.min.js"></script>
```

Beispielcode: erstellt eine Resonance Audio Scene
```
var var dimensions = {width: 10.1, height: 10.1, depth: 25.1};

var materials = {
  left: "brick-bare",
  right: "curtain-heavy",
  front: "marble",
  back: "glass-thin",
  down: "grass",
  up: "transparent"
};

var resonanceAudioScene = new ResonanceAudio(audioContext, {
    ambisonicOrder: 3,
    dimensions: dimensions,
    materials: materials,
  });

var source = resonanceAudioScene.createSource();
mediaElementAudioSource.connect(source.input);

resonanceAudioScene.output.connect(audioContext.destination);

source.setPosition(4, 3, 25);
resonanceAudioScene.setListenerPosition(1, 1, 2);
// source.setOrientation(x, y, z, up_x, up_y, up_z);
// resonanceAudioScene.setListenerOrientation(x, y, z, x, y, z);
```