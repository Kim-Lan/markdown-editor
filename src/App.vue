<script setup>
import { ref } from 'vue'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import EditorControls from './components/EditorControls.vue'
import Editor from './components/Editor.vue'
import Preview from './components/Preview.vue'

</script>

<template>
  <main>
    <editor-controls />
    <splitpanes class="default-theme !h-[calc(100vh-theme(spacing.10))]">
      <pane class="!bg-gray-100 dark:!bg-gray-900 dark:text-gray-200">
        <editor />
      </pane>
      <pane class="!bg-white dark:!bg-gray-800">
        <preview />
      </pane>
    </splitpanes>
  </main>
</template>

