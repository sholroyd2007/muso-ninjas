<template>
    <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <input type="text" placeholder="display name" v-model="displayName">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <div class="error" v-if="error">{{ error }}</div>
    <button v-if="!isPending">Sign up</button>
    <button v-if="isPending" disabled>Loading</button>
  </form>
</template>

<script>
import useSignup from'@/composables/useSignup'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    setup(){
        const {error, signup, isPending} = useSignup()
        const router = useRouter()

        const email = ref('')
        const password = ref('')
        const displayName = ref('')

        const handleSubmit = async () => {
            const res = await signup(email.value, password.value, displayName.value)
            if(!error){
                router.push({name: 'UserPlaylists'})
            }
        }

        return{ email, password, displayName, error, handleSubmit, isPending }
    }
}
</script>

<style>

</style>