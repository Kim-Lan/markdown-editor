<script setup>
import markdownit from 'markdown-it'
import { markdown } from '../stores/markdown'

const md = markdownit();
const markdownRender = md.render(markdown.value);
</script>

<template>
  <div
    v-html="markdownRender"
    class="prose px-3 py-2"
  >
  </div>
</template>
