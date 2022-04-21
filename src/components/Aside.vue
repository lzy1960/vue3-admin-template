<template>
  <el-aside width="200px">
    <el-menu default-active="2" class="el-menu-vertical" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon>
          <icon-menu />
        </el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-button class="expand-icon" type="text" @click="isCollapse = !isCollapse">
        <template #icon>
          <el-icon :size="28">
            <Expand v-show="isCollapse"></Expand>
            <Fold v-show="!isCollapse"></Fold>
          </el-icon>
        </template>
      </el-button>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Menu as IconMenu,
  Location,
  Fold,
  Expand,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang='scss' scoped>
.el-menu-vertical {
  height: 100%;

  &:not(.el-menu--collapse) {
    width: 100%;
    min-height: 400px;
  }

  .expand-icon {
    position: absolute;
    padding: 0 20px;
    bottom: 20px;
    right: 0;
  }
}
</style>
