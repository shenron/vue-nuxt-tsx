import { computed } from '@vue/composition-api';

export default function () {
  const items = computed<Array<{ title: string }>>(() => ([
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
  ]));

  return {
    items,
  };
}
