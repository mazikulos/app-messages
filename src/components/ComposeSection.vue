<template>
    <form @submit.prevent="sendMessage" @keydown.enter.prevent="sendMessage" @input="setTextareaHeight">
        <div class="m-composeSection">
            <textarea ref="textarea" v-model="message" class="m-composeSection__textarea">
            </textarea>
            <button type="submit" class="m-composeSection__btn">
                <icon-send />
            </button>
        </div>
    </form>
</template>

<script>
import IconSend from '@/components/icons/IconSend.vue'

export default {
    name: 'ComposeSection',
    data() {
        return {
            message: this.value || ''
        }
    },
    components: {
        IconSend
    },
    props: {
        value: {
            type: String,
            required: true
        }
    },
    methods: {
        sendMessage() {
            if (this.message === '') return
            this.$emit('submit', this.message)
            this.message = ''
        },
        setTextareaHeight() {
            this.$refs.textarea.style.height = 'auto'
            const scrollHeight = this.$refs.textarea.scrollHeight
            const lineHeight = parseFloat(getComputedStyle(this.$refs.textarea).lineHeight)
            const rows = Math.min(Math.floor(scrollHeight / lineHeight), 3)
            this.$refs.textarea.style.height = (lineHeight + 3) * rows + 'px'
        },

    }
}
</script>