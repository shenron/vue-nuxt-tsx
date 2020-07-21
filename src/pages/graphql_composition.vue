<template>
  <v-app>
    <v-main>
      <TheHeader />
      <v-container>Graphql Test</v-container>
      {{ result }}
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'nuxt-composition-api';
import TheHeader from '@/components/the_header/TheHeader';
import { useQuery } from '@vue/apollo-composable';
import { TestQuery } from '@/pages/queries';

export default defineComponent({
  components: {
    TheHeader,
  },
  setup() {
    const { result } = useQuery(TestQuery);

    return {
      result,
    };
  },
});
</script>
