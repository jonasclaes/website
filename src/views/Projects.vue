<template>
  <BaseLayout>
    <template v-slot:landing>
      <div class="flex flex-col text-center">
        <h1 class="text-4xl md:text-6xl lg:text-8xl font-bold">Projects</h1>
        <p class="text-xl md:text-2xl lg:text-3xl italic">
          All of the projects I've made
        </p>
        <div class="flex justify-center items-center">
          <a
            href="#projects"
            class="bg-white animate-bounce rounded-full p-3 inline-flex mt-10"
          >
            <ArrowDownIcon class="h-6 w-6 text-black inline" />
          </a>
        </div>
      </div>
    </template>

    <template v-slot:content>
      <div>
        <div class="container mx-auto">
          <div class="mx-auto px-4 mb-8" id="projects">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              <template v-if="projects.length">
                <div
                  v-for="project in projects"
                  :key="project.name"
                  class="bg-gray-800 text-white rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110"
                >
                  <img
                    :src="project.cover"
                    :alt="project.name"
                    class="rounded-t-lg w-full"
                  />
                  <div class="p-4">
                    <h3 class="font-semibold text-lg">{{ project.name }}</h3>
                    <p
                      v-if="project.description"
                      class="text-gray-400 break-all"
                    >
                      {{ project.description }}
                    </p>
                  </div>
                </div>
              </template>
              <template v-else>
                <div
                  class="bg-gray-800 text-white rounded-lg shadow-lg p-4 col-span-full text-center"
                >
                  <h3 class="font-semibold text-lg">No projects found.</h3>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { ArrowDownIcon } from "@heroicons/vue/solid";
import BaseLayout from "@/components/BaseLayout.vue";
import { Projects } from "@/types/Projects";

export default defineComponent({
  name: "Projects",
  title: "Projects",
  components: {
    ArrowDownIcon,
    BaseLayout,
  },
  setup() {
    const projects: Ref<Projects> = ref([
      {
        name: "Test",
        description: "Abcdefghijklmnopqrstuvwxyz",
        cover: "https://via.placeholder.com/400x200",
      },
      {
        name: "Test",
        description: "Abcdefghijklmnopqrstuvwxyz",
        cover: "https://via.placeholder.com/400x200",
      },
      {
        name: "Test",
        description: "Abcdefghijklmnopqrstuvwxyz",
        cover: "https://via.placeholder.com/400x200",
      },
    ]);

    return {
      projects,
    };
  },
});
</script>
