<template>
   <nav
      class="relative z-0 inline-flex justify-center rounded-md shadow-sm -space-x-px"
      aria-label="Pagination"
   >
      <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
      <a
         v-for="(link, index) of links"
         :key="index"
         href="#"
         @click.prevent="getForPage(link)"
         aria-current="page"
         class="relative inline-flex items-center px-4 py-2 border text-sm font-medium whitespace-nowrap"
         :class="[
              link.active
                ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
              index === 0 ? 'rounded-l-md bg-gray-100 text-gray-700' : '',
              index === links.length - 1 ? 'rounded-r-md' : '',
         ]"
         v-html="link.label"
      >
      </a>
   </nav>
</template>

<script setup>
import {useStore} from 'vuex'

const store = useStore()

defineProps({
   links: Array
})

function getForPage(link) {
   if (!link.url || link.active) {
      return
   }

   store.dispatch('getSurveys', {url: link.url})
}
</script>

