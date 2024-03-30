<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const router = useRouter()
    return { router };
  }
}
</script>
