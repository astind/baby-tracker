<script setup lang="ts">
import StatBar, { type StatsObject } from "@/components/StatBar.vue";
import { useDataStore } from "@/stores/data";
import { computed, onBeforeMount, ref } from "vue";

let date = ref(new Date());
let babyData: any[] | undefined;
const dataStore = useDataStore();
const statsInfo: StatsObject[] = [
  { title: "Total Food" },
  { title: "Total Diapers" },
  { title: "Total Naps" },
];

onBeforeMount(() => {
  babyData = dataStore.getAllData("test");
  console.log(babyData);
});

const currentDate = computed(() => {
  return getDateString();
});

const dailyStats = computed(() => {
  if (babyData) {
    let dailyData = babyData.filter(
      (rec) => rec["date"].split("T")[0] === getDateString()
    );
    let totalFood = 0;
    let totalDiapers = 0;
    let totalNaps = 0;
    for (const d of dailyData) {
      if (d["amount"]) {
        totalFood += d["amount"];
      }
      if (d["type"]) {
        totalDiapers += 1;
      }
      if (d["duration"]) {
        totalNaps += d["duration"];
      }
    }
    return [
      `${totalFood.toString()} oz`,
      totalDiapers.toString(),
      `${totalNaps.toString()} hrs`,
    ];
  }
  return ["0", "0", "0"];
});

function getDateString() {
  return date.value.toISOString().split("T")[0];
}

function changeDay(amount: number) {
  var nDate = new Date(date.value);
  nDate.setDate(nDate.getDate() + amount);
  date.value = nDate;
}

function dateChange(event: any) {
  date.value = new Date(event.target.value);
}

function clearData() {
  dataStore.clearData();
}
</script>

<template>
  <div class="px-2 py-5 flex flex-col items-center">
    <div class="text-lg mb-5">History</div>
    <div class="form-control">
      <div class="input-group">
        <button class="btn btn-square" @click="changeDay(-1)">Prev</button>
        <input type="date" class="input input-bordered" :value="currentDate" @change="dateChange" />
        <button class="btn btn-square" @click="changeDay(1)">Next</button>
      </div>
    </div>
    <div class="mt-5">
      <StatBar :stats="statsInfo" :values="dailyStats"></StatBar>
    </div>
    <div class="mt-5">
      <button class="btn" @click="clearData()">Clear Data</button>
    </div>
  </div>
</template>
