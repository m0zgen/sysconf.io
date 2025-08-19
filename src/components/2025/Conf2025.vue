<script setup>
import MatrixRain from "@/components/reusable/MatrixRain.vue";

</script>

<template>
  <section class="relative min-h-screen flex flex-col justify-between items-center bg-sysconf-dark font-mono text-sysconf-green text-center px-4 overflow-hidden">

    <!-- Matrix rain background -->
    <MatrixRain />

    <!-- Content over rain -->
    <main class="relative z-10 flex flex-col items-center justify-center flex-1 max-w-2xl w-full space-y-6">

      <!-- Logo 2025 -->
      <div class="max-w-lg w-full">
        <img class="w-full mx-auto" src="@/assets/images/2025/open-sysconf-logo-2025-old-style.png" alt="Open SysConf 2025">
      </div>

      <!-- Typewriter -->
      <h1 class="typewriter font-fira font-normal">
        Быть профи — не фича. Это состояние.
      </h1>

      <!-- Subtitle -->
      <p class="text-sm md:text-base">
        Каждый день — шаг к лучшей версии себя.
        <br />
        <span class="text-white">Open SysConf'25</span> — твой следующий шаг.
      </p>

      <!-- Btns -->
      <div class="flex flex-wrap justify-center gap-4 mt-6">
        <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeEgqhrfNCVmUQ1bIv_Jv4uL-y97d-kufl84RXBHsGfIOplfQ/viewform?usp=dialog"
            target="_blank"
            class="bg-transparent border border-sysconf-green text-sysconf-green px-4 py-2 hover:bg-sysconf-green hover:text-white transition"
        >
          Отправить доклад
        </a>
        <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfvODOfncBn04EqujgI2LSblDDdGa59Cficmw3aCxnhiD0_uQ/viewform?usp=dialog"
            target="_blank"
            class="bg-transparent border border-sysconf-green text-sysconf-green px-4 py-2 hover:bg-sysconf-green hover:text-white transition"
        >
          Стать волонтером
        </a>
        <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSevXe9neuhlrXYXidJDYzungzBH5U9S4q7wlj9aYCnGgd8NgA/viewform?usp=dialog"
            target="_blank"
            class="bg-transparent border border-sysconf-green text-sysconf-green px-4 py-2 hover:bg-sysconf-green hover:text-white transition"
        >
          Регистрация
        </a>
      </div>

      <!-- Speech stats -->
      <p class="text-sm md:text-base">
        <span class="text-white">Докладов на рассмотрении → </span> 2.
      </p>

      <!-- Place and Date -->
      <p class="text-sm md:text-base">
        <span class="text-white">Алматы, Казахстан → </span>4 октября 2025 года.
      </p>

      <!-- Place and Date -->
      <p class="text-sm md:text-base">
        <span class="text-white">Место: Amphitheatre, SmArt.Point → </span>г. Алматы, ул. Байзакова, 280.
      </p>

      <!-- Spikers section -->
      <section class="w-full mt-16">
        <h2 class="text-xl md:text-2xl font-bold mb-8">Наши будущие спикеры</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
              v-for="n in 6"
              :key="n"
              class="flex flex-col items-center p-4 border border-sysconf-green text-sysconf-green rounded-lg bg-transparent transition hover:bg-sysconf-green/10 hover:shadow-neon"
          >
            <!-- Заглушка фото -->
            <div class="w-24 h-24 rounded-full bg-green-900/30 border border-green-500 mb-4 overflow-hidden flex items-center justify-center">
              <span class="text-3xl">👤</span>
            </div>

            <!-- Имя -->
            <h3 class="text-lg font-semibold mb-1">Speaker #{{ n }}</h3>

            <!-- Должность -->
            <p class="text-xs text-green-400 mb-2">DevOps / Hacker / Founder</p>

            <!-- Тема -->
            <p class="text-sm text-green-300 text-center">
              Забронировано. Coming soon...
            </p>
          </div>
        </div>
      </section>

      <!-- CTA button -->
      <div class="mt-10 flex justify-center">
        <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeEgqhrfNCVmUQ1bIv_Jv4uL-y97d-kufl84RXBHsGfIOplfQ/viewform?usp=dialog"
            target="_blank"
            class="bg-transparent border border-sysconf-green text-sysconf-green px-6 py-3 hover:bg-sysconf-green hover:text-black transition font-semibold rounded-lg"
        >
          Я хочу выступить
        </a>
      </div>

    </main>

    <!-- Footer -->
    <footer class="relative z-10 py-6 text-xs text-green-600">
      Open SysConf.io © 2019 - {{ new Date().getFullYear() }}.
    </footer>
  </section>
</template>

<style scoped>

/* === CRT === */
.bg-sysconf-dark {
  position: relative;
  background-color: #010807;
  background-image: repeating-linear-gradient(
      0deg,
      rgba(0, 255, 0, 0.05) 0px,
      rgba(0, 255, 0, 0.05) 1px,
      transparent 1px,
      transparent 2px
  );
  background-size: 100% 2px;
  min-height: 100vh;
  overflow: hidden;
  animation: terminalOn 1.2s ease-out;
}

/* Noise */
.bg-sysconf-dark::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml;utf8,\
    <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>\
      <filter id='noiseFilter'>\
        <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/>\
      </filter>\
      <rect width='100%' height='100%' filter='url(#noiseFilter)' opacity='0.03'/>\
    </svg>");
  z-index: 10;
  pointer-events: none;
}

/* "enable terminal" effect */
@keyframes terminalOn {
  0% {
    opacity: 0;
    transform: scaleY(0.8) scaleX(1.05);
    filter: brightness(150%);
  }
  60% {
    opacity: 1;
    transform: scaleY(1.05) scaleX(0.95);
    filter: brightness(100%);
  }
  100% {
    transform: scale(1);
    filter: none;
  }
}

/* text + btns - CRT style */
.text-sysconf-green {
  color: #00ff00;
}
h1, p, a {
  text-shadow: 0 0 4px #00ff00, 0 0 10px #00ff00;
}

/* Кнопки при ховере */
a:hover {
  box-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00;
}

/* Mono font */

@font-face {
  font-family: 'Fira Code';
  src: url('@/assets/fonts/fira_code/FiraCode-Light.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Fira Code';
  src: url('@/assets/fonts/fira_code/FiraCode-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Fira Code';
  src: url('@/assets/fonts/fira_code/FiraCode-SemiBold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Fira Code';
  src: url('@/assets/fonts/fira_code/FiraCode-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}


.font-fira {
  font-family: 'Fira Code', monospace;
}

* {
  font-family: 'Fira Code', monospace;
}

/* === Typewriter === */
.typewriter {
  width: 100%;
  max-width: 40ch;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #00ff00;
  animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
  font-size: 1.5rem;
  margin: 0 auto;
}

@keyframes typing {
  from { width: 0 }
  to { width: 40ch }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #00ff00 }
}
</style>



<script>
import dataUsers from "@/assets/data/data.json";
import JoinButtons from "@/components/2024/JoinButtons.vue";
import FooterComponent from "@/components/reusable/FooterComponent.vue";

export default {
  components: {
    JoinButtons,
    FooterComponent,
  },
  data() {
    return {
      users: dataUsers,
    };
  },
};

</script>

