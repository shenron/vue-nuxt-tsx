<template>
  <v-app>
    <v-main>
      <TheHeader />
      <v-container>Graphql Test</v-container>
      {{ homeOverview.totalVessels }}
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from '@/components/the_header/TheHeader';
import { TestQuery } from './queries';

export default {
  name: 'Graphql',
  components: {
    TheHeader,
  },
  apollo: {
    homeOverview: {
      prefetch: true,
      query: TestQuery,
    },
  },
};
</script>
