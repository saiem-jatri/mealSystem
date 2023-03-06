<script setup>
import { ref } from "vue"
import store from '../store';
import json from "../store/modules/json";

const name = ref('')
const age = ref('')
const occupassion = ref('')
const homeTown = ref('')
const contact = ref('')

store.dispatch('json/addMembers')

const addNewMember = ()=>{
    const payloads = {
        'id':4,
        'name': name.value,
        'age': age.value,
        'occupassion': occupassion.value,
        'homeTown' : homeTown.value,
        'contact' : contact.value
    }
    console.log(payloads)
   store.dispatch('json/addMembers',payloads)
}


</script>

<template>
<div>
 <div class="bg-blue-600 min-h-screen flex items-center">
   <div class="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
     <form>

       <div class="flex items-center mb-5">
         <label for="name" class="w-20 inline-block text-right mr-4 text-gray-500">Name</label>
         <input v-model="name" name="name" id="name" type="text" placeholder="Your name" class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400">
       </div>

       <div class="flex items-center mb-10">
         <label for="age" class="w-20 inline-block text-right mr-4 text-gray-500">Age</label>
         <input v-model="age" type="text" name="twitter" id="twitter" placeholder="Your Age" class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400">
       </div>

       <div class="flex items-center mb-10">
         <label for="occupassion" class="w-20 inline-block text-right mr-4 text-gray-500">Occupassion</label>
         <input v-model="occupassion" type="text" name="twitter" id="twitter" placeholder="Your Occuspassion" class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400">
       </div>

       <div class="flex items-center mb-10">
         <label for="homeTown" class="w-20 inline-block text-right mr-4 text-gray-500">HomeTown</label>
         <input v-model="homeTown" type="text" name="twitter" id="twitter" placeholder="Your homeTown" class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400">
       </div>

       <div class="flex items-center mb-10">
         <label for="contact" class="w-20 inline-block text-right mr-4 text-gray-500">Contact</label>
         <input v-model="contact" type="text" name="twitter" id="twitter" placeholder="Your Contact" class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400">
       </div>
       <div class="text-right">
         <button @click.prevent="addNewMember" class="py-3 px-8 bg-blue-600 text-green-100 font-bold rounded">Submit</button>
       </div>
     </form>
   </div>
 </div>

</div>
</template>