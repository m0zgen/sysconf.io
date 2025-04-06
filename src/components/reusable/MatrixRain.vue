<template>
  <canvas
      id="matrixCanvas"
      class="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
  ></canvas>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const canvas = document.getElementById("matrixCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters = "アァイィウエカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZабвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = new Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0, 26, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // ctx.fillStyle = "#00FF00";
    ctx.fillStyle = "rgba(0, 255, 0, 0.3)";
    ctx.font = `${fontSize}px 'Fira Code', monospace`;

    drops.forEach((y, i) => {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      const x = i * fontSize;
      ctx.fillText(text, x, y * fontSize);

      if (y * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    });
  }

  setInterval(draw, 50);

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
</script>

<style scoped>
canvas {
  background: transparent;
}
</style>
