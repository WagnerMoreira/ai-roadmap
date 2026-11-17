let metalGuitarHit: HTMLAudioElement | undefined;

export function playMetalGuitarHit() {
  metalGuitarHit ??= new Audio("/audio/guitar-hit.mp3");
  metalGuitarHit.volume = 0.7;
  metalGuitarHit.currentTime = 0;
  void metalGuitarHit.play().catch(() => {
    // Completion still succeeds when a browser blocks audio playback.
  });
}
