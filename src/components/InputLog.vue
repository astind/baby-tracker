<script setup lang="ts">
import type { PropType } from "vue";
import { ref } from "vue";

export interface InputObject {
  label: string;
  options?: string[];
}
const props = defineProps({
  input: { type: Object as PropType<InputObject>, required: true }
});

let val = ref("");
</script>

<template>
  <div class="w-full flex flex-col">
    <div class="ml-50">
      <label for="date" class="dark:text-white">Date</label>
      <div>
        <input type="datetime-local" name="datetime" id="datetime" />
      </div>
    </div>
    <div>
      <label class="dark:text-white">{{ input.label }}</label>
      <div class="mt-1 rounded-md">
        <input
          type="text"
          name="{{input.label}}"
          id="{{input.label}}"
          v-model="val"
        />
        <div v-if="input.options">
          <label for="options" class="sr-only">Options</label>
          <select name="options" id="options">
            <option v-for="op in input.options" :key="op">{{ op }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
