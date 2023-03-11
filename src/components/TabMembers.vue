<script setup>
import { ref,computed } from "vue";
import store from '../store';
store.dispatch('json/getAllMembers')
const visible = ref(false);
const members = computed(()=>{
  return store.getters['json/allIMembers']
})
const memberName = ref('')
const memberEmail = ref('')
console.log("all mem",members.value);

const selectedMembers = ref([])
console.log("after selecting",selectedMembers.value)
const addSelectedMembers = (memberName,memberEmail)=>{
    const payloads = {
        "name": memberName,
        "email": memberEmail
    }
    store.dispatch('json/addSelectedMembers',payloads)
    visible.value = false
    memberName.value=''
    memberEmail.value = ''
}

store.dispatch('json/getAllSelectedMembers')
const allSelectedMembers = computed(()=>{
  return store.getters['json/getAllSelectedMembers']
})

const deleteSelectedMember= (id)=>{
    store.dispatch('json/deleteSelectedMembers',id)
}
</script>

<template>
    <div>
        <button @click="visible = !visible">Add Members</button>
        <div v-show="visible">
            <input class="block px-2 border border-gray-300" type="text" v-model="memberName" placeholder="select member name">
            <input class="block px-2 border border-gray-300 mt-2" type="email" v-model="memberEmail" placeholder="select member email">
        <button @click="addSelectedMembers(memberName,memberEmail)" class="bg-blue-400 text-white">submit</button>
        </div>
        <table v-if="allSelectedMembers.length > 0" class="table-fixed w-full">
            <thead>
                <tr class="border border-gray-300">
                    <th class="border border-gray-300">Name</th>
                    <th class="border border-gray-300">Email</th>
                    <th class="border border-gray-300">Remove</th>
                </tr>
            </thead>
                <tbody>
                <tr v-for="selectedMem in allSelectedMembers" :key="selectedMem.id">
                    <td class="text-center border border-gray-300">{{ selectedMem.name }}</td>
                    <td class="border border-gray-300 text-center">{{ selectedMem.email }}</td>
                    <td class="flex justify-center items-center border border-gray-300"><button @click="deleteSelectedMember(selectedMem.id)" class="bg-red-600 text-white rounded-md px-2">Delete</button></td>
                </tr>
                </tbody>
        </table>
    </div>
</template>
