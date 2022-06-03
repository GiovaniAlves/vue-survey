<template>
   <PageComponent>
      <template v-slot:header>
         <h1 class="text-3xl font-bold text-gray-900 justify-start">Dashboard</h1>
      </template>
      <template v-slot:default>
         Reports goes here
      </template>
   </PageComponent>
</template>

<script setup>
import PageComponent from '../components/PageComponent.vue'

</script>
