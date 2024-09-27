<template>
    <button
        @click="$emit('toggleValue')"
        :style="{paddingLeft: deephPadding+'px'}"
        :class="{ 'border-blue-600': active, 'border-transparent': !active }"
        class="hover:bg-gray-200 border-l-4 transition-colors pr-4 py-1.5 cursor-pointer flex items-center gap-2 w-full">
            <button
                :disabled="!hideIcon"
                @click.stop="$emit('toggleOpen')"
                :class="{ 'rotate-90': open, 'pointer-events-none': !hideIcon }"
                class="w-[25px] h-[25px] flex items-center justify-center hover:bg-gray-300 disabled:bg-transparent rounded-full">
                <i v-show="hideIcon" class="ri-arrow-right-s-fill text-xl transition-transform"></i>
            </button>
            <span>{{ name }}</span>
    </button>
</template>

<script setup lang="ts">
defineEmits(['toggleOpen', 'toggleValue'])
defineProps<{
    name: string
    open?: boolean
    active?: boolean
    hideIcon?: boolean
    deephPadding?: number
}>()
</script>