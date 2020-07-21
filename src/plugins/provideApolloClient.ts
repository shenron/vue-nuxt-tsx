import { provide, onGlobalSetup } from 'nuxt-composition-api';
import { DefaultApolloClient } from '@vue/apollo-composable';

export default ({ app }) => {
  onGlobalSetup(() => {
    const apolloClient = app.apolloProvider.defaultClient;

    provide(DefaultApolloClient, apolloClient);
  });
};
