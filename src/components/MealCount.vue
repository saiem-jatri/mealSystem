<script setup>
import { ref,computed, watch } from "vue";
import store from '../store';
import { useRoute } from 'vue-router'
const route = useRoute();


store.dispatch('json/getAllSelectedMembers')
const allSelectedMembers = computed(()=>{
  return store.getters['json/getAllSelectedMembers'].filter(memberList => memberList.monthId === route.params.id)
})

store.dispatch('json/getAllSelectedMembersMeal')



const activeTab = ref('')
const setActiveTab = ((index,id)=>{
  activeTab.value = index
  // return store.getters['json/getAllSelectedMembersMeal',id]


})

const allMemberMeal = ref('')
watch(activeTab,(value)=>{
   allMemberMeal.value = store.getters['json/getAllSelectedMembersMeal'].filter(mealList => mealList.mealId === value+1)
})
const memName = ref('')
const breakFast = ref('')
const lunch = ref('')
const dinner = ref('')


const addMeal=()=>{
    const payload = {
        "name":memName.value,
        "breakfast":breakFast.value,
        "lunch": lunch.value,
        "dinner": dinner.value,
        "mealId": activeTab.value+1,
        "date" : new Date()
    }

    store.dispatch('json/addSelectedMembersMeal',payload)
}
</script>
<template>
    <div>
      {{allMemberMeal}}
        <div class="flex gap-x-3 items-center w-full border border-gray-200">
            <button :class="activeTab === index ? 'bg-blue-700 text-white':'' " v-for="(member, index) in allSelectedMembers" :key="member.id"  class="border border-gray-200 px-2 py-1" @click="setActiveTab(index)">{{ member.name }}
            </button>
<!--            <div v-if="activeTab == 0">-->
<!--                    ethdryjyrdf-->
<!--            </div>-->
        </div>
    </div>

    <div>
        <form>
            <select v-model="memName" name="" id="">
                <option  v-for="mem in allSelectedMembers" :key="mem.name" :value="mem.name">{{ mem.name }}</option>
            </select>
            <input v-model="breakFast" type="number" class="text-black border border-gray-300 px-2 py-1">
            <input v-model="lunch" type="number" class="text-black border border-gray-300 px-2 py-1">
            <input v-model="dinner" type="number" class="text-black border border-gray-300 px-2 py-1">
            <button @click="addMeal">Add Meals</button>
        </form>
    </div>

  <table v-if="allMemberMeal.length > 0" class="table-fixed w-full">
    <thead>
    <tr class="border border-gray-300">
      <th class="border border-gray-300">Name</th>
      <th class="border border-gray-300">Breakfast</th>
      <th class="border border-gray-300">lunch</th>
      <th class="border border-gray-300">dinner</th>
      <th class="border border-gray-300">date</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="meal in allMemberMeal" :key="meal.id">
      <td class="text-center border border-gray-300">{{ meal.name }}</td>
      <td class="border border-gray-300 text-center">{{ meal.breakfast }}</td>
      <td class="border border-gray-300 text-center">{{ meal.lunch }}</td>
      <td class="border border-gray-300 text-center">{{ meal.dinner }}</td>
      <td class="border border-gray-300 text-center">{{ meal.date }}</td>
<!--      <td class="flex justify-center items-center border border-gray-300"><button @click="deleteSelectedMember(selectedMem.id)" class="bg-red-600 text-white rounded-md px-2">Delete</button></td>-->
    </tr>
    </tbody>
  </table>
</template>
