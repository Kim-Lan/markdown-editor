<script setup>
import markdownit from 'markdown-it'
import markdownitAnchor from 'markdown-it-anchor'
import markdownitDefList from 'markdown-it-deflist'
import { full as markdownitEmoji } from 'markdown-it-emoji'
import markdownitFootnote from 'markdown-it-footnote'
import markdownitIns from 'markdown-it-ins'
import markdownitSub from 'markdown-it-sub'
import markdownitSup from 'markdown-it-sup'
import markdownitTaskLists from 'markdown-it-task-lists'
import { markdown } from '../stores/markdown'

const md = markdownit()
  .use(markdownitAnchor)
  .use(markdownitDefList)
  .use(markdownitEmoji)
  .use(markdownitFootnote)
  .use(markdownitIns)
  .use(markdownitSub)
  .use(markdownitSup)
  .use(markdownitTaskLists);
</script>

<template>
  <div
    v-html="md.render(markdown)"
    class="prose dark:prose-invert max-w-none h-full px-3 py-2 overflow-y-scroll border-t border-gray-200 dark:border-gray-500"
  >
  </div>
</template>
