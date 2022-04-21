<template>
  <el-container>
    <Header></Header>
    <el-container>
      <Aside></Aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer>
      这是footer
    </el-footer>
  </el-container>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
  overflow: hidden;
}

.el-header {
  background-color: #eee;
  display: flex;
  align-items: center;
}

.el-main {
  overflow: auto;
}

.el-footer {
  padding: 0;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
