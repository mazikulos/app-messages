<template>
  <main>
    <conversation-area :isLoading="messagesStatus" :messages="messages" />
  </main>
</template>

<script>
import ConversationArea from '@/components/ConversationArea.vue'

export default {
    name: 'HomeView',
    components: {
        ConversationArea
    },
    computed: {
        messages() {
            return this.$store.getters.getMessages
        },
        messagesStatus() {
            return this.$store.getters.getMessagesStatus
        }
    },
    created() {
        this.$store.dispatch('fetchMessages')
        this.$store.dispatch('fetchUser')
    }
}
</script>

