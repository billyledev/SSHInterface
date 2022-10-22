<template>
  <el-dialog v-model="showDialog" width="30%" align-center @closed="$emit('closed')" title="New user">
    <el-form label-position="top" justify="center">
      <el-form-item label="Username">
        <el-input
          v-model="selectedUser.username"
          required
        />
      </el-form-item>
      <el-form-item label="Authentication type">
        <el-col :span="24">
          <el-radio-group v-model="selectedUser.authtype" class="ml-4">
            <el-radio v-for="(val, key) in authTypes" :label="key" size="large">
              {{val}}
            </el-radio>
          </el-radio-group>
        </el-col>
      </el-form-item>
      <el-form-item label="Authentication secrets">
        <el-col :span="24">
          <el-input
            v-if="selectedUser.authtype === 'pass'"
            v-model="selectedUser.password"
            type="password"
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
        </el-col>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="success" @click="$emit('confirm')">
          Create
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { UploadFilled } from '@element-plus/icons-vue';

defineProps(['showDialog',  'authTypes', 'selectedUser']);
defineEmits(['confirm', 'closed']);
</script>

<style>
</style>
