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
import gql from 'graphql-tag';
import TheHeader from '@/components/the_header/TheHeader';

export default {
  name: 'Graphql',
  components: {
    TheHeader,
  },
  apollo: {
    homeOverview: {
      prefetch: true,
      query: gql` {
        homeOverview { totalVessels }
      }`,
    },
  },
};
</script>
