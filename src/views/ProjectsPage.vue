<template>
  <BaseLayout>
    <template v-slot:landing>
      <div class="flex flex-col text-center">
        <h1 class="text-4xl md:text-6xl lg:text-8xl font-bold">Projects</h1>
        <p class="text-xl md:text-2xl lg:text-3xl italic">
          A list of all the projects I've worked on
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

    <template v-slot:default>
      <div class="bg-gray-600 md:py-6">
        <div class="container mx-auto">
          <div class="mx-auto p-4" id="projects">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-9"
            >
              <template v-if="projects.length">
                <div
                  @click="openProject(project.slug)"
                  v-for="project in projects"
                  :key="project.name"
                  class="bg-gray-800 text-white rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 md:hover:scale-110 cursor-pointer"
                >
                  <img
                    :src="getProjectCoverImage(project.cover)"
                    :alt="project.name"
                    class="rounded-t-lg w-full"
                  />
                  <div class="p-4">
                    <div class="flex justify-between items-start space-x-2">
                      <div>
                        <span
                          class="text-sm text-gray-400"
                          v-if="project.date"
                          >{{ formatProjectDate(project.date) }}</span
                        >
                        <h3 class="font-semibold text-lg">
                          {{ project.name }}
                        </h3>
                        <p
                          v-if="project.description"
                          class="text-gray-400 break-words"
                        >
                          {{ project.description }}
                        </p>
                      </div>
                      <div v-if="project.status">
                        <span
                          class="py-1 px-2 rounded-md shadow-md font-semibold whitespace-nowrap"
                          :class="{
                            'bg-red-500':
                              project.status === ProjectStatus.NOT_STARTED,
                            'bg-blue-500':
                              project.status === ProjectStatus.IN_PROGRESS,
                            'bg-green-500':
                              project.status === ProjectStatus.FINISHED,
                          }"
                          >{{ getProjectStatusText(project.status) }}</span
                        >
                      </div>
                    </div>
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
import { defineComponent, onMounted, ref, Ref } from "vue";
import { ArrowDownIcon } from "@heroicons/vue/solid";
import BaseLayout from "@/components/BaseLayout.vue";
import { Projects } from "@/types/Projects";
import { useRouter } from "vue-router";
import data from "@/data";
import { ProjectStatus } from "@/types/ProjectStatus";
import { Project } from "@/types/Project";

export default defineComponent({
  name: "ProjectsPage",
  title: "Projects",
  components: {
    ArrowDownIcon,
    BaseLayout,
  },
  setup() {
    const router = useRouter();
    const projects: Ref<Projects> = ref([]);

    const openProject = (slug: string) => {
      router.push(`/projects/${slug}`);
    };

    const getProjectStatusText = (status?: number): string => {
      switch (status) {
        case ProjectStatus.UNKNOWN:
          return "Unknown";

        case ProjectStatus.NOT_STARTED:
          return "Not started";

        case ProjectStatus.IN_PROGRESS:
          return "In progress";

        case ProjectStatus.FINISHED:
          return "Finished";

        default:
          return "Unknown";
      }
    };

    const getProjectCoverImage = (cover?: string): string => {
      if (cover) return cover;
      return require("@/assets/project-cover-not-found.png");
    };

    const formatProjectDate = (date: Date): string => {
      return date.toLocaleDateString(navigator.language, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    const sortProjectByStatus = (a: Project, b: Project): number => {
      return (
        (b.status || ProjectStatus.UNKNOWN) -
        (a.status || ProjectStatus.UNKNOWN)
      );
    };

    const loadData = () => {
      projects.value = data.projects.sort(sortProjectByStatus);
    };

    onMounted(loadData);

    return {
      projects,
      openProject,
      getProjectStatusText,
      getProjectCoverImage,
      ProjectStatus,
      formatProjectDate,
    };
  },
});
</script>
