<script setup>
import { ref } from 'vue'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import EditorControls from './components/EditorControls.vue'
import Editor from './components/Editor.vue'
import Preview from './components/Preview.vue'

const cursorPosition = ref(0);

function onCursorChange(position) {
  cursorPosition.value = position;
}
</script>

<template>
  <main>
    <editor-controls />
    <splitpanes class="default-theme !h-[calc(100vh-theme(spacing.10))]">
      <pane class="!bg-gray-100">
        <editor @cursor-change="onCursorChange" />
      </pane>
      <pane>
        <preview />
      </pane>
    </splitpanes>
  </main>
</template>

