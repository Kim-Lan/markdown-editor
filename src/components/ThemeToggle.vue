<script setup>
import { useDark, useToggle } from '@vueuse/core'
import IconThemeLightDark from '~icons/mdi/theme-light-dark'

const isDark = useDark();
const toggleTheme = useToggle(isDark);
</script>

<template>
  <button
    title="Theme Toggle"
    class="hover:bg-gray-200 rounded"
    @click="toggleTheme()"
  >
    <icon-theme-light-dark />
  </button>
</template>
