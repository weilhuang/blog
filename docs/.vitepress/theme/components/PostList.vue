<script setup lang="ts">
import { withBase } from 'vitepress'
import { data as posts } from '../../posts.data'
</script>

<template>
  <ul class="post-list">
    <li v-for="post in posts" :key="post.url" class="post-item">
      <a class="post-link" :href="withBase(post.url)">
        <time class="post-date" :datetime="new Date(post.date.time).toISOString()">
          {{ post.date.string }}
        </time>
        <h2 class="post-title">{{ post.title }}</h2>
        <p v-if="post.description" class="post-desc">{{ post.description }}</p>
        <p v-if="post.tags?.length" class="post-tags">
          <span v-for="tag in post.tags" :key="tag" class="post-tag">{{ tag }}</span>
        </p>
      </a>
    </li>
  </ul>
</template>
