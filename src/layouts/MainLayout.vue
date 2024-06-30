<template>
    <BlocHeader />
    <div class="flex pt-14 bg-[#ecf4fa]">
        <SideMenu v-if="store.stateToggleMenu" />
        <RouterView class="bg-[#ecf4fa] h-screen " :class="{ 'pl-[237px]': store.stateToggleMenu }" />
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import BlocHeader from '@/components/header/BlocHeader.vue'
import SideMenu from '@/components/menu/SideMenu.vue'

import { useToggleMenu } from '@/stores/store'
const store = useToggleMenu()
</script>

<style scoped></style>