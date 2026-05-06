<template>
  <canvas
      ref="canvasRef"
      class="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
  ></canvas>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const canvasRef = ref(null);

let ctx;
let drops = [];
let columns = 0;
let intervalId = null;

const letters =
    "░▒▓█▌▐◆◇◢◣◤◥△▽◇◆01ABCDEFGHIJKLMNOPQRSTUVWXYZSYSOPENCONF26";

const fontSize = 12;

function resizeCanvas(canvas) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  columns = Math.floor(canvas.width / fontSize);
  drops = new Array(columns).fill(0).map(() => Math.random() * canvas.height / fontSize);
}

function draw(canvas) {
  // фиолетовый CRT fade
  ctx.fillStyle = "rgba(6, 0, 14, 0.055)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = `${fontSize}px 'Fira Code', 'JetBrains Mono', monospace`;

  drops.forEach((y, i) => {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    const x = i * fontSize;

    // разная яркость символов
    const alpha = Math.random() > 0.92 ? 0.95 : 0.28;

    ctx.shadowColor = "rgba(180, 70, 255, 0.8)";
    ctx.shadowBlur = Math.random() > 0.94 ? 12 : 4;

    ctx.fillStyle = `rgba(190, 80, 255, ${alpha})`;
    ctx.fillText(text, x, y * fontSize);

    // редкие яркие “головы” потоков
    if (Math.random() > 0.985) {
      ctx.fillStyle = "rgba(245, 220, 255, 0.9)";
      ctx.fillText(text, x, y * fontSize);
    }

    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  });
}

onMounted(() => {
  const canvas = canvasRef.value;
  ctx = canvas.getContext("2d");

  resizeCanvas(canvas);

  intervalId = setInterval(() => draw(canvas), 55);

  window.addEventListener("resize", () => resizeCanvas(canvas));
});

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
canvas {
  background: transparent;
  filter: contrast(1.1) saturate(1.2);
}
</style>
