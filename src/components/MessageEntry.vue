<template>
    <div class="m-messageEntry" :class="{ '--currentUser': isCurrentUser }">
        <figure class="m-messageEntry__thumbnail" v-tooltip="`${message.from.firstName} ${message.from.lastName}`">
            <img :src="message.from.thumbnail" >
        </figure>
        <div class="m-messageEntry__message" :title="message.date">
            <p class="m-messageEntry__messageText">
                <pre>{{ message.message }}</pre>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: Object,
            required: true
        }
    },
    computed: {
        isCurrentUser() {
            return this.$store.getters.isCurrentUser(this.message.from.id)
        }
    }
}
</script>