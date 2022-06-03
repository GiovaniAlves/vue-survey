<template>
   <PageComponent>
      <template v-slot:header>
         <div class="flex justify-between items-center">
            <h1 class="text-3xl font-bold text-gray-900 justify-start">Surveys</h1>
            <router-link
               :to="{name: 'SurveyCreate'}"
               class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
            >
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 -mt-1 inline-block" viewBox="0 0 20 20"
                    fill="currentColor">
                  <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clip-rule="evenodd"/>
               </svg>
               Add new Survey
            </router-link>
         </div>
      </template>

      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
         <div
            v-for="survey in surveys"
            :key="survey.id"
            class="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]"
         >
            <img :src="survey.image" alt="" class="w-full h-48 object-cover">
            <h4 class="mt-4 text-lg font-bold">{{ survey.title }}</h4>
            <div v-html="survey.description" class="overflow-hidden flex-1"></div>
            <div class="flex justify-between items-center mt-3">
               <router-link
                  :to="{name: 'SurveysEdit', params: {id: survey.id}}"
                  class="flex py-2 px-4 border border-transparent text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                     focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" stroke-width="2">
                     <path stroke-linecap="round" stroke-linejoin="round"
                           d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                  </svg>
                  Edit
               </router-link>
               <button
                  v-if="survey.id"
                  type="submit"
                  @click="deleteSurvey(survey)"
                  class="h-8 w-8 flex items-center justify-center rounded-full border border-transparent text-sm text-red-500
                     focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
               >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" stroke-width="2">
                     <path stroke-linecap="round" stroke-linejoin="round"
                           d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
               </button>
            </div>
         </div>
      </div>

   </PageComponent>
</template>

<script setup>
import store from '../../../../../store'
import {computed} from 'vue'
import PageComponent from '../../../components/PageComponent.vue'

const surveys = computed(() => store.state.survey.surveys)

function deleteSurvey(survey) {
   if (confirm('Are you sure you want to delete this survey? Operation can\'t be undone.')){
      console.log(survey.id)
   }
}

</script>
