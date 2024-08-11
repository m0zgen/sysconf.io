<script setup>
import WelcomeItem from './reusable/WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
    <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Экосистема</template>

    Официальный чат:
      <a href="https://t.me/OpenSysConf" target="_blank" rel="noopener">Open SysConf</a>
      <br>
      Официальный канал:
      <a href="https://t.me/sysadm_in_channel" target="_blank" rel="noopener">Sys-Admin & InfoSec Channel</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>О конференции</template>

    Open SysConf - подразумевает общение, передачу информации между специалистами ИТ и смежных областей.
    <RouterLink to="/about">Подробнее</RouterLink>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Предыдущие годы</template>

    Каждый год мы делаем конференцию сайты предыдущих встреч:
    <a href="https://23.sysconf.io/" target="_blank">SysConf'23</a>,
    <a href="https://22.sysconf.io/" target="_blank">SysConf'22</a>,
    <a href="https://m0zgen.github.io/sysconf-nuxt-site/sysconf-21" target="_blank">SysConf'21</a>,
    <a href="https://19.sysconf.io/" target="_blank">SysConf'19</a>

  </WelcomeItem>
</template>
