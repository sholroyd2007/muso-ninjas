<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/ninja.png" alt="Ninja Image" />
      <h1>
        <router-link :to="{ name: 'Home' }">Muso Ninjas</router-link>
      </h1>
      <div class="links">
        <div v-if="user">
          <router-link :to="{ name: 'CreatePlaylist'}">Create Playlist</router-link>
            <button @click="handleClick" >Logout</button>
        </div>
        <div v-else>
            <router-link class="btn" v-if="!user" :to="{ name: 'Signup' }">Sign Up</router-link>
            <router-link class="btn" v-if="!user" :to="{ name: 'Login' }">Log In</router-link>          
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from "@/composables/useLogout";
import getUser from "@/composables/getUser";
import { useRouter } from 'vue-router'
export default {
  setup() {
    const { logout, error, isPending } = useLogout()
    const router = useRouter()
    const { user } = getUser()

    const handleClick = async () => {
      await logout()
      console.log('user logged out')
      router.push({name: 'Login'})
    }

    return {  handleClick, user }
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav img {
  max-height: 60px;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
</style>