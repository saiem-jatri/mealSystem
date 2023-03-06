<script setup>
import store from '../store';
import {computed, ref, reactive} from "vue";

store.dispatch('json/getAllMembers')
const item1 = reactive({
        name: [],
        price: 0,
    })
    const item2 = reactive({
        name: [],
        price: 0,
    })
    const item3 = reactive({
        name: [],
        price: 0,
    })
const members = computed(()=>{
  return store.getters['json/allIMembers']
})

const count = computed(()=>{
    return store.getters['json/allCount']
})

console.log("=======>",count.value)
const addShoppingItem = ()=>{
    // const payloads = [{"name": item1.name, "price" : item1.price},{"name": item2.name, "price" : item2.price},{"name": item3.name, "price" : item3.price}]
  const payloads = {
    "name":[
      {"name": item1.name, "price" : item1.price},{"name": item2.name, "price" : item2.price},{"name": item3.name, "price" : item3.price},
    ],
    "id":3
  }
    console.log("===========>",payloads)
    store.dispatch('json/addShoppingData',payloads)
}

</script>

<template>
    <div>
        <div class="grid grid-cols-2 gap-2">
            <div v-for="member in members" :key="member.Contact">
                <div class="p-20 bg-orange-200">
                    <h3 class="text-orange-400 font-bold mb-4">{{ member.name }}</h3>
                    <div class="bg-white rounded-lg shadow-2xl md:flex">
                        <img src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366__340.png" alt="Laptop on Desk"
                            class="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none shadow-xl" />
                        <div class="p-6">
                            <h2 class="font-bold text-xl md:text-3xl mb-2 text-orange-700">{{ member.Contact }}</h2>
                            <p class="text-orange-700">
                               {{member.occupation}}
                            </p>
                            <p class="text-orange-700">
                               {{member.age}}
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>

        <div>
            <p>total shopping{{ count }}</p>
            <form>
                <input v-model="item1.name" type="text" class="px-4 py-2 border border-gray-400">
                <input v-model="item1.price" type="number" class="px-4 py-2 border border-gray-400">

                <input v-model="item2.name" type="text" class="px-4 py-2 border border-gray-400">
                <input v-model="item2.price" type="number" class="px-4 py-2 border border-gray-400">

                <input v-model="item3.name" type="text" class="px-4 py-2 border border-gray-400">
                <input v-model="item3.price" type="number" class="px-4 py-2 border border-gray-400">
                <button class="px-4 py-2 bg-blue-900 text-white" @click.prevent="addShoppingItem">add</button>
            </form>
        </div>
    </div>
</template>
