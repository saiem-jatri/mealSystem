<script setup>
import store from '../store';
import {computed, ref, reactive} from "vue";

store.dispatch('json/getAllMembers')
store.dispatch('json/deleteMember')
const toggler = ref(false)
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
    "id":2002
  }
    store.dispatch('json/addShoppingData',payloads)
}
const testDeleteId = ref()
const openModal =(id)=>{
    toggler.value = true
    testDeleteId.value = id

}

const deletember = (id)=>{
    store.dispatch('json/deleteMember',id)
    toggler.value = false
}

const mem = ref('')
const toggleBtn = ref('')

</script>

<template>
    <div class="relative">
        <div class="grid grid-cols-2 gap-2">
            <div v-for="member in members" :key="member.Contact">
                {{ member.date }}
                <div class="p-20 bg-orange-200 relative">
                    <button  @click.prevent=" openModal(member.id)" class="text-white bg-blue-800 rounded-full p-2 absolute right-1 top-2">remove</button>
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

        <!-- dialougue -->
        <div v-if="toggler" class="absolute z-20 inset-0 px-4 md:flex md:items-center md:justify-center">
            <div class="bg-black opacity-25 w-full h-full absolute z-10 inset-0"></div>
                <div class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
                    <div class="md:flex items-center">
                        <div class="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                        <i class="bx bx-error text-3xl"></i>
                        </div>
                        <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                        <p class="font-bold">Delete your account</p>
                        <p class="text-sm text-gray-700 mt-1">You will lose all of your data by deleting your account. This action cannot be undone.
                        </p>
                        </div>
                    </div>
                    <div class="text-center md:text-right mt-4 md:flex md:justify-end">
                        <button @click="deletember(testDeleteId)"  class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2">Delete
                            Account</button>
                        <button @click="toggler = false" class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
                        md:mt-0 md:order-1">Cancel</button>
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
{{ mem }}
    <select v-model="mem" selected="members[0].name"  name="dropdown" id="">
        <option  v-for="member in members" :key="member.id" :value="member.name">{{ member.name }}</option>
    </select>

    <div>
        <div class="flex gap-x-4">
        <button @click="toggleBtn = 'press1'">btn1</button>
        <button @click="toggleBtn = 'press2'">btn2</button>
        </div>
{{ toggleBtn }}
        <div v-if="toggleBtn =='press1'">
                btn1dfryiagwsefgfawyr
        </div>
        <div v-if="toggleBtn =='press2'">
                btn1shiuheriuhauaer
        </div>

    </div>
</template>
