<template>
  <div class="w-[90%] mx-auto pt-8">
    <div class="flex justify-between">
      <div class="w-[250px] h-[150px] bg-white rounded">1</div>
      <div class="w-[250px] h-[150px] bg-white rounded">2</div>
      <div class="w-[250px] h-[150px] bg-white rounded">2</div>
      <div class="w-[250px] h-[150px] bg-white rounded">4</div>
    </div>

    <div>
      <Chart type="line" :data="chartData" :options="chartOptions" class="rounded my-5 bg-[#FFFFFF] h-[30rem] w-full mx-auto" />
      <button class="bg-red-500" @click="changeData">Bouton </button>
      <button class="bg-blue-500" @click='chartData.value = dechetsverts'>Déchets Verts </button>
    </div>
  </div>

</template>

<script setup>
import { dechetsverts } from "@/data/tonnage";
import { ref, onMounted } from "vue";

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {

  return {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    datasets: [
      {
        label: '2023',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#FFB951',
        tension: 0.4
      },
      {
        label: '2024',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: '#FFB1C1',
        backgroundColor: '#FFFFFF',
        tension: 0.4
      }
    ]
  };
};
const setChartOptions = () => {
  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: '#FFB951'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#000000'
        },
        grid: {
          color: '#000000'
        }
      },
      y: {
        ticks: {
          color: '#000000'
        },
        grid: {
          color: '#000000'
        }
      }
    }
  };
}

const changeData = () => {
  chartData.value = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    datasets: [
      {
        label: '2023',
        data: [65, 65, 65, 65, 65, 65, 65],
        fill: false,
        borderColor: '#0097FF',
        tension: 0.4
      },
      {
        label: '2024',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: '#0097FF',
        tension: 0.4
      }
    ]
  };
}
</script>
