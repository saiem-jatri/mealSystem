<script setup>
import { useRoute } from 'vue-router'
import { computed,watch } from 'vue'
import store from '../store/index.js'
import { ref } from 'vue'
import TabMembers from '../components/TabMembers.vue'
import MealCount from '../components/MealCount.vue'
const allMeal = computed(()=>{
  return store.getters['json/getAllMeal']
})
const route = useRoute(); 
const filteredMeal = allMeal.value[0]?.filter(meals => meals.id == route.params.id)

const tabValue = ref('')
const allButtons = ref(['members','meals','expense','deposite','summary'])
const activeTab = ref('')
const setActiveTab = ((index)=>{
    activeTab.value = index
})


watch(
  () => route.query,
  () => {
    // prevent triggering on page leave, which clears the query
    if (route.name !== 'invoices') return

    selectedAddresses.value = selectedAddressesQuery.value
    selectedStatuses.value = selectedStatusesQuery.value
    selectedSortOrder.value = selectedSortOrderQuery.value
  },
  { deep: true }
)
</script>
<template>
    <div class="px-96 mt-4">
        <div class="bg-gray-200 py-2 px-2 text-xl font-semibold text-black flex justify-between items-center rounded-md">
            <p>Month History of {{ filteredMeal[0].month }}</p>
          <router-link to="/meal"  class="bg-blue-700 text-white px-2 py-1 rounded-md text-center">Back</router-link>
        </div>

        <div class="flex gap-x-3 items-center w-full border border-gray-200">
            <button :class="activeTab === index ? 'bg-blue-700 text-white':'' " v-for="(button, index) in allButtons" :key="index"  class="border border-gray-200 px-2 py-1" @click="setActiveTab(index)">{{ button }}</button>

        </div>
        

            <div v-if="activeTab == 0">
                <div>
                    <TabMembers/>
                </div>
            </div>
            <div v-else-if="activeTab == 1">
                <div>
                   <MealCount/>
                </div>
            </div>
            <div v-if="activeTab == 2">
                <div>
                    Mess expense
                </div>
            </div>
            <div v-if="activeTab == 3">
                <div>
                    Mess deposite
                </div>
            </div>

            <div v-if="activeTab == 4">
                <div>
                    Mess summary
                </div>
            </div>
        </div>

</template>