<script setup>
import { ref } from 'vue'
import { markdown } from '../stores/markdown'

defineEmits(['cursorChange']);

const markdownInput = ref(null);

function setCursorPosition() {
  if (textarea.value) {
    let position = textarea.value.selectionStart;
    emit('cursorChange', position)
  }
}
</script>

<template>
  <textarea
    ref="markdownInput"
    v-model="markdown"
    spellcheck="false"
    class="w-full h-full resize-none px-3 py-2 outline-none border-t border-gray-200"
    @input="setCursorPosition"
    @click="setCursorPosition"
  >
  </textarea>
</template>
