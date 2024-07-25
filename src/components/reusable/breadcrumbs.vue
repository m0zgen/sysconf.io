<template>
  <p>Ты находишься на странице:
    <strong v-if="$route.fullPath === '/'">Главная</strong>
  </p>
</template>

