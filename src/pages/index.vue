<template>
  <v-app>
    <v-main>
      <TheHeader />
      <v-container>Hello world</v-container>
    </v-main>
  </v-app>
</template>

<script lang="tsx">
import { defineComponent } from '@vue/composition-api';
import TheHeader from '@/components/the_header/TheHeader';

export default defineComponent({
  components: {
    TheHeader,
  },
});
</script>

<style lang="scss" scoped>
</style>
