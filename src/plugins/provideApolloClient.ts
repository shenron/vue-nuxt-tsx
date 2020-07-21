import { provide } from 'nuxt-composition-api';
import { DefaultApolloClient } from '@vue/apollo-composable';

export default ({ app }) => {
  app.setup = () => {
    const apolloClient = app.apolloProvider.defaultClient;

    provide(DefaultApolloClient, apolloClient);
  };
};
