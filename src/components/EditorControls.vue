<script setup>
const props = defineProps({
  cursorPosition: Number,
});

function onButtonClick() {
  console.log(`current cursor position: ${props.cursorPosition}`)
}
</script>

<template>
  <div class="p-2">
    <button @click="onButtonClick">Button</button>
  </div>
</template>
