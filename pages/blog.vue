<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <section class="section">
        <div class="container">
          <h1 class="title">{{ post.title }}</h1>
          <h2 class="subtitle">{{ dateFormat(post.createdAt, "yyyy/MM/dd hh:mm:ss") }}</h2>
          <div class="content" v-html="$md.render(post.content)"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import posts from "~/apollo/query";
import format from 'date-fns/format'
import ja from 'date-fns/locale/ja'

export default {
  head: {
    title: "Blog",
  },
  name: "posts",
  data() {
    return {
      posts: {},
    };
  },
  apollo: {
    posts: {
      query: posts,
    },
  },
  methods: {
    dateFormat: function(date, formatStr) {
      return format(new Date(date), formatStr, ja)
    }
  }
};
</script>
