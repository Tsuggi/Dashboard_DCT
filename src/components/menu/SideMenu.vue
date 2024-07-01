<template>
    <nav class="bg-[#3c4962] w-[237px] h-screen fixed top-14">
        <ul class="flex flex-col pt-8 pl-5 gap-y-1.5">
            <li class="hover:bg-[#59667d] hover:rounded-l-lg pl-3 text-sm text-white relative"
                v-for="(item, index) in menu" :key="index">
                <i :class="item.icon" class="pr-2"></i>
                <RouterLink :to="item.to" exactActiveClass="font-bold" @mouseover="flecheMenuDown(item.posticon)"
                    @mouseleave="flecheMenuRight">
                    {{ item.label }}
                    <i :class="item.posticon" class="pl-2 absolute top-1"></i>
                </RouterLink>
            </li>
        </ul>

    </nav>
</template>

<script setup>
import { reactive, ref } from "vue";
import TreeItem from "@/components/menu/TreeItem.vue";
const flecheMenuDown = (item) => {
    if (item == "pi pi-angle-right") {
        menu[4].posticon = "pi pi-angle-down"
    }
}
const flecheMenuRight = () => menu[4].posticon = "pi pi-angle-right"

const menu = reactive([
    {
        label: "Dashboard",
        icon: "pi pi-desktop",
        to: "/dashboard"
    },
    {
        label: "Tonnage",
        icon: "pi pi-chart-bar",
        to: "/tonnage"
    },
    {
        label: "Tâches",
        icon: "pi pi-hammer",
        to: "/taches"
    },
    {
        label: "En attente",
        icon: "pi pi-chevron-circle-left",
        to: "/waiting"
    },
    {
        label: "Déchetteries",
        icon: "pi pi-trash",
        posticon: "pi pi-angle-right",
        to: "/waiting",
        children: [
            { name: 'Belz' },
            { name: 'Carnac' },
            { name: 'Pluvigner' },
            { name: 'Saint-Anne' },
            { name: 'Quiberon' },
            { name: 'Crach' },
        ]

    },
])

</script>
