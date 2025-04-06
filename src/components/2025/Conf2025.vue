<script setup>

</script>

<template>
  <section class="min-h-screen flex flex-col justify-between items-center bg-sysconf-dark font-mono text-sysconf-green text-center px-4">

    <!-- Center Content -->
    <main class="flex flex-col items-center justify-center flex-1 max-w-2xl w-full space-y-6">

      <!-- Лого -->
      <div class="max-w-lg w-full">
        <img class="w-full mx-auto" src="@/assets/open-sysconf-logo-2025.png" alt="Open SysConf 2025">
      </div>

      <!-- Слоган -->
      <h1 class="text-2xl md:text-4xl font-bold">
        Быть профи — не кнопка, а привычка<span class="animate-pulse">_</span>
      </h1>

      <!-- Подзаголовок -->
      <p class="text-sm md:text-base">
        Каждый день — шаг к лучшей версии себя.
        <br />
        <span class="text-white">Open SysConf'25</span> — твой следующий шаг.
      </p>

      <!-- Кнопки -->
      <div class="flex flex-wrap justify-center gap-4 mt-6">

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeEgqhrfNCVmUQ1bIv_Jv4uL-y97d-kufl84RXBHsGfIOplfQ/viewform?usp=dialog"
           target="_blank"
           class="bg-transparent border border-sysconf-green text-sysconf-green px-4 py-2 hover:bg-sysconf-green hover:text-white transition">
          Отправить доклад
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvODOfncBn04EqujgI2LSblDDdGa59Cficmw3aCxnhiD0_uQ/viewform?usp=dialog"
           target="_blank"
           class="bg-transparent border border-sysconf-green text-sysconf-green px-4 py-2 hover:bg-sysconf-green hover:text-white transition">
          Стать волонтером
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSevXe9neuhlrXYXidJDYzungzBH5U9S4q7wlj9aYCnGgd8NgA/viewform?usp=dialog"
           target="_blank"
           class="bg-transparent border border-sysconf-green text-sysconf-green px-4 py-2 hover:bg-sysconf-green hover:text-white transition">
          Регистрация
        </a>
      </div>
    </main>

    <!-- Footer -->
    <footer class="py-6 text-xm text-green-600">
      <span>Open SysConf.io © 2019 - {{ new Date().getFullYear() }}. </span>
    </footer>

  </section>
</template>


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

<style scoped>

</style>
