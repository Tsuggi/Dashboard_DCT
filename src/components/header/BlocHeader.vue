<template>
    <header class="fixed w-screen h-14 bg-[#FDFEFF] flex justify-between items-center px-5 shadow-xl">
        <div class="border text-black">
            Logo
        </div>

        <BurgerMenu @click="toggleMenu" class="hover:scale-125 cursor-pointer"/>
    
        <div class="flex space-x-4">
            <SearchIcon class="text-black"/>
            <ParametreIcon class="text-black"/>
            <UserAccountIcon class="text-black" />
        </div>
    </header>
</template>

<script setup>
import BurgerMenu from '@/assets/icons/BurgerMenu.vue'
import ParametreIcon from '@/assets/icons/ParametreIcon.vue'
import UserAccountIcon from '@/assets/icons/UserAccountIcon.vue'
import SearchIcon from '@/assets/icons/SearchIcon.vue'
import { useToggleMenu } from '@/stores/store'

const store = useToggleMenu()
const toggleMenu = ()=> {
    store.stateToggleMenu = !store.stateToggleMenu
}
</script>
