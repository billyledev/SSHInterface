<template>
  <el-dialog v-model="showDialog" width="30%" align-center @closed="$emit('closed')" title="Remove user">
    <span>Do you really want to remove {{username}} account?</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="$emit('closed')">Cancel</el-button>
        <el-button type="danger" @click="$emit('confirm')">Delete</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
defineProps(['showDialog', 'username']);
defineEmits(['confirm', 'closed']);
</script>

<style>
</style>
