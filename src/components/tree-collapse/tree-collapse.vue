<template>
    <div class="bg-gray-100">
        <tree-collapse-item
            v-for="item,i in items"
            v-model="model"
            :item="item"
            :key="i" />
    </div>
</template>

<script setup lang="ts">
import { TreeProps } from '../../types'
import TreeCollapseItem from './tree-collapse-item.vue'

const model = defineModel()
const emits = defineEmits()
defineProps<{items: TreeProps[]}>()
</script>