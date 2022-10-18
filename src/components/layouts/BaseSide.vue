<template>
  <el-tabs tab-position="left" v-model="activeTab">
    <el-tab-pane label="General" name="general">
      <GeneralView/>
    </el-tab-pane>
    <el-tab-pane label="Users" name="users">
      <UsersView/>
    </el-tab-pane>
    <el-tab-pane label="Commands" name="commands">
      <CommandsView/>
    </el-tab-pane>
    <el-tab-pane label="Task" name="fourth">
      <div>
        <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" />
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeTab = ref('general')
</script>

<style>
.ep-tabs {
  width: 100%;
}
</style>
