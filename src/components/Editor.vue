<script setup>
import { ref } from 'vue'
import { markdown } from '../stores/markdown'
</script>

<template>
  <textarea
    id="editor"
    v-model="markdown"
    autofocus="true"
    class="w-full h-full resize-none px-3 py-2 outline-none border-t border-gray-200 dark:border-gray-500"
  >
  </textarea>
</template>
