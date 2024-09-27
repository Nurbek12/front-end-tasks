<template>
    <table class="w-full bg-gray-50 text-left">
        <thead class="bg-gray-100 border-b divide-x">
            <th v-for="column,i in columns" :key="i" class="px-4 py-2 font-medium">
                <slot v-if="$slots[`table-head-${column.key}`]" :name="`table-head-${column.key}`" :column="column" :col_index="i" />
                <span v-else>{{ column.title }}</span>
            </th>
        </thead>

        <tbody>
            <tr v-for="item,j in data" :key="j" class="hover:bg-gray-100 border-b">
                <td v-for="column,i in columns" :key="i" class="px-4 py-2" :class="column.customClass">
                    <slot v-if="$slots[`table-item-${column.key}`]" :name="`table-item-${column.key}`" :item="item" :row_index="j" :col_index="i" />
                    <span v-else>{{ item[column.key] }}</span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { TableColumns } from '../../types'

defineProps<{
    data: any[]
    columns: TableColumns[]
}>()
</script>