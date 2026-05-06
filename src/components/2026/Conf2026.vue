<script setup>
import MatrixRain from "@/components/reusable/MatrixRainv2.vue";

</script>

<template>
  <section class="relative min-h-screen flex flex-col justify-between items-center bg-sysconf-dark font-mono text-sysconf-green text-center px-4 overflow-hidden">

    <!-- Matrix rain background -->
    <MatrixRain />

    <!-- Content over rain -->
    <main class="relative z-10 flex flex-col items-center justify-center flex-1 max-w-2xl w-full space-y-6">

      <!-- Logo 2025 -->
      <div class="max-w-lg w-full">
        <img class="w-full mx-auto" src="@/assets/images/2026/open-sysconf-logo-2026-old-style.png" alt="Open SysConf 2026">
      </div>

      <!-- Typewriter -->
      <h1 class="typewriter font-fira font-normal">
        Control the system. Control your future.
      </h1>

      <!-- Subtitle -->
      <p class="text-sm md:text-base">
<!--        Don't just use it-->
<!--        <br />-->
        <span class="text-white">Open SysConf'26</span> — build your own.
      </p>

      <!-- Btns -->
      <div class="flex flex-wrap justify-center gap-4 mt-6">
<!--        <a-->
<!--            href="https://docs.google.com/forms/d/e/1FAIpQLSeEgqhrfNCVmUQ1bIv_Jv4uL-y97d-kufl84RXBHsGfIOplfQ/viewform?usp=dialog"-->
<!--            target="_blank"-->
<!--            class="bg-transparent border border-sysconf-green text-sysconf-green px-4 py-2 hover:bg-sysconf-green hover:text-white transition"-->
<!--        >-->
<!--          Отправить доклад-->
<!--        </a>-->
<!--        <a-->
<!--            href="https://docs.google.com/forms/d/e/1FAIpQLSfvODOfncBn04EqujgI2LSblDDdGa59Cficmw3aCxnhiD0_uQ/viewform?usp=dialog"-->
<!--            target="_blank"-->
<!--            class="bg-transparent border border-sysconf-green text-sysconf-green px-4 py-2 hover:bg-sysconf-green hover:text-white transition"-->
<!--        >-->
<!--          Стать волонтером-->
<!--        </a>-->
<!--        <a-->
<!--            href="https://docs.google.com/forms/d/e/1FAIpQLSevXe9neuhlrXYXidJDYzungzBH5U9S4q7wlj9aYCnGgd8NgA/viewform?usp=dialog"-->
<!--            target="_blank"-->
<!--            class="bg-transparent border border-sysconf-green text-sysconf-green px-4 py-2 hover:bg-sysconf-green hover:text-white transition"-->
<!--        >-->
<!--          Регистрация-->
<!--        </a>-->
      </div>

      <!-- Speech stats -->
      <p class="text-sm md:text-base">
        <span class="text-white">Докладов → </span> в процессе
      </p>

      <!-- Place and Date -->
      <p class="text-sm md:text-base">
        <span class="text-white">Алматы, Казахстан → </span> в процессе
<!--        Октябрь 2026 года, 10:00 утра.-->
      </p>

      <!-- Place and Date -->
<!--      <p class="text-sm md:text-base">-->
<!--        <span class="text-white">Место: SmArt.Point → </span>г. Алматы, ул. Байзакова, 280.-->
<!--      </p>-->

      <!-- Spikers section -->


      <!-- 📍 Локация -->
<!--      <section class="w-full mt-24 text-center">-->
<!--        <h2 class="text-xl md:text-2xl font-bold mb-4">Локация</h2>-->
<!--&lt;!&ndash;        <p class="text-purple-400 mb-6">Smart.Point Almaty</p>&ndash;&gt;-->
<!--        <div class="max-w-3xl mx-auto overflow-hidden shadow-lg border border-sysconf-green">-->
<!--          <img src="@/assets/images/smartpoint-location.jpg" alt="Smartpoint Almaty" class="w-full object-cover" />-->
<!--          <a href="https://go.2gis.com/DxUeW" target="_blank" class="text-white">🔗 2Gis</a>-->
<!--        </div>-->
<!--      </section>-->

      <!-- 🧑‍💻 Имена участников -->
      <section class="w-full mt-20 text-center">
        <h2 class="text-xl md:text-2xl font-bold mb-6">Поддержка</h2>
        <div class="flex flex-wrap justify-center gap-4 text-sysconf-green text-sm md:text-base font-mono">
          <span class="px-3 py-1 bg-purple-900/30 border border-purple-500 text-white">Егор</span>
          <a href="https://t.me/onebrick" target="_blank" rel="noopener noreferrer" class="px-3 py-1 border border-purple-500 rounded-md bg-purple-900/30 hover:bg-purple-800/50 text-purple-300 hover:text-green-100 transition">
            @manfromkz
          </a>
          <span class="px-3 py-1 bg-purple-900/30 border border-purple-500 text-white">Есенай</span>
          <span class="px-3 py-1 bg-purple-900/30 border border-purple-500 text-white">Бауыржан</span>
          <a href="https://t.me/sysadm_in_channel" target="_blank" rel="noopener noreferrer" class="px-3 py-1 border border-purple-500 rounded-md bg-purple-900/30 hover:bg-purple-800/50 text-purple-300 hover:text-green-100 transition">
            @sysadminkz
          </a>
          <span class="px-3 py-1 bg-purple-900/30 border border-purple-500 text-white">Алибек</span>
          <span class="px-3 py-1 bg-purple-900/30 border border-purple-500 text-white">Василий</span>

        </div>
      </section>

      <!-- 🧩 Партнёры -->
<!--      <section class="w-full mt-16 text-center">-->
<!--        <h2 class="text-xl md:text-2xl font-bold mb-6">При поддержке</h2>-->
<!--        <div class="flex flex-wrap justify-center gap-8 items-center">-->
<!--          <a href="https://lab.sys-adm.in" target="_blank" rel="noopener noreferrer">-->
<!--            <img src="@/assets/logos/lab.sys-adm.in-logo.png" alt="Sys-Adm.in Lab" class="h-16 md:h-24 object-contain transition duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_#00FF00]" />-->
<!--          </a>-->
<!--          <a href="https://profit.kz" target="_blank" rel="noopener noreferrer">-->
<!--            <img src="@/assets/logos/logo-profit.kz.png" alt="Profit.kz" class="h-16 md:h-24 object-contain transition duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_#00FF00]" />-->
<!--          </a>-->
<!--          <a href="https://qosi.kz" target="_blank" rel="noopener noreferrer">-->
<!--            <img src="@/assets/logos/logo-qosi.kz.png" alt="QOSI.kz" class="h-16 md:h-24 object-contain transition duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_#00FF00]" />-->
<!--          </a>-->
<!--          <a href="https://do-tek.io" target="_blank" rel="noopener noreferrer">-->
<!--            <img src="@/assets/logos/Do-Tek-Logo-Cutted.png" alt="Do-Tek LLC" class="h-16 md:h-24 object-contain transition duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_#00FF00]" />-->
<!--          </a>-->
<!--        </div>-->
<!--      </section>-->

      <section>
              <div class="mt-10 flex justify-center">
                <a
                    href="/"
                    class="bg-transparent border border-sysconf-green text-white px-6 py-3 hover:bg-sysconf-green hover:text-green-300 transition font-semibold"
                >
                  на Главную
                </a>
              </div>
      </section>


      <!--      <section class="w-full mt-16">-->
<!--        <h2 class="text-xl md:text-2xl font-bold mb-8">Наши будущие спикеры</h2>-->

<!--        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">-->
<!--          <div-->
<!--              v-for="n in 6"-->
<!--              :key="n"-->
<!--              class="flex flex-col items-center p-4 border border-sysconf-green text-sysconf-green rounded-lg bg-transparent transition hover:bg-sysconf-green/10 hover:shadow-neon"-->
<!--          >-->
<!--            &lt;!&ndash; Заглушка фото &ndash;&gt;-->
<!--            <div class="w-24 h-24 rounded-full bg-green-900/30 border border-green-500 mb-4 overflow-hidden flex items-center justify-center">-->
<!--              <span class="text-3xl">👤</span>-->
<!--            </div>-->

<!--            &lt;!&ndash; Имя &ndash;&gt;-->
<!--            <h3 class="text-lg font-semibold mb-1">Speaker #{{ n }}</h3>-->

<!--            &lt;!&ndash; Должность &ndash;&gt;-->
<!--            <p class="text-xs text-green-400 mb-2">DevOps / Hacker / Founder</p>-->

<!--            &lt;!&ndash; Тема &ndash;&gt;-->
<!--            <p class="text-sm text-green-300 text-center">-->
<!--              Забронировано. Coming soon...-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </section>-->

      <!-- CTA button -->
<!--      <div class="mt-10 flex justify-center">-->
<!--        <a-->
<!--            href="https://docs.google.com/forms/d/e/1FAIpQLSeEgqhrfNCVmUQ1bIv_Jv4uL-y97d-kufl84RXBHsGfIOplfQ/viewform?usp=dialog"-->
<!--            target="_blank"-->
<!--            class="bg-transparent border border-sysconf-green text-sysconf-green px-6 py-3 hover:bg-sysconf-green hover:text-black transition font-semibold rounded-lg"-->
<!--        >-->
<!--          Я хочу выступить-->
<!--        </a>-->
<!--      </div>-->

    </main>

    <!-- Footer -->
    <footer class="relative z-10 py-6 text-xs text-white">
      Open SysConf.io © 2019 - {{ new Date().getFullYear() }}.
    </footer>
  </section>
</template>

<style scoped>

/* === PURPLE CRT v2 (FAST) === */
.bg-sysconf-dark {
  position: relative;
  background-color: #050008;

  /* мягкий фиолетовый градиент + scanlines */
  background-image:
      radial-gradient(circle at 50% 20%, rgba(120, 40, 180, 0.10), transparent 40%),
      repeating-linear-gradient(
          0deg,
          rgba(190, 80, 255, 0.045) 0px,
          rgba(190, 80, 255, 0.045) 1px,
          transparent 1px,
          transparent 3px
      );

  background-size: 100% 100%, 100% 3px;

  min-height: 100vh;
  overflow: hidden;

  /* быстрый старт */
  animation: terminalOn 0.4s cubic-bezier(.2,.8,.2,1);
  will-change: opacity, transform, filter;
}

/* Noise (облегчённый) */
.bg-sysconf-dark::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml;utf8,\
    <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>\
      <filter id='n'>\
        <feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/>\
      </filter>\
      <rect width='100%' height='100%' filter='url(%23n)' opacity='0.035'/>\
    </svg>");
  mix-blend-mode: screen;
  pointer-events: none;
  z-index: 10;
}

/* CRT vignette */
.bg-sysconf-dark::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
      radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.6) 100%);
  pointer-events: none;
  z-index: 9;
}

/* FAST terminal boot */
@keyframes terminalOn {
  0% {
    opacity: 0;
    transform: scaleY(0.96) scaleX(1.01);
    filter: brightness(140%);
  }
  60% {
    opacity: 1;
    transform: scaleY(1.01) scaleX(0.995);
    filter: brightness(115%);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    filter: none;
  }
}

/* === TEXT / UI === */
.text-sysconf-purple {
  color: #c15cff;
}

h1, p, a {
  text-shadow:
      0 0 4px rgba(193, 92, 255, 0.9),
      0 0 10px rgba(180, 70, 255, 0.6),
      0 0 18px rgba(120, 30, 200, 0.3);
}

/* hover glow */
a:hover {
  box-shadow:
      0 0 6px rgba(193, 92, 255, 0.9),
      0 0 14px rgba(180, 70, 255, 0.6),
      0 0 22px rgba(120, 30, 200, 0.3);
}

/* === FONTS === */
@font-face {
  font-family: 'Fira Code';
  src: url('@/assets/fonts/fira_code/FiraCode-Light.woff2') format('woff2');
  font-weight: 300;
}

@font-face {
  font-family: 'Fira Code';
  src: url('@/assets/fonts/fira_code/FiraCode-Regular.woff2') format('woff2');
  font-weight: 400;
}

@font-face {
  font-family: 'Fira Code';
  src: url('@/assets/fonts/fira_code/FiraCode-SemiBold.woff2') format('woff2');
  font-weight: 600;
}

@font-face {
  font-family: 'Fira Code';
  src: url('@/assets/fonts/fira_code/FiraCode-Bold.woff2') format('woff2');
  font-weight: 700;
}

.font-fira,
* {
  font-family: 'Fira Code', monospace;
}

/* === TYPEWRITER (faster + cleaner) === */
.typewriter {
  width: 100%;
  max-width: 40ch;
  overflow: hidden;
  white-space: nowrap;

  border-right: 2px solid #c15cff;

  animation:
      typing 2.2s steps(40, end),
      blink-caret 0.7s step-end infinite;

  font-size: 1.5rem;
  margin: 0 auto;

  color: #f1d6ff;

  text-shadow:
      0 0 4px rgba(193, 92, 255, 0.9),
      0 0 10px rgba(180, 70, 255, 0.7);
}

@keyframes typing {
  from { width: 0 }
  to { width: 40ch }
}

@keyframes blink-caret {
  0%,100% { border-color: transparent }
  50% { border-color: #c15cff }
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

