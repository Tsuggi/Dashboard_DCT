<template>
    <nav class="bg-[#3c4962] w-[237px] h-screen fixed top-14">
        <ul class="flex flex-col pt-8 pl-5 gap-y-1.5">
            <li class="hover:bg-[#59667d] hover:rounded-l-lg pl-3 text-sm" v-for="(item, index) in menu" :key="index">
                <i :class="item.icon" class="pr-2"></i>
                <RouterLink :to="item.to">{{item.label}}</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>

const menu = [
    {
        label : "Dashboard",
        icon : "pi pi-desktop",
        to : "/dashboard"
    },
    {
        label : "Tonnage",
        icon : "pi pi-chart-bar",
        to : "/tonnage"
    }
]
</script>
