import { defineComponent } from "vue";

export const PageTitleMixin = defineComponent({
  created() {
    const title = this.getTitle();
    if (title) {
      document.title = `jonasclaes.be | ${title}`;
    }
  },
  methods: {
    getTitle(): string {
      const { title } = this.$options;

      if (typeof title === "function") {
        return title();
      } else {
        return title;
      }
    },
  },
});
