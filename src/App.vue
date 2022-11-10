<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav class="dark:text-white space-x-4">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/log">Log</RouterLink>
        </nav>
      </div>
    </header>
    <div class="max-w-6xl mx-auto">
      <RouterView />
    </div>
  </div>
</template>
