<template>
  <BaseLayout :halfHeight="!!content">
    <template v-slot:landing>
      <div class="flex flex-col text-center">
        <p class="text-xl md:text-2xl lg:text-3xl font-semibold">Project</p>
        <h1 class="text-4xl md:text-6xl lg:text-8xl font-bold">
          {{ project?.name }}
        </h1>
        <p class="text-xl md:text-2xl lg:text-3xl italic">
          {{ project?.description }}
        </p>
        <div class="flex justify-center items-center md:hidden">
          <a
            href="#content"
            class="bg-white animate-bounce rounded-full p-3 inline-flex mt-10"
          >
            <ArrowDownIcon class="h-6 w-6 text-black inline" />
          </a>
        </div>
      </div>
    </template>

    <template v-slot:content>
      <div v-if="content && project?.contentType">
        <div class="container mx-auto">
          <div class="mx-auto mb-8 pt-8 md:pt-0" id="content">
            <div
              id="content-markdown"
              v-if="project?.contentType === ContentType.MARKDOWN"
              v-html="content"
              class="bg-gray-800 text-white p-4 rounded-lg shadow-lg"
            ></div>
            <div
              v-else-if="project?.contentType === ContentType.HTML"
              v-html="content"
            ></div>
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
import { useRoute } from "vue-router";
import data from "@/data";
import { Project } from "@/types/Project";
import { ContentType } from "@/types/ContentType";
import { marked } from "marked";

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
    const content: Ref<string> = ref("");

    const loadData = () => {
      project.value = data.projects.find(
        (project) => project.slug === route.params.slug
      );

      if (project.value) {
        if (project.value.contentType === ContentType.MARKDOWN) {
          content.value = marked.parse(project.value?.content || "");
        } else if (project.value.contentType === ContentType.HTML) {
          content.value = project.value.content || "";
        }
      }
    };

    onMounted(loadData);

    return {
      project,
      content,
      ContentType,
    };
  },
});
</script>

<style>
#content-markdown h1 {
  @apply text-2xl font-extrabold;
}

#content-markdown h2 {
  @apply text-xl font-bold;
}

#content-markdown h3 {
  @apply text-lg font-semibold;
}

#content-markdown p {
  @apply text-base;
}

#content-markdown a {
  @apply text-base text-blue-500;
}

#content-markdown strong {
  @apply font-semibold;
}

#content-markdown code {
  @apply bg-gray-700 p-1 rounded;
}

#content-markdown blockquote {
  @apply bg-gray-700 border-l-8 border-gray-600 p-2;
}

#content-markdown hr {
  @apply border my-2;
}

#content-markdown ul {
  @apply ml-8 list-disc;
}

#content-markdown ol {
  @apply ml-8 list-decimal;
}
</style>
