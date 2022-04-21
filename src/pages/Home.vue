<template>
  <div class="home">
    <p>这是Home页</p>
    <p>路由是{{ route.name }}</p>
    <p>路径是{{ route.path }}</p>
    <el-button @click="goToDetail(token)" type="primary">跳转到详情页</el-button>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import { useStore } from '../store/index';

const route = useRoute()
const router = useRouter()
const store = useStore()
const { token } = storeToRefs(store)
const goToDetail = (token: string) => {
  router.push({
    name: 'detail',
    params: {
      token: token
    }
  })
}
</script>

<style lang='scss' scoped>
</style>
