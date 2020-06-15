<template>
  <section class="container">
    <div>
      <TheHeader />
    </div>
  </section>
</template>

<script lang="tsx">
import { defineComponent } from '@vue/composition-api';
import TheHeader from '@/components/TheHeader'

export default defineComponent({
  components: {
    TheHeader,
  },
})
</script>
