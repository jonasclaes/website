<template>
  <div class="min-h-screen h-full w-full flex flex-col">
    <div class="text-white z-10 top-0 w-full absolute bg-transparent">
      <div class="container mx-auto">
        <div class="mx-auto flex justify-between items-center p-4">
          <div class="flex items-center h-full space-x-2">
            <!-- <span class="font-semibold">jonasclaes.be</span> -->
            <img
              src="./assets/jonasclaes-logo.png"
              alt="jonasclaes.be"
              class="h-10"
            />
          </div>
          <div class="flex space-x-3">
            <template v-for="navbarLink in navbarLinks" :key="navbarLink.name">
              <router-link
                v-if="!navbarLink.external"
                :to="navbarLink.path"
                :class="{ 'font-semibold': navbarLink.path === $route.path }"
                >{{ navbarLink.name }}</router-link
              >
              <a
                v-else
                :href="navbarLink.path"
                rel="noopener noreferrer"
                :class="{ 'font-semibold': navbarLink.path === $route.path }"
                >{{ navbarLink.name }}</a
              >
            </template>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const navbarLinks = [
      {
        name: "Home",
        path: "/",
        external: false,
      },
      {
        name: "Projects",
        path: "/projects",
        external: false,
      },
    ];

    return {
      navbarLinks,
    };
  },
});
</script>

<style lang="postcss" scoped>
.bg-pattern {
  background-color: #3b82f6;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
