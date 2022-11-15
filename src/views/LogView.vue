<script setup lang="ts">
import { ref } from "vue";
import InputLog, { type OutputObject } from "../components/InputLog.vue";
import type { InputObject } from "../components/InputLog.vue";
import { useDataStore } from "@/stores/data";

let tabSelected = ref(0);
const tabs = ref(["Food", "Diapers", "Naps"]);
const foodLog: InputObject = {
  label: "Food",
  options: ["oz", "mL"],
  inputType: "number",
};
const diaperLog: InputObject = {
  label: "Contents",
  inputType: "select",
  options: ["Pee", "Poo", "Pee + Poo"],
};
const dataStore = useDataStore();

function changeTab(index: number) {
  tabSelected.value = index;
}

function getLog(event: OutputObject) {
  console.log(event);
  dataStore.logFeeding({
    date: event.date,
    amount: parseInt(event.value),
    unit: event.option as "mL" | "oz",
    babyId: "test",
  });
}
</script>

<template>
  <div class="max-w-lg py-10 px-2 m-auto">
    <div class="tabs tabs-boxed justify-center">
      <a
        class="tab"
        v-for="(tab, index) in tabs"
        :key="tab"
        @click="changeTab(index)"
        :class="{ 'tab-active': tabSelected === index }"
        >{{ tab }}
      </a>
    </div>
    <div :class="tabSelected === 0 ? 'block' : 'hidden'">
      <InputLog :input="foodLog" @log="getLog"></InputLog>
    </div>
    <div :class="tabSelected === 1 ? 'block' : 'hidden'">
      <InputLog :input="diaperLog" @log="getLog"></InputLog>
    </div>
    <div :class="tabSelected === 2 ? 'block' : 'hidden'">Naps Content</div>
  </div>
</template>
