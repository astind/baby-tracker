<script setup lang="ts">
import type { PropType } from 'vue';

export interface StatsObject {
  title: string;
  description?: string;
}

const props = defineProps({
  stats: { type: Object as PropType<StatsObject[]>, required: true },
  values: { type: Object as PropType<string[]>, required: true },
});
</script>

<template>
  <div
    class="stats bg-primary text-primary-content stats-vertical lg:stats-horizontal shadow"
  >
    <div class="stat place-items-center" v-for="(stat, index) in stats" :key="stat.title">
      <div class="stat-title">{{ stat.title }}</div>
      <div class="stat-value">{{ values[index] }}</div>
      <div v-if="stat.description" class="stat-desc">
        {{ stat.description }}
      </div>
    </div>
  </div>
</template>
