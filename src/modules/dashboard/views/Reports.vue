<template>
   <PageComponent>
      <template v-slot:header>
         <h1 class="text-3xl font-bold text-gray-900 justify-start">Dashboard</h1>
      </template>
      <template v-slot:default>
         <div v-if="loadingReports" class="flex justify-center font-bold italic text-indigo-900">Loading...</div>

         <div
            v-else
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-700"
         >

            <ReportCard class="order-1 lg:order-2" style="animation-delay: 0.1s">
               <template v-slot:title>Total Surveys</template>
               <div
                  class="text-8xl pb-4 font-semibold flex-1 flex items-center justify-center"
               >
                  {{ report.totalSurveys }}
               </div>
            </ReportCard>

            <ReportCard class="order-2 lg:order-4" style="animation-delay: 0.2s">
               <template v-slot:title>Total Answers</template>
               <div
                  class="text-8xl pb-4 font-semibold flex-1 flex items-center justify-center"
               >
                  {{ report.totalAnswers }}
               </div>
            </ReportCard>

            <ReportCard
               class="order-3 lg:order-1 row-span-2"
               style="animation-delay: 0.2s"
            >
               <template v-slot:title>Latest Survey</template>
               <div v-if="report.latestSurvey">
                  <img
                     :src="report.latestSurvey.image_url"
                     class="w-[240px] mx-auto"
                     alt=""
                  />
                  <h3 class="font-bold text-xl mb-3">{{ report.latestSurvey.title }}</h3>
                  <div class="flex justify-between text-sm mb-1">
                     <div>Create Date:</div>
                     <div>{{ report.latestSurvey.created_at }}</div>
                  </div>
                  <div class="flex justify-between text-sm mb-1">
                     <div>Expire Date:</div>
                     <div>{{ report.latestSurvey.expire_date }}</div>
                  </div>
                  <div class="flex justify-between text-sm mb-1">
                     <div>Status:</div>
                     <div>{{ report.latestSurvey.status ? "Active" : "Draft" }}</div>
                  </div>
                  <div class="flex justify-between text-sm mb-1">
                     <div>Questions:</div>
                     <div>{{ report.latestSurvey.questions }}</div>
                  </div>
                  <div class="flex justify-between text-sm mb-3">
                     <div>Answers:</div>
                     <div>{{ report.latestSurvey.answers }}</div>
                  </div>
                  <div class="flex justify-between">

                  </div>
               </div>
               <div v-else class="text-gray-600 text-center py-16">
                  Your don't have surveys yet
               </div>
            </ReportCard>

            <ReportCard class="order-4 lg:order-3 row-span-2" style="animation-delay: 0.3s">
               <template v-slot:title>
                  <div class="flex justify-between items-center mb-3 px-2">
                     <h3 class="text-2xl font-semibold">Latest 5 Answers</h3>
                  </div>
               </template>

               <div v-if="report.latestFiveAnswers.length" class="text-left">
                  <a
                     href="#"
                     v-for="answer of report.latestFiveAnswers"
                     :key="answer.id"
                     class="block p-2 hover:bg-gray-100/90"
                  >
                     <div class="font-semibold">{{ answer.survey.title }}</div>
                     <small>
                        Answer Made at:
                        <i class="font-semibold">{{ answer.end_date }}</i>
                     </small>
                  </a>
               </div>
               <div v-else class="text-gray-600 text-center py-16">
                  Your don't have answers yet
               </div>
            </ReportCard>

         </div>
      </template>
   </PageComponent>
</template>

<script setup>
import {useStore} from 'vuex'
import {computed} from 'vue'
import PageComponent from '../components/PageComponent.vue'
import ReportCard from '../components/ReportCard.vue'
const store = useStore()

store.dispatch('getReports')

const loadingReports = computed(() => store.state.report.reports.loading)
const report = computed(() => store.state.report.reports.data)

</script>
