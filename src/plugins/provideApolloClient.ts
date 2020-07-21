import { provide, reactive } from 'nuxt-composition-api';
import { Context, Plugin } from '@nuxt/types';
import { DefaultApolloClient } from '@vue/apollo-composable';

const provideApollo: Plugin = ({ app }: Context) => {
  app.setup = () => {
    // since plugin is eval'd after module app.apolloProvider will always be defined
    const clients = reactive(app.apolloProvider?.clients);
    provide(DefaultApolloClient, clients?.defaultClient);
    // not functionally important but req'd return type
    return { [DefaultApolloClient]: clients };
  };
};

export default provideApollo;
