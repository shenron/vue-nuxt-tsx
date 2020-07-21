<template>
  <v-app>
    <v-main>
      <TheHeader />
      <v-container>Hello world</v-container>
      {{ amazingList }}
    </v-main>
  </v-app>
</template>

<script lang="ts">
import 'vue-apollo';
import https from 'https';
import { defineComponent, ref, useFetch } from 'nuxt-composition-api';
import { useQuery } from '@vue/apollo-composable';
import TheHeader from '@/components/the_header/TheHeader';
import { TestQuery } from './queries';

export default defineComponent({
  components: {
    TheHeader,
  },
  setup(props, context) {
    const amazingList = ref<Array<any>>([]);

    const { result } = useQuery(TestQuery);

    const nuxtContext: any = context;
    if (!nuxtContext.isServer) {
      console.log(window);
    }

    const getData = async () => new Promise<void>((resolve) => {
      https.get('https://reqres.in/api/users?page=2', (res) => {
        let body = '';
        res.on('data', (chunk) => {
          body += chunk;
        });

        res.on('end', () => {
          amazingList.value = JSON.parse(body).data;
          resolve();
        });
      });
    });

    useFetch(getData);

    return {
      result,
      amazingList,
    };
  },
  fetchOnServer: false,
});
</script>
