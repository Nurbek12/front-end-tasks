<template>
  <div class="container px-10 mx-auto py-4 space-y-8">
    <!-- Task 1 -->
    <div>
      <h1>Task 1</h1>
      <tree-collapse :items="collapse_data" />
    </div>


    <!-- Task 2 -->
    <div>
      <h1>Task 2</h1>
      <Table :data="data" :columns="columns">
        <template #table-head-name="{column}">
          <i class="ri-user-smile-line"></i>
          {{ column.title }}
        </template>
  
        <template #table-item-tags="{item}">
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag,i in item.tags" :key="i"
              class="px-2.5 py-0.5 border rounded text-sm"
              :class="tags_color[tag as keyof typeof tags_color]">
              {{ tag }}
            </span>
          </div>
        </template>
  
        <template #table-item-actions="{item}">
          <div class="flex items-center divide-x">
            <span class="cursor-pointer text-blue-500 hover:underline px-2">Invite - {{ item.name }}</span>
            <span class="cursor-pointer text-blue-500 hover:underline px-2">Delete</span>
            <span class="cursor-pointer text-blue-500 hover:underline px-2">More actions<i class="ri-arrow-down-s-line"></i></span>
          </div>
        </template>
  
      </Table>
    </div>
  </div>
</template>

<script setup lang="ts">
import Table from './components/table/table.vue'
import TreeCollapse from './components/tree-collapse/tree-collapse.vue'

import { collapse_data, columns, data, tags_color } from './constants'
</script>