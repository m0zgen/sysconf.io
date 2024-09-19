<script setup>

</script>

<template>
<!--  Heading-->
  <section class="pb-20 bg-sysconf-dark" x-data="{ mobileNavOpen: false }">

    <!--    Nav-->
    <nav class="relative">
      <div class="flex py-8 px-4 lg:px-8 justify-between items-center">
        <RouterLink class="text-2xl text-white font-bold" to="/">
          <img class="h-7" src="@/assets/open-sysconf-logo-start-page.png" alt="" width="auto">
        </RouterLink>
        <div class="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <ul class="flex items-center text-white space-x-10">
            <li><a class="text-white font-bold text-lg" href="/">Главная</a></li>
            <span>
            <svg width="5" height="5" viewbox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle></svg>
          </span>
            <li><a class="text-white font-bold text-lg" href="https://t.me/OpenSysConf" target="_blank">Телеграм</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!--    Welcome-->
    <div class="relative container px-4 pt-12 md:pt-20 mx-auto">
      <div class="flex flex-wrap items-center -mx-4 mb-20 2xl:mb-14">
        <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
          <span class="text-lg font-bold text-blue-400">
            Open SysConf.io 2024
          </span>
          <h2 class="max-w-2xl mt-12 mb-12 text-6xl 2xl:text-8xl text-white font-bold font-heading">
            Делая сейчас, оставляй след в истории
          </h2>
          <p class="mb-12 lg:mb-16 2xl:mb-24 text-xl text-gray-100">
            Изучая новое, ты становишься лучше. Поддерживая других, ты делаешь мир лучше. Присоединяйся.
<!--            <a href="#place">Время, место. регистрация.</a>-->
          </p>

<!--          Join Buttons-->
          <div class="flex flex-wrap items-center -mx-4 mb-20 2xl:mb-14">
            <JoinButtons />
          </div>
        </div>

        <!--        Welcome logo-->
        <div class="w-full lg:w-1/2 px-4">
          <img class="w-full" src="@/assets/open-sysconf-logo-2024.png" alt="">
        </div>
      </div>

    </div>

    <!--    Nav Mobile-->
    <div :class="{ 'hidden': !mobileNavOpen, 'block': mobileNavOpen }" class="fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50 hidden">
      <div x-on:click="mobileNavOpen = !mobileNavOpen" class="fixed inset-0 bg-gray-800 opacity-80"></div>
      <nav class="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
        <div>
          <ul>
            <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="/">Главная</a></li>
            <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="https://t.me/OpenSysConf" target="_blank">Телеграм</a></li>
          </ul>
        </div>
        <div class="mt-auto px-10">
          <div class="pt-6"><a class="block mb-4 py-4 px-12 text-gray-800 text-center font-bold border border-gray-50 hover:border-gray-100 rounded-full" href="#">Sign in</a><a class="block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="#">Sign up</a></div>
          <p class="mt-6 mb-4 text-lg text-center">
            <span>2024 © Open SysConf.io.</span>
          </p>
        </div>
      </nav>
    </div>

  </section>

  <!--  Speakers-->
  <section class="relative py-10 2xl:py-20 bg-sysconf-dark overflow-hidden border-t border-gray-800">
    <div class="relative container px-4 mx-auto">
      <div class="max-w-4xl mx-auto">
        <h2 class="mb-24 text-center text-5xl font-bold font-heading text-white">
          Заявленные Доклады
        </h2>

        <!--        Row 1-->
        <div class="flex flex-wrap justify-center -mx-10 mb-20">
          <div class="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
            <div>
              <img class="mb-8 w-full h-112 lg:h-80 object-cover object-top s-border-yellow"
                   src="@/assets/stub/sysconf-hero-alexey.jpeg" alt="">
              <h3 class="mb-2 text-3xl text-white font-bold font-heading">
                Алексей
              </h3>
              <p class="mb-4 text-lg text-white font-bold">
                Админ инфраструктурщик в PS Cloud Services
              </p>
              <p class="mb-4 text-lg text-white">
                Три системы, которые ты захочешь развернуть и настроить
              </p>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
            <div class="lg:mt-24">
              <img class="mb-8 w-full h-112 lg:h-80 object-cover object-top s-border-green"
                   src="@/assets/stub/sysconf-hero-baur.jpeg" alt="">
              <h3 class="mb-2 text-3xl text-white font-bold font-heading">
                Бауыржан
              </h3>
              <p class="mb-4 text-lg text-white font-bold">
                Бинарный эксперт
              </p>
              <p class="mb-4 text-lg text-white">
                Внедрение вредоносного кода в андроид приложения.
              </p>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-10">
            <div>
              <img class="mb-8 w-full h-112 lg:h-80 object-cover object-top s-border-pink"
                   src="@/assets/stub/sysconf-hero-tatyana1.jpeg" alt="">
              <h3 class="mb-2 text-3xl text-white font-bold font-heading">
                Татьяна
              </h3>
              <p class="mb-4 text-lg text-white font-bold">
                AppSec инженер по призванию
              </p>
              <p class="mb-4 text-lg text-white">
                Open(Secure)Source
              </p>
            </div>
          </div>
        </div>

        <!--        Row 2-->
        <div class="flex flex-wrap justify-center -mx-10 mb-20">
          <div class="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
            <div>
              <img class="mb-8 w-full h-112 lg:h-80 object-cover object-top s-border-white"
                   src="@/assets/stub/sysconf-slot-busy.png" alt="">
              <h3 class="mb-2 text-3xl text-white font-bold font-heading">
                 Slot is busy
              </h3>
              <p class="mb-4 text-lg text-white font-bold">
                Cool man
              </p>
              <p class="mb-4 text-lg text-white">
                Will soon.
              </p>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
            <div class="lg:mt-24">
              <img class="mb-8 w-full h-112 lg:h-80 object-cover object-top s-border-gray"
                   src="@/assets/stub/sysconf-slot-busy-2.png" alt="">
              <h3 class="mb-2 text-3xl text-white font-bold font-heading">
                Zhassulan
              </h3>
              <p class="mb-4 text-lg text-white font-bold">
                Malware Researcher
              </p>
              <p class="mb-4 text-lg text-white">
                Как злоумышленники могут получать персональные данные
              </p>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-10">
            <div>
              <img class="mb-8 w-full h-112 lg:h-80 object-cover object-top s-border-gray"
                   src="@/assets/stub/stub-muborashko.jpg" alt="">
              <h3 class="mb-2 text-3xl text-white font-bold font-heading">
                Муборакшо
              </h3>
              <p class="mb-4 text-lg text-white font-bold">
                SA-DevOps
              </p>
              <p class="mb-4 text-lg text-white">
                Исторический обзор развития командных оболочек в UNIX-системах
              </p>
            </div>
          </div>
        </div>

        <!--        Row 3-->
        <div class="flex flex-wrap justify-center -mx-10 mb-20">
          <div class="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
            <div>
              <img class="mb-8 w-full h-112 lg:h-80 object-cover object-top s-border-gray"
                   src="@/assets/stub/stub-nurai.jpg" alt="">
              <h3 class="mb-2 text-3xl text-white font-bold font-heading">
                Нурай
              </h3>
              <p class="mb-4 text-lg text-white font-bold">
                Refactorial
              </p>
              <p class="mb-4 text-lg text-white">
                Рефакторинг архитектуры экосистемы приложений
              </p>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
            <div class="lg:mt-24">
              <img class="mb-8 w-full h-112 lg:h-80 object-cover object-top s-border-gray"
                   src="@/assets/stub/stub-microscheme.png" alt="">
              <h3 class="mb-2 text-3xl text-white font-bold font-heading">
                Андрей
              </h3>
              <p class="mb-4 text-lg text-white font-bold">
                System/Security Engineer
              </p>
              <p class="mb-4 text-lg text-white">
                Аппаратная и программная реализация проверки безопасности микросхем
              </p>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-10">
            <div>
              <img class="mb-8 w-full h-112 lg:h-80 object-cover object-top s-border-white"
                   src="@/assets/stub/stub-victor-ussr.jpg" alt="">
              <h3 class="mb-2 text-3xl text-white font-bold font-heading">
                Виктор
              </h3>
              <p class="mb-4 text-lg text-white font-bold">
                IT Problem Solver
              </p>
              <p class="mb-4 text-lg text-white">
                Как работает Enterprise Architect
              </p>
            </div>
          </div>
        </div>
        <!--        Row 4-->
        <div class="flex flex-wrap justify-center -mx-10 mb-20">
          <div class="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
            <div>
              <img class="mb-8 w-full h-112 lg:h-80 object-cover object-top s-border-gray"
                   src="@/assets/stub/stub-dark.png" alt="">
              <h3 class="mb-2 text-3xl text-white font-bold font-heading">
                Empty Slot
              </h3>
              <p class="mb-4 text-lg text-white font-bold">
                Unit Name
              </p>
              <p class="mb-4 text-lg text-white">
                Description
              </p>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
            <div class="lg:mt-24">
              <img class="mb-8 w-full h-112 lg:h-80 object-cover object-top s-border-gray"
                   src="@/assets/stub/sysconf-hero-yevgeniy.jpeg" alt="">
              <h3 class="mb-2 text-3xl text-white font-bold font-heading">
                Женя
              </h3>
              <p class="mb-4 text-lg text-white font-bold">
                ДНК Инженер
              </p>
              <p class="mb-4 text-lg text-white">
                Синтез молекулярных единиц
              </p>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-10">
            <div>
              <img class="mb-8 w-full h-112 lg:h-80 object-cover object-top s-border-white"
                   src="@/assets/stub/stub-dark.png" alt="">
              <h3 class="mb-2 text-3xl text-white font-bold font-heading">
                Empty Slot
              </h3>
              <p class="mb-4 text-lg text-white font-bold">
                Unit Name
              </p>
              <p class="mb-4 text-lg text-white">
                Description
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>

  <!--  Place-->
  <section id="place" class="relative py-10 2xl:py-20 bg-sysconf-dark overflow-hidden border-t border-gray-800">
    <div class="relative container px-4 mx-auto">
      <div class="max-w-4xl mx-auto">
        <h2 class="mb-24 text-center text-5xl font-bold font-heading text-white">
          Локация
        </h2>
        <div>
          <a href="https://go.2gis.com/jsxkm" target="_blank">
          <img class="mb-8 w-full h-112 lg:h-80 object-cover object-top"
               src="@/assets/images/smartpoint-location.jpg" alt="">
          </a>
          <h3 class="mb-2 text-3xl text-white font-bold font-heading text-center">
            Алматы, Smart.Point
          </h3>
          <p class="mb-4 text-lg text-white font-bold text-center">
            Место: г. Алматы, ул. Байзакова, 280. Зал: Amphitheatre
          </p>
          <p class="mb-4 text-lg text-white text-center">
            Время: с 10:00 до 18:00
          </p>
          <p class="mb-4 text-lg text-white text-center">
            Дата: 12 Октября, 2024
          </p>
        </div>
      </div>

      <div class="relative mx-auto text-center">
        <JoinButtons />
      </div>

    </div>
  </section>

  <!--  Thanks-->
  <section class="relative py-10 2xl:py-20 bg-sysconf-dark overflow-hidden border-t border-gray-800">
    <div class="relative container px-4 mx-auto">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-center text-5xl font-bold font-heading text-white">
          Спасибо
        </h2>
        <span>
          <p class="mb-4 text-lg text-white text-center">
            Спасибо всем, кто помогает делать Open SysConf.io.
          </p>
        </span>
        <div>
          <ul class="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
            <li v-for="(item) in users.thanks" :key="item" class="mr-4 mt-3">
              <a v-if="item.url == '#'" class="overline" :class="{ 'has-text-info': item.style}">{{ item.name }}</a>
              <a v-else :href="item.url" class="underline" :class="{ 'has-text-primary': item.style}" target="_blank">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!--  Footer-->
  <FooterComponent />
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
