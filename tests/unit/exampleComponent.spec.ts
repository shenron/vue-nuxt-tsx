import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import HelloWorld from '@/components/the_header/TheHeader';
import Vuetify from 'vuetify';

Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.use(Vuetify);

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Title';
    const wrapper = shallowMount(HelloWorld, {
      localVue,
    });
    expect(wrapper.find('v-toolbar-title-stub').text()).toMatch(msg);
  });
});
