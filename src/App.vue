<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/NavBar.vue";
</script>

<template>
  <div>
    <header>
      <Navbar></Navbar>
    </header>
    <div class="max-w-6xl mx-auto">
      <RouterView />
    </div>
  </div>
</template>
