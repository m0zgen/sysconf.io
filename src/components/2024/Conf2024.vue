<script setup>

</script>

<template>
<!--  Heading-->
  <section class="pb-20 bg-sysconf-dark" x-data="{ mobileNavOpen: false }">
    <nav class="relative">
      <div class="flex py-8 px-4 lg:px-8 justify-between items-center">
        <RouterLink class="text-2xl text-white font-bold" to="/">
          <img class="h-7" src="@/assets/open-sysconf-logo-start-page.png" alt="" width="auto">
        </RouterLink>
<!--        <div class="lg:hidden">-->
<!--          <button class="p-2" x-on:click="mobileNavOpen = !mobileNavOpen">-->
<!--            <svg class="w-10 h-3" width="39" height="13" viewbox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="39" height="2" rx="1" fill="#C4C4C4"></rect><rect x="19" y="11" width="20" height="2" rx="1" fill="#C4C4C4"></rect></svg>-->
<!--          </button>-->
<!--        </div>-->
        <div class="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <ul class="flex items-center text-white space-x-10">
            <li><a class="text-white font-bold text-lg" href="#">Главная</a></li>
            <span>
            <svg width="5" height="5" viewbox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle></svg>
          </span>
            <li><a class="text-white font-bold text-lg" href="#">Телеграм</a></li>
          </ul>
        </div>
      </div>
    </nav>
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
          </p>
          <a class="inline-block px-12 text-lg text-white font-bold bg-amber-600 hover:bg-amber-700 rounded-full transition duration-200"
             target="_blank"
             href="https://docs.google.com/forms/d/e/1FAIpQLScqfFY_Utmo0OA5UHZJ_bv2gIGViE3HvYR66og7trKf6EI-ig/viewform?usp=sf_link">
            Стань докладчиком
          </a>
          <a class="inline-block ml-3 px-12 text-lg text-white font-bold bg-amber-500 hover:bg-amber-700 rounded-full transition duration-200"
             target="_blank"
             href="https://docs.google.com/forms/d/e/1FAIpQLSdxsH2rgdLhRhmVbsmrcI-nVELh9HjqT9QPATddnG7MLZ1N4A/viewform?usp=sf_link">
            Стань участником
          </a>
        </div>
        <div class="w-full lg:w-1/2 px-4">
          <img class="w-full" src="@/assets/open-sysconf-logo-2024.png" alt="">
        </div>
      </div>

    </div>
    <div :class="{ 'hidden': !mobileNavOpen, 'block': mobileNavOpen }" class="fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50 hidden">
      <div x-on:click="mobileNavOpen = !mobileNavOpen" class="fixed inset-0 bg-gray-800 opacity-80"></div>
      <nav class="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
        <div>
          <ul>
            <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="#">Product</a></li>
            <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="#">Story</a></li>
            <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="#">Features</a></li>
            <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="#">Contact</a></li>
          </ul>
        </div>
        <div class="mt-auto px-10">
          <div class="pt-6"><a class="block mb-4 py-4 px-12 text-gray-800 text-center font-bold border border-gray-50 hover:border-gray-100 rounded-full" href="#">Sign in</a><a class="block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="#">Sign up</a></div>
          <p class="mt-6 mb-4 text-lg text-center">
            <span>2021 © Zospace. All rights reserved.</span>
          </p>
        </div>
      </nav>
    </div>
  </section>

<!--  People-->
  <section class="relative py-10 2xl:py-20 bg-sysconf-dark overflow-hidden">
    <div class="relative container px-4 mx-auto">
      <div class="max-w-4xl mx-auto">
        <h2 class="mb-24 text-center text-5xl font-bold font-heading text-white">
          Доклады
        </h2>
<!--        Row 1-->
        <div class="flex flex-wrap justify-center -mx-10 mb-20">
          <div class="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
            <div>
              <img class="mb-8 w-full h-112 lg:h-80 object-cover object-top"
                   src="@/assets/stub/hero-2024.webp" alt="">
              <h3 class="mb-2 text-3xl text-white font-bold font-heading">
                Алексей
              </h3>
              <p class="mb-4 text-lg text-white font-bold">
                Линукс админ, Red Hat архитектор
              </p>
              <p class="mb-4 text-lg text-white">
                Три системы, которые ты захочешь развернуть и настроить
              </p>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
            <div class="lg:mt-24">
              <img class="mb-8 w-full h-112 lg:h-80 object-cover object-top"
                   src="@/assets/stub/hero-2024.webp" alt="">
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
              <img class="mb-8 w-full h-112 lg:h-80 object-cover object-top"
                   src="@/assets/stub/hero-2024.webp" alt="">
              <h3 class="mb-2 text-3xl text-white font-bold font-heading">
                Татьяна
              </h3>
              <p class="mb-4 text-lg text-white font-bold">
                ex-пентестер, application security engineer
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
              <img class="mb-8 w-full h-112 lg:h-80 object-cover object-top"
                   src="@/assets/stub/hero-2024.webp" alt="">
              <h3 class="mb-2 text-3xl text-white font-bold font-heading">
                Expert Name
              </h3>
              <p class="mb-4 text-lg text-white font-bold">
                Unit name
              </p>
              <p class="mb-4 text-lg text-white">
                Will soon.
              </p>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
            <div class="lg:mt-24">
              <img class="mb-8 w-full h-112 lg:h-80 object-cover object-top"
                   src="@/assets/stub/hero-2024.webp" alt="">
              <h3 class="mb-2 text-3xl text-white font-bold font-heading">
                Expert Name
              </h3>
              <p class="mb-4 text-lg text-white font-bold">
                Unit name
              </p>
              <p class="mb-4 text-lg text-white">
                Will soon.
              </p>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-10">
            <div>
              <img class="mb-8 w-full h-112 lg:h-80 object-cover object-top"
                   src="@/assets/stub/hero-2024.webp" alt="">
              <h3 class="mb-2 text-3xl text-white font-bold font-heading">
                Женя
              </h3>
              <p class="mb-4 text-lg text-white font-bold">
                ДНК Архитектор
              </p>
              <p class="mb-4 text-lg text-white">
                Синтез молекулярных единиц в микросервисах
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<!--  Place-->
  <section class="relative py-10 2xl:py-20 bg-sysconf-dark overflow-hidden">
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
            Место: г. Алматы, ул. Байзакова, 280
          </p>
          <p class="mb-4 text-lg text-white text-center">
            Время: Октябрь, 2024
          </p>
        </div>
      </div>
    </div>
  </section>

<!--  Footer-->
  <section class="py-20 2xl:py-40 bg-sysconf-dark">
    <p class="text-center text-lg text-white pt-12 px-4 border-t border-gray-500">
      <span>© 2024 Open SysConf.io </span>
    </p>
  </section>
</template>

<style scoped>

</style>
