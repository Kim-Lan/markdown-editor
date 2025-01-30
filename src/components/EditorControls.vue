<script setup>
import { ref } from 'vue'
import { markdown } from '../stores/markdown'
import { surroundSelection, addTag } from '../utils/utils'
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

function surroundWith(tag) {
  const editor = document.getElementById('editor');
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const scroll = editor.scrollTop;
  markdown.value = surroundSelection(
    markdown.value,
    start,
    end,
    tag
  );
  editor.focus();
  setTimeout(() => {
    editor.setSelectionRange(end + 2 * tag.length, end + 2 * tag.length);
    editor.scrollTop = scroll;
  });
}

function add(tag) {
  const editor = document.getElementById('editor');
  const start = editor.selectionStart;
  const scroll = editor.scrollTop;
  markdown.value = addTag(
    markdown.value,
    start,
    tag
  );
  editor.focus();
  setTimeout(() => {
    editor.setSelectionRange(start, start);
    editor.scrollTop = scroll;
  });
}

const openFile = ref(null);

function onOpenButtonClick() {
  openFile.value.click();
}

function onOpenFileChange() {
  const files = openFile.value.files;
  if (files.length === 0) return;

  const file = files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    const file = e.target.result;
    const lines = file.split(/\r\n|\n/);
    markdown.value = lines.join('\n');
  }

  reader.onerror = (e) => alert(e.target.error.name);

  reader.readAsText(file);
}

function onSaveButtonClick() {
  const blob = new Blob([markdown.value], { type: "text/plain" });
  const filename = "markdown.md";
  const url = window.URL.createObjectURL(blob);

  const downloadLink = document.createElement('a');
  downloadLink.download = filename;
  downloadLink.innerHTML = "Download File"
  downloadLink.href = url;
  downloadLink.onclick = destroyClickedElement;
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);

  downloadLink.click();
}

function destroyClickedElement(event) {
  document.body.removeChild(event.target);
}
</script>

<template>
  <div class="h-10 py-2 flex overflow-x-scroll md:overflow-auto align-center justify-between text-gray-600">
    <div class="flex">
      <div class="flex gap-2 px-2 border-r border-gray-200">
        <button
          title="Bold"
          class="hover:bg-gray-200 rounded"
          @click="surroundWith('**')"
        >
          <icon-format-bold />
        </button>
        <button
          title="Italics"
          class=" hover:bg-gray-200 rounded"
          @click="surroundWith('*')"
        >
          <icon-format-italic />
        </button>
        <button
          title="Underline"
          class=" hover:bg-gray-200 rounded"
          @click="surroundWith('++')"
        >
          <icon-format-underline />
        </button>
        <button
          title="Strikethrough"
          class=" hover:bg-gray-200 rounded"
          @click="surroundWith('~~')"
        >
          <icon-format-strikethrough />
        </button>
      </div>
      
      <div class="flex gap-2 px-2 border-r border-gray-200">
        <button
          title="Header 1"
          class=" hover:bg-gray-200 rounded"
          @click="add('#')"
        >
          <icon-format-header-1 />
        </button>
        <button
          title="Header 2"
          class=" hover:bg-gray-200 rounded"
          @click="add('##')"
        >
          <icon-format-header-2 />
        </button>
        <button
          title="Header 3"
          class=" hover:bg-gray-200 rounded"
          @click="add('###')"
        >
          <icon-format-header-3 />
        </button>
        <button
          title="Header 4"
          class=" hover:bg-gray-200 rounded"
          @click="add('####')"
        >
          <icon-format-header-4 />
        </button>
        <button
          title="Header 5"
          class=" hover:bg-gray-200 rounded"
          @click="add('#####')"
        >
          <icon-format-header-5 />
        </button>
        <button
          title="Header 6"
          class=" hover:bg-gray-200 rounded"
          @click="add('######')"
        >
          <icon-format-header-6 />
        </button>
      </div>
      
      <div class="flex gap-2 px-2 border-r border-gray-200">
        <button
          title="Link"
          class=" hover:bg-gray-200 rounded"
          @click="add('[title](https://www.example.com)')"
        >
          <icon-link />
        </button>
        <button
          title="Image"
          class=" hover:bg-gray-200 rounded"
          @click="add('![alt text](image.jpg)')"
        >
          <icon-image />
        </button>
      </div>

      <div class="flex gap-2 px-2 border-r border-gray-200">
        <button
          title="Bulleted List"
          class=" hover:bg-gray-200 rounded"
          @click="add('-')"
        >
          <icon-format-list-bulleted />
        </button>
        <button
          title="Numbered List"
          class=" hover:bg-gray-200 rounded"
          @click="add('1.')"
        >
          <icon-format-list-numbered />
        </button>
        <button
          title="Checkbox List"
          class=" hover:bg-gray-200 rounded"
          @click="add('- [ ]')"
        >
          <icon-format-list-checkbox />
        </button>
      </div>
      
      <div class="flex gap-2 px-2 border-r border-gray-200">
        <button
          title="Block Quote"
          class=" hover:bg-gray-200 rounded"
          @click="add('>')"
        >
          <icon-format-quote />
        </button>
        <button
          title="Code Block"
          class=" hover:bg-gray-200 rounded"
          @click="surroundWith('```')"
        >
          <icon-code />
        </button>
      </div>
    </div>

    <div class="flex gap-2 px-2">
      <input
        ref="openFile"
        type="file"
        class="hidden"
        @change="onOpenFileChange"
      />
      <label
        title="Open"
        class="hover:bg-gray-200 rounded"
        @click="onOpenButtonClick"
      >
        <icon-folder />
      </label>
      <button
        title="Save"
        class="hover:bg-gray-200 rounded"
        @click="onSaveButtonClick"
      >
        <icon-content-save />
      </button>
    </div>
  </div>
</template>
