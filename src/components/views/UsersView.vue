<template>
  <!-- Users table -->
  <el-table :data="tableData">
    <el-table-column prop="username" label="Username" align="center"/>
    <el-table-column prop="authtype" label="Authentication" align="center">
      <template #default="scope">
        {{authTypes[scope.row.authtype]}}
      </template>
    </el-table-column>
    <el-table-column label="" align="center">
      <template #default="scope">
        <el-button link type="primary" @click="edit(scope.row)">Edit</el-button>
        <el-button link type="primary" @click="remove(scope.row)">Remove</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- Edit user dialog -->
  <el-dialog v-model="state.showEditDialog" widht="30%" align-center
    :title="`${state.selected.username} account settings`"
  >
    <el-radio-group v-model="state.selected.authtype" class="ml-4">
      <el-radio v-for="(val, key) in authTypes" :label="key" size="large">
        {{val}}
      </el-radio>
    </el-radio-group>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="state.showEditDialog = false">Cancel</el-button>
      </span>
    </template>
  </el-dialog>

  <!-- Delete user dialog -->
  <el-dialog v-model="state.showDeleteConfirm" width="30%" align-center>
    <span>Do you really want to remove {{state.selected.username}} account?</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="state.showDeleteConfirm = false">Cancel</el-button>
        <el-button type="danger" @click="state.showDeleteConfirm = false">
          Delete
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

interface User {
  username: string;
  authtype: string;
};

interface AuthTypes {
  [key: string]: string
};

const authTypes: AuthTypes = {
  pass: 'Password',
  pubkey: 'Public key',
};

const state = reactive({
  showEditDialog: false,
  showDeleteConfirm: false,
  selected: {
    username: '',
    authtype: '',
  },
});

const tableData = [
  {
    username: 'foo',
    authtype: 'pass'
  },
  {
    username: 'bar',
    authtype: 'pubkey'
  },
];

const selectUser = (user: User) => {
  state.selected = { ...user };
};

const edit = (user: User) => {
  selectUser(user);
  state.showEditDialog = true;
};

const remove = (user: User) => {
  selectUser(user);
  state.showDeleteConfirm = true;
};
</script>

<style>
</style>
