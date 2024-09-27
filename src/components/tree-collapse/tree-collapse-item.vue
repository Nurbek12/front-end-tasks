<template>
    <div>
        <tree-collapse-button
            :open="isOpen"
            :name="item.name"
            :active="model===item.name"
            :deeph-padding="currentDeeph*10"
            :hide-icon="!!(item.childrens&&item.childrens?.length)"

            @toggle-open="isOpen=!isOpen"
            @toggle-value="handleToggle(item.name)"
            />

        <template v-if="item.childrens">
            <div v-show="isOpen">
                <tree-collapse-item
                    v-model="model"
                    v-for="child,i in item.childrens"
                    :deeph="currentDeeph+1"
                    :item="child"
                    :key="i"
                    />
            </div>
        </template>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TreeProps } from '../../types'
import TreeCollapseButton from './tree-collapse-button.vue'

const model = defineModel()
const props = defineProps<{item: TreeProps, deeph?: number}>()

const isOpen = ref(false)
const currentDeeph = (props.deeph||0) + 1

const handleToggle = (value: string) => {
    model.value = model.value !== value ? value : undefined
    
    if(model.value == value && !isOpen.value)
        isOpen.value = false
    else
        isOpen.value = !isOpen.value
}
</script>