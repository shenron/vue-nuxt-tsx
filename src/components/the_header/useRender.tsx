import { CreateElement, VNode } from 'vue';

export default function (h: CreateElement, context: any): VNode {
  const { items } = context;

  return (
    <v-app-bar dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        bottom
        left
        scopedSlots={{
          activator: ({ on, attrs }) => (
            <v-btn
              icon
              color="yellow"
              attrs={attrs}
              on={on}
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          ),
          default: () => (
            <v-list>
              {items.map((item, i) => (
                <v-list-item key={i}>
                  <v-list-item-title>{item.title}</v-list-item-title>
                </v-list-item>
              ))}
            </v-list>
          ),
        }}
      />
    </v-app-bar>
  );
}
