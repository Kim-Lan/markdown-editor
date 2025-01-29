<script setup>
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
      <pane>
        <editor />
      </pane>
      <pane>
        <preview />
      </pane>
    </splitpanes>

  </main>
</template>

