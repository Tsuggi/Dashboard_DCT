<template>
    <nav class="bg-[#3c4962] w-[237px] h-screen fixed top-14">
        <ul class="flex flex-col pt-8 pl-5 gap-y-1.5">
            <li class="hover:bg-[#59667d] hover:rounded-l-lg pl-3">
                <i class="pi pi-desktop pr-2"></i>
                <RouterLink to="/dashboard">Dashboard</RouterLink>
            </li>
            <li class="hover:bg-[#59667d] hover:rounded-l-lg pl-3">
                <i class="pi pi-chart-bar pr-2"></i>
                <RouterLink to="/tonnage">Tonnage</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
</script>
