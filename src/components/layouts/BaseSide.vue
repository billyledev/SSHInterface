<template>
  <el-tabs v-model="activeName" tab-position="left">
    <el-tab-pane label="User" name="first">
      <div>
        <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" />
      </div>
    </el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('first')
</script>

<style>
.ep-tabs {
  width: 100%;
}
</style>
