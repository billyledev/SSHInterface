<template>
  <el-dialog v-model="showDialog" widht="30%" align-center @closed="$emit('closed')"
    :title="`${selectedUser.username} account settings`"
  >
    <el-radio-group v-model="selectedUser.authtype" class="ml-4">
      <el-radio v-for="(val, key) in authTypes" :label="key" size="large">
        {{val}}
      </el-radio>
    </el-radio-group>
    <el-input
      v-if="selectedUser.authtype === 'pass'"
      v-model="selectedUser.password"
      type="password"
      placeholder="Password"
      show-password
    />
    <el-upload
      v-else
      ref="uploadRef"
      drag
      action="https://localhost:8080/upload"
      :auto-upload="false"
      :limit="1"
    >
      <el-icon class="ep-icon--upload">
        <upload-filled/>
      </el-icon>
      <div class="el-upload__text">
        Drop your public key here or <em>click to upload</em>
      </div>
      <template #tip>
        <div class="ep-upload__tip">
          text/plain files with a size less than 10kb
        </div>
      </template>
    </el-upload>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="$emit('closed')">Cancel</el-button>
        <el-button type="success" @click="$emit('confirm')">Save</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { UploadFilled } from '@element-plus/icons-vue';

defineProps(['showDialog', 'authTypes', 'selectedUser']);
defineEmits(['confirm', 'closed']);
</script>

<style>
</style>
