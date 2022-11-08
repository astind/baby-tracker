<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { ref } from "vue";

const tabs = ref(["Food", "Diapers", "Naps"]);
</script>

<template>
  <div class="w-full px-2 py-16 sm:px-0">
    <TabGroup>
      <TabList
        class="flex space-x-5 rounded-xl md:px-5 bg-blue-600 h-16 justify-center md:justify-start"
      >
        <Tab v-for="tab in tabs" :key="tab" v-slot="{ selected }">
          <button
            :class="[
              'w-24 rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            {{ tab }}
          </button>
        </Tab>
      </TabList>
      <TabPanels class="mt-2">
        <TabPanel>Food Content</TabPanel>
        <TabPanel>Diapers Content</TabPanel>
        <TabPanel>Naps Content</TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>