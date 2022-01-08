<template>
  <BaseLayout
    :backgroundImage="project?.cover"
    :fill="project?.coverBackgroundFill"
  >
    <template v-slot:landing>
      <div class="flex flex-col text-center">
        <p class="text-xl md:text-2xl lg:text-3xl font-semibold">Project</p>
        <h1 class="text-4xl md:text-6xl lg:text-8xl font-bold">
          {{ project?.name }}
        </h1>
        <p class="text-xl md:text-2xl lg:text-3xl italic">
          {{ project?.description }}
        </p>
        <div class="flex justify-center items-center">
          <a
            href="#content"
            class="bg-white animate-bounce rounded-full p-3 inline-flex mt-10"
          >
            <ArrowDownIcon class="h-6 w-6 text-black inline" />
          </a>
        </div>
      </div>
    </template>

    <template v-slot:default>
      <div v-if="content" class="md:py-6">
        <div class="container mx-auto">
          <div class="mx-auto p-4" id="content">
            <component :is="content"></component>
          </div>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<script lang="ts">
import {
  Component,
  defineComponent,
  onMounted,
  ref,
  Ref,
  shallowRef,
} from "vue";
import { ArrowDownIcon } from "@heroicons/vue/solid";
import BaseLayout from "@/components/BaseLayout.vue";
import { useRoute } from "vue-router";
import data from "@/data";
import { Project } from "@/types/Project";

export default defineComponent({
  name: "ProjectPage",
  title: "Project",
  components: {
    ArrowDownIcon,
    BaseLayout,
  },
  setup() {
    const route = useRoute();

    const project: Ref<Project | undefined> = ref(undefined);
    const content: Ref<Component | undefined> = shallowRef(undefined);

    const loadData = async () => {
      // Find the project in the array of projects.
      project.value = data.projects.find(
        (project) => project.slug === route.params.slug
      );

      // Dynamically load the Vue component.
      if (project.value && typeof project.value.content === "function") {
        const component = await project.value.content();
        content.value = component;
      }
    };

    onMounted(loadData);

    return {
      project,
      content,
    };
  },
});
</script>
