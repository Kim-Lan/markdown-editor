<script setup>
import { ref } from 'vue'
import { markdown } from '../stores/markdown'

const markdownInput = ref(null);
</script>

<template>
  <textarea
    ref="markdownInput"
    v-model="markdown"
    spellcheck="false"
    class="w-full h-full resize-none px-3 py-2 outline-none border-t border-gray-200"
  >
  </textarea>
</template>
