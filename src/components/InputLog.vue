<script setup lang="ts">
import { onMounted, type PropType } from "vue";
import { ref } from "vue";
import dayjs from "dayjs";

export interface InputObject {
  label: string;
  inputType: "number" | "text" | "select";
  options?: string[];
}

export interface OutputObject {
  date: string;
  value: string;
  option?: string;
}

const props = defineProps({
  input: { type: Object as PropType<InputObject>, required: true },
});

const emit = defineEmits(["log"]);

let val = ref("");
let selectedOption = ref("");
let date = ref(dayjs().format("YYYY-MM-DDTHH:mm"));

onMounted(() => {
  if (props.input.options) {
    selectedOption.value = props.input.options[0];
  }
});

function logData() {
  let output: OutputObject = {
    date: date.value,
    value: val.value,
  };
  if (selectedOption.value) {
    output.option = selectedOption.value;
  }
  emit("log", output);
}
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <div class="form-control w-full max-w-xs">
      <label for="date" class="label">
        <span class="label-text">Date</span>
      </label>
      <input type="datetime-local" name="datetime" id="datetime" class="input input-bordered w-full max-w-xs" v-model="date"/>
    </div>
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">{{ input.label }}</span>
      </label>
      <select v-if="input.inputType === 'select'" name="val-select" id="val-select" class="select select-bordered" v-model="val">
        <option v-for="option of input.options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
      <label v-else class="input-group">
        <input class="input input-bordered w-full max-w-xs" :type="input.inputType" :name="input.label"
          :id="input.label" v-model="val" />
        <select v-if="input.options" name="options" id="options" class="select select-bordered" v-model="selectedOption">
          <option v-for="option of input.options" :key="option">
            {{ option }}
          </option>
        </select>
      </label>
    </div>
    <div class="mt-4">
      <button class="btn btn-accent" @click="logData()">Log</button>
    </div>
  </div>
</template>
