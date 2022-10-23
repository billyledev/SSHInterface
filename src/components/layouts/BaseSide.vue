<template>
  <el-tabs tab-position="left" v-model="activeTab">
    <el-tab-pane label="General" name="general">
      <GeneralView/>
    </el-tab-pane>
    <el-tab-pane label="Accounts" name="accounts">
      <UsersView/>
    </el-tab-pane>
    <el-tab-pane label="Commands" name="commands">
      <CommandsView/>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeTab = ref('general');
</script>

<style>
.ep-tabs {
  width: 100%;
}

.ep-tabs__content {
  padding: 1em;
}
</style>
