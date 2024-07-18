<script setup>

</script>

<template>
  <section class="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
    <div class="relative container px-4 mx-auto">
      <div class="max-w-2xl mb-16 md:mb-24 mx-auto text-center">
        <span class="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600">
          Цели и Форматы общения
        </span>
        <h2 class="mt-7 text-6xl 2xl:text-7xl text-white font-bold font-heading">Об Open SysConf.io</h2>
      </div>
      <div class="max-w-xl mx-auto text-center">
        <p class="mb-14 text-3xl text-gray-200">
          Open SysConf.io - это сообщество, которое объединяет людей, которые хотят общаться и делиться своими знаниями и опытом.
        </p>
        <div class="inline-flex pt-14 mb-14 items-center border-t border-gray-500">
          <img class="mr-8 w-20 lg:w-24 h-20 lg:h-24 rounded-full"
               src="@/assets/yg-logo.jpg" alt="">
          <div class="text-left">
            <h4 class="mb-1 text-2xl font-bold text-gray-50">Yevgeniy Goncharov</h4>
            <p class="text-white">August, 2019</p>
          </div>
        </div>
        <p class="mb-6 text-left text-xl text-gray-200">
          Open SysConf - подразумевает общение, передачу информации между специалистами ИТ и смежных областей.
        </p>
        <p class="mb-6 text-left text-xl text-gray-200">
          Встречи могут происходить в виде онлайн и очных встреч/конференций, с целью обмена информацией, знаниями из своих областей.
        </p>

        <h2 class="mb-6 text-left text-4xl font-extrabold text-gray-100">
          Цели
        </h2>
        <ul class="text-left text-xl list-disc list-inside text-gray-200">
          <li>
            Повышение уровня знаний, обмен опытом, awareness на тему ИТ и смежных областей
          </li>
          <li>
            Обмен информацией, знаниями из своих областей
          </li>
        </ul>

        <h2 class="mt-6 mb-6 text-left text-4xl font-extrabold text-gray-100">
          Формат общения
        </h2>

        <ul class="text-left text-xl list-disc list-inside text-gray-200">
          <li>Обмен информацией производится путем визуального, аудиального общения. Как правило аудитория разделяется
            на несколько категорий - докладчики, слушатели, модераторы
          </li>
          <li>Материалы предоставляются в свободной форме, на родном языке докладчика.</li>
          <li>Приветствуется использование презентаций, демонстрационных материалов.</li>
          <li>Длительность доклада 15-45 минут</li>
          <li>Место и формат встречи может выбираться опционально, но с желательным уклоном на то, чтобы слушатели могли
            воспринимать излагаемую докладчиками информацию беспрепятственно
          </li>
          <li>Формат встречи может быть онлайн, очным или комбинированным (удаленно/оффлайн)</li>
          <li>Обмен опытом может происходить путем диалога между участниками, проведением опросов или тематических
            викторин
          </li>
          <li>Модератор встречи в праве прервать спич докладчика или монолог из зала</li>
          <li>Во время участия, регистрации, общения в рамках активностей SysConf, необходимо ознакомиться, согласиться
            и придерживаться правил общения и поведения из общего свода правил  - <a
                href="https://github.com/m0zgen/forum-chat-rules" rel="nofollow">Sys-Admin Community</a>
          </li>
        </ul>

        <h2 class="mt-6 mb-6 text-left text-4xl font-extrabold text-gray-100">
          Формат презентации
        </h2>

        <ul class="text-left text-xl list-disc list-inside text-gray-200">
          <li>На одном из слайдов присутствует лого Open SysConf</li>
          <li>Автор в праве указывать информацию о себе и о своей компании или компании где осуществляет трудовую
            деятельность
          </li>
          <li>Презентация может быть представлена в любом удобочитаемом формате (pdf, ppt(x), web, txt и тп)</li>
          <li>Презентация должна быть представлена, как минимум за один день до начала мероприятия</li>
        </ul>

        <h2 class="mt-6 mb-6 text-left text-4xl font-extrabold text-gray-100">
          Использование материалов Open SysConf третьими лицами
        </h2>

        <ul class="text-left text-xl list-disc list-inside text-gray-200">
          <li>Публичное предоставление/Публикация докладов осуществляется по желанию докладчика</li>
          <li>При использовании материалов Open SysConf ссылка на Open SysConf (sysconf.io) или атрибутика Open SysConf
            или на автора доклада - обязательна
          </li>
        </ul>

        <RouterLink to="/">
          <a class="mt-6 inline-block px-12 text-lg text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="#">На главную</a>
        </RouterLink>

      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
