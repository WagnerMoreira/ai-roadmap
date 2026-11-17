type AudioContextConstructor = new () => AudioContext;

function createDistortionCurve(amount: number) {
  const samples = 256;
  const curve = new Float32Array(samples);
  const radians = Math.PI / 180;

  for (let index = 0; index < samples; index += 1) {
    const x = (index * 2) / samples - 1;
    curve[index] = ((3 + amount) * x * 20 * radians) / (Math.PI + amount * Math.abs(x));
  }

  return curve;
}

export function playMetalRiff() {
  const AudioContextClass = window.AudioContext ??
    (window as typeof window & { webkitAudioContext?: AudioContextConstructor }).webkitAudioContext;

  if (!AudioContextClass) return;

  const context = new AudioContextClass();

  const scheduleRiff = () => {
    const start = context.currentTime + 0.015;
    const distortion = context.createWaveShaper();
    const tone = context.createBiquadFilter();
    const master = context.createGain();

    distortion.curve = createDistortionCurve(55);
    distortion.oversample = "4x";
    tone.type = "lowpass";
    tone.frequency.setValueAtTime(2200, start);
    tone.Q.setValueAtTime(1.2, start);
    master.gain.setValueAtTime(0.0001, start);
    master.gain.exponentialRampToValueAtTime(0.18, start + 0.02);
    master.gain.exponentialRampToValueAtTime(0.0001, start + 0.92);

    distortion.connect(tone);
    tone.connect(master);
    master.connect(context.destination);

    const notes = [82.41, 98, 110, 82.41, 123.47, 110, 82.41];

    notes.forEach((root, index) => {
      const noteStart = start + index * 0.115;
      const noteGain = context.createGain();
      noteGain.gain.setValueAtTime(0.0001, noteStart);
      noteGain.gain.exponentialRampToValueAtTime(0.72, noteStart + 0.008);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, noteStart + 0.105);
      noteGain.connect(distortion);

      [root, root * 1.498].forEach((frequency, voice) => {
        const oscillator = context.createOscillator();
        oscillator.type = voice === 0 ? "sawtooth" : "square";
        oscillator.frequency.setValueAtTime(frequency, noteStart);
        oscillator.detune.setValueAtTime(voice === 0 ? -4 : 4, noteStart);
        oscillator.connect(noteGain);
        oscillator.start(noteStart);
        oscillator.stop(noteStart + 0.11);
      });
    });

    window.setTimeout(() => void context.close(), 1100);
  };

  if (context.state === "suspended") void context.resume().then(scheduleRiff);
  else scheduleRiff();
}
