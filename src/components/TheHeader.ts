import { CreateElement, VNode } from 'vue';
import { defineComponent } from '@vue/composition-api'
import useRender from "./useRender";
import useTheHeader from './useTheHeader';

export type TheHeader = ReturnType<typeof useTheHeader>;

export default defineComponent({
  setup() {
    return useTheHeader();
  },
  render(h: CreateElement): VNode {
    return useRender.call(this, h, this);
  }
})

