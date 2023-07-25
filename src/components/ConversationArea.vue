<template>
    <div class="o-conversationArea">
        <div class="o-conversationArea__messages">
            <div v-if="isLoading">Fetching data...</div>
            <message-entry v-else-if="messages.length > 0" v-for="message in messages" :key="message.id" :message="message" />
            <div v-else>This conversation is empty</div>
        </div>
        <compose-section v-model="message" @submit="sendMessage" />
    </div>
</template>

<script>
import MessageEntry from '@/components/MessageEntry.vue'
import ComposeSection from '@/components/ComposeSection.vue'

export default ({
    name: 'ConversationArea',
    data() {
        return {
            message: '',
        }
    },
    props: {
        messages: {
            type: Array,
            required: true
        },
        isLoading: {
            type: Boolean,
            default: false
        }
    },
    components: {
        MessageEntry,
        ComposeSection
    },
    methods: {
        scrollToBottom() {
            const messagesEl = this.$el.querySelector('.o-conversationArea__messages')
            messagesEl.scrollTop = messagesEl.scrollHeight + 100
        },
        sendMessage(message) {
            this.$store.dispatch('sendMessage', message)
            this.message = ''
        }
    },
    watch: {
        messages: {
            handler: function() {
                this.$nextTick(() => {
                    this.scrollToBottom()
                })
            },
            deep: true
        }
    },
    created() {
        this.$nextTick(() => {
            this.scrollToBottom()
        })
    }
})
</script>