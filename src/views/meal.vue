<script setup>
import {computed, ref} from "vue";
import store from "../store/index.js";

const openForm = ref()
const month = ref()
const createdAt = ref()
const createdBy = ref()
store.dispatch('json/getAllMeals')

const addMeal = ()=>{
  // const payloads = [{"name": item1.name, "price" : item1.price},{"name": item2.name, "price" : item2.price},{"name": item3.name, "price" : item3.price}]
  const payloads = {
      "month": month.value, "createdAt" : createdAt.value, "createdBy": createdBy.value
  }
  store.dispatch('json/addMeal',payloads)
  month.value = ''
  createdBy.value = ''
  createdAt.value = ''
  openForm.value = false
}

const allMeal = computed(()=>{
  return store.getters['json/getAllMeal']
})
console.log("=========>",allMeal.value)

// store.dispatch('json/deleteMeals')
const deleteMeal = (id)=>{
  console.log("id is",id);
  store.dispatch('json/deleteMeals',id)
}

</script>

<template>
  <div class="px-40 mt-10">
        <div class="bg-gray-200 py-2 px-2 text-xl font-semibold text-black flex justify-between items-center rounded-md">
            <p>All Meal List</p>
          <button @click.prevent="openForm = !openForm"  class="bg-blue-700 text-white px-2 py-1 rounded-md text-center">Create New</button>
        </div>

    <div v-if="openForm" class="w-full max-w-3xl m-auto bg-indigo-100 rounded p-5 mt-4">
      <header>
        <img class="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
      </header>
      <form>
        <div>
          <label class="block mb-2 text-indigo-500" for="username">Month</label>
          <input v-model="month" class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="username" placeholder="Enter Month Name">
        </div>
        <div>
          <label class="block mb-2 text-indigo-500" for="password">Created At</label>
          <input v-model="createdAt" class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="date" name="password">
        </div>
        <div>
          <label class="block mb-2 text-indigo-500" for="password">Created By</label>
          <input v-model="createdBy" class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="password" placeholder="Enter Name">
        </div>
        <div>
          <button @click.prevent="addMeal" class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded">Add Meal</button>
        </div>
      </form>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 py-2 px-2 gap-x-4 gap-y-4 border border-gray-400 shadow-lg rounded-md mt-4">
        <div v-for="meal in allMeal[0]" :key="meal.id" class="bg-white shadow-md rounded-md px-2 py-2">
            <p class="text-xl text-black font-bold text-start">{{meal.month}}</p>
            <p class="text-sm text-black font-medium text-start">{{meal.createdAt}}</p>
            <p class="text-xl text-black font-bold text-start">{{meal.createdBy}}</p>
          <div class="flex gap-x-2 justify-start">
              <router-link :to="'/meal/'+meal.id" class="bg-gray-300 px-1 rounded-sm flex gap-x-2 items-center">View <img src="../assets/icons/eye.png" class="h-4 w-4" alt=""></router-link>
              <button @click="deleteMeal(meal.id)" class=""><img src="../assets/icons/delete.png" class="h-5 w-5" alt=""></button>
          </div>
        </div>
    </div>


  </div>
</template>
