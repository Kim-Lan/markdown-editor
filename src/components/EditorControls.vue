<script setup>
import IconFormatBold from '~icons/mdi/format-bold'
import IconFormatItalic from '~icons/mdi/format-italic'
import IconFormatUnderline from '~icons/mdi/format-underline'
import IconFormatStrikethrough from '~icons/mdi/format-strikethrough-variant'
import IconFormatHeader1 from '~icons/mdi/format-header-1'
import IconFormatHeader2 from '~icons/mdi/format-header-2'
import IconFormatHeader3 from '~icons/mdi/format-header-3'
import IconFormatHeader4 from '~icons/mdi/format-header-4'
import IconFormatHeader5 from '~icons/mdi/format-header-5'
import IconFormatHeader6 from '~icons/mdi/format-header-6'
import IconLink from '~icons/mdi/link'
import IconImage from '~icons/mdi/image'
import IconFormatListBulleted from '~icons/mdi/format-list-bulleted'
import IconFormatListNumbered from '~icons/mdi/format-list-numbered'
import IconFormatListCheckbox from '~icons/mdi/format-list-checkbox'
import IconFormatQuote from '~icons/mdi/format-quote-open'
import IconCode from '~icons/mdi/code'
import IconTable from '~icons/mdi/table'
import IconContentSave from '~icons/mdi/content-save'
import IconFolder from '~icons/mdi/folder'

const props = defineProps({
  cursorPosition: Number,
});

function onButtonClick() {
  console.log(`current cursor position: ${props.cursorPosition}`)
}
</script>

<template>
  <div class="flex flex-wrap align-center justify-between p-2 text-gray-600">
    <div class="flex">
      <div class="flex gap-2 px-2 border-r border-gray-200">
        <button
          class="hover:bg-gray-200 rounded"
          @click="onButtonClick"
        >
          <icon-format-bold />
        </button>
        <button
          class=" hover:bg-gray-200 rounded"
          @click="onButtonClick"
        >
          <icon-format-italic />
        </button>
        <button
          class=" hover:bg-gray-200 rounded"
          @click="onButtonClick"
        >
          <icon-format-underline />
        </button>
        <button
          class=" hover:bg-gray-200 rounded"
          @click="onButtonClick"
        >
          <icon-format-strikethrough />
        </button>
      </div>
      
      <div class="flex gap-2 px-2 border-r border-gray-200">
        <button
          class=" hover:bg-gray-200 rounded"
          @click="onButtonClick"
        >
          <icon-format-header-1 />
        </button>
        <button
          class=" hover:bg-gray-200 rounded"
          @click="onButtonClick"
        >
          <icon-format-header-2 />
        </button>
        <button
          class=" hover:bg-gray-200 rounded"
          @click="onButtonClick"
        >
          <icon-format-header-3 />
        </button>
        <button
          class=" hover:bg-gray-200 rounded"
          @click="onButtonClick"
        >
          <icon-format-header-4 />
        </button>
        <button
          class=" hover:bg-gray-200 rounded"
          @click="onButtonClick"
        >
          <icon-format-header-5 />
        </button>
        <button
          class=" hover:bg-gray-200 rounded"
          @click="onButtonClick"
        >
          <icon-format-header-6 />
        </button>
      </div>
      
      <div class="flex gap-2 px-2 border-r border-gray-200">
        <button
          class=" hover:bg-gray-200 rounded"
          @click="onButtonClick"
        >
          <icon-link />
        </button>
        <button
          class=" hover:bg-gray-200 rounded"
          @click="onButtonClick"
        >
          <icon-image />
        </button>
      </div>

      <div class="flex gap-2 px-2 border-r border-gray-200">
        <button
          class=" hover:bg-gray-200 rounded"
          @click="onButtonClick"
        >
          <icon-format-list-bulleted />
        </button>
        <button
          class=" hover:bg-gray-200 rounded"
          @click="onButtonClick"
        >
          <icon-format-list-numbered />
        </button>
        <button
          class=" hover:bg-gray-200 rounded"
          @click="onButtonClick"
        >
          <icon-format-list-checkbox />
        </button>
      </div>
      
      <div class="flex gap-2 px-2 border-r border-gray-200">
        <button
          class=" hover:bg-gray-200 rounded"
          @click="onButtonClick"
        >
          <icon-format-quote />
        </button>
        <button
          class=" hover:bg-gray-200 rounded"
          @click="onButtonClick"
        >
          <icon-code />
        </button>
        <button
          class=" hover:bg-gray-200 rounded"
          @click="onButtonClick"
        >
          <icon-table />
        </button>
      </div>
    </div>

    <div class="flex gap-2 px-2">
      <button
        class="hover:bg-gray-200 rounded"
        @click="onOpenButtonClick"
      >
        <icon-folder />
      </button>
      <button
        class="hover:bg-gray-200 rounded"
        @click="onSaveButtonClick"
      >
        <icon-content-save />
      </button>
    </div>
  </div>
</template>
