<script setup>
import { ref,computed, watch } from "vue";
import store from '../store';
import { useRoute } from 'vue-router'
const route = useRoute();


store.dispatch('json/getAllSelectedMembers')
const allSelectedMembers = computed(()=>{
  return store.getters['json/getAllSelectedMembers'].filter(memberList => memberList.monthId === route.params.id)
})


const activeTab = ref('')
const setActiveTab = ((index)=>{
    console.log(index);
    activeTab.value = index
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
        "mealId": activeTab.value
    }

    store.dispatch('json/addSelectedMembersMeal',payload)
}
</script>
<template>
    <div>
        <div class="flex gap-x-3 items-center w-full border border-gray-200">
            <button :class="activeTab === index ? 'bg-blue-700 text-white':'' " v-for="(member, index) in allSelectedMembers" :key="member.id"  class="border border-gray-200 px-2 py-1" @click="setActiveTab(index)">{{ member.name }}
            </button>
            <div v-if="activeTab === 0">
                    ethdryjyrdf
            </div>
        </div>
    </div>

    <div>
        <form>
            <select v-model="memName" name="" id="">
                {{ memName }}
                <option  v-for="mem in allSelectedMembers" :key="mem.name" :value="mem.name">{{ mem.name }}</option>
            </select>
            <input v-model="breakFast" type="number" class="text-black border border-gray-300 px-2 py-1">
            <input v-model="lunch" type="number" class="text-black border border-gray-300 px-2 py-1">
            <input v-model="dinner" type="number" class="text-black border border-gray-300 px-2 py-1">
            <button @click="addMeal">Add Meals</button>
        </form>
    </div>
</template>
