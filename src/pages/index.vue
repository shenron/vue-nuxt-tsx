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
import https from 'https';
import {
  defineComponent,
  useFetch,
  ref,
} from 'nuxt-composition-api';
import TheHeader from '@/components/the_header/TheHeader';

export default defineComponent({
  components: {
    TheHeader,
  },
  setup(props, context) {
    const amazingList = ref<Array<any>>([]);

    const nuxtContext: any = context;
    if (!nuxtContext.isServer) {
      console.log(window);
    }

    const getData = async () => new Promise((resolve) => {
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
      amazingList,
    };
  },
});
</script>
