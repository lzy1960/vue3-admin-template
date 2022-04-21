<template>
  <div class="detail">
    <el-page-header content="detail" @back="router.back" />
    <p>这是Detail页</p>
    <p>路由是{{ route.name }}</p>
    <p>路径是{{ route.path }}</p>
    <p>token {{ route.params.token }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
</script>

<style lang='scss' scoped>
</style>
