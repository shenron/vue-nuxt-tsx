import { CreateElement, VNode } from 'vue';
import {
  VAppBarNavIcon,
  VToolbarTitle,
  VSpacer,
  VBtn,
  VMenu,
  VAppBar,
  VIcon,
  VList,
  VListItemTitle,
  VListItem,
} from 'vuetify/lib';

export default function (h: CreateElement, context: any): VNode {
  const { items } = context;

  return (
    <VAppBar dark>
      <VAppBarNavIcon />

      <VToolbarTitle>Title</VToolbarTitle>

      <VSpacer></VSpacer>

      <VBtn icon>
        <VIcon>mdi-magnify</VIcon>
      </VBtn>

      <VMenu
        bottom
        left
        scopedSlots={{
          activator: ({ on, attrs }) => (
            <VBtn
              icon
              color="yellow"
              attrs={attrs}
              on={on}
            >
              <VIcon>mdi-dots-vertical</VIcon>
            </VBtn>
          ),
          default: () => (
            <VList>
              {items.map((item, i) => (
                <VListItem key={i}>
                  <VListItemTitle>{item.title}</VListItemTitle>
                </VListItem>
              ))}
            </VList>
          ),
        }}
      />
    </VAppBar>
  );
}
