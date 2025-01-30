<script setup>
import { ref } from 'vue'
import { markdown } from '../stores/markdown'

const emit = defineEmits(['cursorChange']);

const markdownInput = ref(null);

function setCursorPosition() {
  if (markdownInput.value) {
    let position = markdownInput.value.selectionStart;
    emit('cursorChange', position);
  }
}
</script>

<template>
  <textarea
    ref="markdownInput"
    v-model="markdown"
    id="editor"
    autofocus="true"
    class="w-full h-full resize-none px-3 py-2 outline-none border-t border-gray-200"
    @input="setCursorPosition"
    @click="setCursorPosition"
  >
  </textarea>
</template>
