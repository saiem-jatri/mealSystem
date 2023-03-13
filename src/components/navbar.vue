<script setup>

</script>

<template>
    <div>
        <div class="w-full py-4 px-2 shadow-md flex justify-between items-center border-b-slate-400">
            <router-link to="/">
                <img src="../images/logo.png" class="h-10 w-10 block" alt="logo">
            </router-link>
            <div class="flex gap-x-4 items-center">
                <router-link :class="$route.path === '/addMembers' ? 'border-b-2 border-red-600' : '' " class="bg-gray-100 text-black font-medium text-sm px-2 py-1 pb-1 hover:border-b-2 hover:border-b-red-700" to="/addMembers">Join With Us</router-link>
                <router-link :class="$route.path === '/meal' ? 'border-b-2 border-red-600' : '' " class="bg-gray-100 text-black font-medium text-sm px-2 py-1 pb-1 hover:border-b-2 hover:border-b-red-700" to="/meal">Meal</router-link>
                <router-link :class="$route.path === '/calculator' ? 'border-b-2 border-red-600' : '' " class="bg-gray-100 text-black font-medium text-sm px-2 py-1 pb-1 hover:border-b-2 hover:border-b-red-700" to="/">Calculator</router-link>
                <router-link :class="$route.path === '/addShopping' ? 'border-b-2 border-red-600' : '' " class="bg-gray-100 text-black font-medium text-sm px-2 py-1 pb-1 hover:border-b-2 hover:border-b-red-700" to="/">Add shopping</router-link>
            </div>
        </div>
    </div>
</template>
