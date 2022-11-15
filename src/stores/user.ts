import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const loggedIn = ref(false);

  return { loggedIn };
});
