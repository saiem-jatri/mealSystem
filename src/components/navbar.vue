<script setup>

</script>

<template>
    <div>
        <div class="w-full py-4 px-2 shadow-md flex justify-between items-center border-b-slate-400">
            <router-link to="/">
                <img src="../assets/images/logo.png" class="h-5 w-5 block"  alt="logo">
            </router-link>
            <div class="flex gap-x-4 items-center">
                <!-- <router-link :class="$route.path === '/' ? 'border-b border-red-600' : '' " class="bg-gray-100 text-black font-medium text-sm px-2 py-1 pb-1 hover:border-b-2 hover:border-b-red-700" to="/members">Members</router-link> -->
                <router-link :class="$route.path === '/addMembers' ? 'border-b-2 border-red-600' : '' " class="bg-gray-100 text-black font-medium text-sm px-2 py-1 pb-1 hover:border-b-2 hover:border-b-red-700" to="/addMembers">Join With Us</router-link>
                <router-link :class="$route.path === '/calculator' ? 'border-b-2 border-red-600' : '' " class="bg-gray-100 text-black font-medium text-sm px-2 py-1 pb-1 hover:border-b-2 hover:border-b-red-700" to="/members">Calculator</router-link>
                <router-link :class="$route.path === '/addShopping' ? 'border-b-2 border-red-600' : '' " class="bg-gray-100 text-black font-medium text-sm px-2 py-1 pb-1 hover:border-b-2 hover:border-b-red-700" to="/members">Add shopping</router-link>
            </div>
        </div>
    </div>
</template>
