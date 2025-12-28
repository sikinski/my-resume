<template>
    <div v-if="isOpen" class="modal" @click.self="close">
        <div class="modal-content">
            <button class="modal-close" @click="close">×</button>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})

const close = () => {
    isOpen.value = false
}
</script>

<style lang="sass">
.modal
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0.5)
    display: flex
    align-items: center
    justify-content: center
    z-index: 1000
    padding: 20px
    .modal-content
        position: relative
        background-color: #fff
        border-radius: 10px
        padding: 30px
        max-width: 500px
        width: 100%
        max-height: 90vh
        overflow-y: auto
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px
    .modal-close
        position: absolute
        top: 15px
        right: 15px
        background: none
        border: none
        font-size: 32px
        line-height: 1
        cursor: pointer
        color: #666
        padding: 0
        width: 30px
        height: 30px
        display: flex
        align-items: center
        justify-content: center
        transition: color .3s ease
        &:hover
            color: #000
</style>

