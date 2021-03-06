<template>
   <PageComponent>

      <template v-slot:header>
         <div class="flex items-center justify-between">
            <h1 class="text-3xl font-bold text-gray-900">
               {{ route.params.id ? model.title : 'Create a Survey' }}
            </h1>

            <button v-if="route.params.id"
                    type="button"
                    class="py-2 px-3 text-white bg-red-500 font-bold rounded-md hover:bg-red-600"
                    @click="deleteSurvey"
            >
               Delete Survey
            </button>
         </div>
      </template>

      <div v-if="surveyLoading" class="flex justify-center font-bold italic text-indigo-900">Loading Survey...</div>

      <form v-else @submit.prevent="save">
         <div class="shadow sm:rounded-md sm:overflow-hidden">

            <!-- Survey Field -->
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">

               <!-- Image -->
               <div>
                  <label class="block text-sm font-medium text-gray-700">
                     Image
                  </label>
                  <div class="mt-1 flex items-center">
                     <img
                        v-if="model.image_url"
                        :src="model.image_url"
                        :alt="model.title"
                        class="w-64 h-48 object-cover"
                     />
                     <span
                        v-else
                        class="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="h-[80%] w-[80%] text-gray-300"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                        >
                           <path
                              fill-rule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clip-rule="evenodd"
                           />
                        </svg>
                     </span>

                     <button
                        type="button"
                        class="relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md
                           shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none
                           focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                     >
                        <input
                           type="file"
                           @change="onImageChoose"
                           class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer"
                        />
                        Change
                     </button>

                  </div>
               </div>
               <!--/ Image -->

               <!-- Title -->
               <div>
                  <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                  <input
                     type="text"
                     name="title"
                     id="title"
                     v-model="model.title"
                     autocomplete="survey_title"
                     class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
               </div>
               <!--/ Title -->

               <!-- Description -->
               <div>
                  <label for="about" class="block text-sm font-medium text-gray-700">
                     Description
                  </label>
                  <div class="mt-1">
                     <textarea
                        id="description"
                        name="description"
                        rows="3"
                        v-model="model.description"
                        autocomplete="survey_description"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Describe your survey"
                     />
                  </div>
               </div>
               <!-- Description -->

               <!-- Expire Date -->
               <div>
                  <label for="expire_date" class="block text-sm font-medium text-gray-700">Expire Date</label>
                  <input
                     type="date"
                     name="expire_date"
                     id="expire_date"
                     v-model="model.expire_date"
                     class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
               </div>
               <!--/ Expire Date -->

               <!-- Status -->
               <div class="flex items-start">
                  <div class="flex items-center h-5">
                     <input
                        id="status"
                        name="status"
                        type="checkbox"
                        v-model="model.status"
                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                     />
                  </div>
                  <div class="ml-3 text-sm">
                     <label for="status" class="font-medium text-gray-700">Active</label>
                  </div>
               </div>
               <!--/ Status -->

            </div>
            <!--/ Survey Field -->

            <!-- Questions -->
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
               <h3 class="text-2xl pb-4 pt-2 font-semibold flex items-center justify-between">
                  Questions

                  <!-- Add new question -->
                  <button
                     type="button"
                     @click="addQuestion()"
                     class="flex items-center text-sm py-1 px-4 rounded-sm text-white bg-gray-600 hover:bg-gray-700"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                     >
                        <path
                           fill-rule="evenodd"
                           d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                           clip-rule="evenodd"
                        />
                     </svg>
                     Add Question
                  </button>
                  <!--/ Add new question -->
               </h3>

               <!-- Don't have questions -->
               <div v-if="!model.questions.length" class="text-center text-gray-600">
                  You don't have any questions created
               </div>
               <!--/ Don't have questions -->

               <!-- Interating questions -->
               <div v-for="(question, index) in model.questions" :key="question.id">

                  <!-- question change is a trigger what-(Que) it will be triggered on change events -->
                  <QuestionEditor
                     :question="question"
                     :index="index"
                     @change="questionChange"
                     @addQuestion="addQuestion"
                     @deleteQuestion="deleteQuestion"
                  />
               </div>
               <!--/ Interating questions -->

            </div>
            <!--/ Questions -->

            <!--/ Save Button -->
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
               <button type="submit"
                       class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Save
               </button>
            </div>
            <!--/ Save Button -->

         </div>
      </form>
   </PageComponent>
</template>

<script setup>
import {ref, watch, computed} from 'vue'
import {useStore} from 'vuex'
import {useRoute, useRouter} from 'vue-router'
import {v4 as uuidv4} from 'uuid'
import PageComponent from '../../../components/PageComponent.vue'
import QuestionEditor from '../components/QuestionEditor.vue'

const route = useRoute()
const router = useRouter()
const store = useStore()

// Create empty survey | use the (ref) here because he is instance reactive do vue - update in real time
let model = ref({
   title: '',
   status: false,
   description: null,
   image: null,
   image_url: null,
   expire_date: null,
   questions: [],
})

const surveyLoading = computed(() => store.state.survey.currentSurvey.loading)

// Watch to current survey data change and when this happens we update local model
watch(
   () => store.state.survey.currentSurvey.data,
   (newValue) => {
      model.value = {
         //Is used the JSON parse and stringify for not share the same instance of memory the newValue
         ...JSON.parse(JSON.stringify(newValue))
      }
   }
)

if (route.params.id) {
   store.dispatch('getSurvey', parseInt(route.params.id))
}

function onImageChoose(event) {
   const file = event.target.files[0]

   const reader = new FileReader()
   reader.onload = () => {
      // the field will be send on backend as base64 string and apply validations
      model.value.image = reader.result

      // the field to display here the image
      model.value.image_url = reader.result
   }
   reader.readAsDataURL(file)
}

function addQuestion(index) {
   const newQuestion = {
      id: uuidv4(),
      type: 'text',
      question: '',
      description: '',
      data: {}
   }

   //function splice - alter, reorder the content of array and too can remove items
   model.value.questions.splice(index, 0, newQuestion)
}

function deleteQuestion(question) {
   model.value.questions = model.value.questions.filter(
      (quest) => quest !== question
   )
}

function questionChange(question) {
   model.value.questions = model.value.questions.map((q) => {
      if (q.id === question.id) {
         return JSON.parse(JSON.stringify(question))
      }
      return q
   })
}

const saveSurvey = (survey) => store.dispatch('saveSurvey', survey)
const notify = (msg) => store.commit('SET_NOTIFY', msg)
async function save() {
   try {
      const response = await saveSurvey(model.value)

      if(route.params.id) {
         notify({message: 'Updated with Success!'})
      } else {
         notify({message: 'Created with Success!'})
      }

      router.push(
         {name: 'SurveysEdit', params: {id: response.data.id}}
      )
   } catch (e) {
      console.log('Error save survey: ', e)
   }
}

const destroySurvey = (id) => store.dispatch('deleteSurvey', id)
async function deleteSurvey() {
   try {
      if (confirm('Wish really delete this survey. This action can not be undone!')) {
         await destroySurvey(route.params.id)
         router.push({name: 'Surveys'})
      }
   } catch (e) {
      console.log('Error delete survey: ', e)
   }
}

</script>
