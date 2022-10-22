<template>
  <el-dialog v-model="showDialog" width="30%" align-center :title="title">
    <span>Do you really want to remove {{state.selected.username}} account?</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="showDialog = false">Cancel</el-button>
        <el-button type="danger" @click="showDialog = false">
          Delete
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>import { ref } from 'vue';

const showDialog = ref(false);
</script>

<style>
</style>
