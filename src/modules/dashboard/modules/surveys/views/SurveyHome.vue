<template>
   <PageComponent>
      <template v-slot:header>
         <div class="flex justify-between items-center">
            <h1 class="text-3xl font-bold text-gray-900 justify-start">Surveys</h1>
            <router-link
               :to="{name: 'SurveyCreate'}"
               class="py-2 px-3 text-white bg-emerald-500 font-bold rounded-md hover:bg-emerald-600"
            >
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 -mt-1 inline-block" viewBox="0 0 20 20"
                    fill="currentColor">
                  <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clip-rule="evenodd"/>
               </svg>
               Add New Survey
            </router-link>
         </div>
      </template>

      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
         <SurveyListItem v-for="survey in surveys" :key="survey.id" :survey="survey" @delete="deleteSurvey" />
      </div>

   </PageComponent>
</template>

<script setup>
import {useStore} from 'vuex'
import {computed} from 'vue'
import PageComponent from '../../../components/PageComponent.vue'
import SurveyListItem from '../components/SurveyListItem.vue'

const store = useStore()

store.dispatch('getSurveys')
const surveys = computed(() => store.state.survey.surveys.data)

const destroySurvey = (id) => store.dispatch('deleteSurvey', id)
async function deleteSurvey(id) {
   if (confirm('Are you sure you want to delete this survey? Operation can not be undone.')){
      await destroySurvey(id)
      await store.dispatch('getSurveys')
   }
}

</script>
