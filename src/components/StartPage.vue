<script setup>
import StartLogoSlogan from './StartPageLogo.vue'
import StartItems from './StartPageItems.vue'
import WelcomeItem from "@/components/reusable/WelcomeItem.vue";
import ToolingIcon from "@/components/icons/IconTooling.vue";
import DocumentationIcon from "@/components/icons/IconDocumentation.vue";

</script>

<template>

  <section class="pb-20 bg-sysconf-dark" x-data="{ mobileNavOpen: false }">

    <div class="relative container px-4 pt-12 md:pt-20 mx-auto">

      <div class="flex flex-wrap -mx-4 -mb-4 md:mb-0">
        <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">

          <header>
            <img alt="Vue logo" class="logo" src="../assets/open-sysconf-logo-start-page.png" width="256" height="192" />

            <div class="wrapper">
              <StartLogoSlogan msg="Stay Positive!" />
            </div>
          </header>

          <div class="mt-3 p-10">
            <WelcomeItem>
              <template #icon>
                <i class="fa-solid fa-arrow-right"></i>
              </template>
              <template #heading>Open SysConf'25</template>

              Седьмая ежегодная конференция <router-link to="/2025">Welcome!</router-link>
            </WelcomeItem>

          </div>

        </div>


        <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">

          <main>
            <StartItems />
<!--            Breadcrumbs-->
<!--            <Breadcrumbs />-->
          </main>

        </div>
      </div>

    </div>
  </section>

  <!--  Footer-->
  <FooterComponent />


</template>

<script>
import Breadcrumbs from "@/components/reusable/breadcrumbs.vue";
import FooterComponent from "@/components/reusable/FooterComponent.vue";

export default {
  components: {
    Breadcrumbs,
    FooterComponent,
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    //padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
