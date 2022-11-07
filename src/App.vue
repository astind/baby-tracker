<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink class="mr-4" to="/">Home</RouterLink>
          <RouterLink class="mr-4" to="/about">About</RouterLink>
          <RouterLink class="mr-4" to="/log">Log</RouterLink>
        </nav>
      </div>
    </header>
    <div class="max-w-xl mx-auto">
      <RouterView />
    </div>
  </div>
</template>
