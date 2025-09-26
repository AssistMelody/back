<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import marketDown from '../assets/test.md?raw'
import MarkdownRender from 'vue-renderer-markdown'

import { ref } from 'vue'
const content = ref('')

// Simulate streaming content
let index = 0
const interval = setInterval(() => {
  if (index < marketDown.length) {
    content.value += marketDown[index]
    index++
  } else {
    clearInterval(interval)
  }
}, 50)
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <MarkdownRender :content="marketDown" />
  </main>
</template>
