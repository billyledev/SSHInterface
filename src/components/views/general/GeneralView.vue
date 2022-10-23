<template>
  <el-form ref="formRef">
    <p class="left">Global SSH settings</p>
    <el-form-item label="SSH server port">
      <el-input/>
    </el-form-item>
    <el-form-item label="SSH banner">
      <el-input type="textarea" rows="4"/>
    </el-form-item>
    <p class="left">Prompt settings</p>
    <el-form-item label="Default prompt">
      <el-input/>
    </el-form-item>
    <el-form-item label="Command continuation prompt">
      <el-input/>
    </el-form-item>
    <el-form-item label="Selection prompt">
      <el-input/>
    </el-form-item>
    <el-form-item label="Script lines prompt">
      <el-input/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">Save</el-button>
      <el-button @click="resetForm(formRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<!--

  General settings
    port
    banner
  Prompts settings

-->

<script lang="ts" setup>
import { ref } from 'vue';
import type { FormInstance } from 'element-plus';

const formRef = ref<FormInstance>();

const submitForm = (form: FormInstance | undefined) => {
  if (!form) return;
  console.log('Submit!');
};

const resetForm = (form: FormInstance | undefined) => {
  if (!form) return;
  form.resetFields();
};
</script>

<style>
.left {
  text-align: left;
}
</style>
