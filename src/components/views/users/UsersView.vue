<template>
  <!-- Users table -->
  <el-table :data="filteredTableData">
    <el-table-column prop="username" label="Username" align="center"/>
    <el-table-column prop="authtype" label="Authentication" align="center">
      <template #default="scope">
        {{authTypes[scope.row.authtype]}}
      </template>
    </el-table-column>
    <el-table-column align="right">
      <template #header>
        <el-row>
          <el-col :span="16">
            <el-input v-model="state.search" placeholder="Type to search"/>
          </el-col>
          <el-col :span="8">
            <el-button link type="primary" @click="add()">Add user</el-button>
          </el-col>
        </el-row>
      </template>
      <template #default="scope">
        <el-button link type="primary" @click="edit(scope.row)">Edit</el-button>
        <el-button link type="primary" @click="remove(scope.row)">Remove</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- Add user dialog -->
  <create-user-dialog
    :show-dialog="state.showAddDialog"
    :auth-types="authTypes"
    :selected-user="state.selected"
    @confirm="state.showAddDialog = false"
    @closed="state.showAddDialog = false"
  />

  <!-- Edit user dialog -->
  <update-user-dialog
    :show-dialog="state.showEditDialog"
    :auth-types="authTypes"
    :selected-user="state.selected"
    @confirm="state.showEditDialog = false"
    @closed="state.showEditDialog = false"
  />

  <!-- Delete user dialog -->
  <delete-user-dialog
    :show-dialog="state.showDeleteDialog"
    :username="state.selected.username"
    @confirm="state.showDeleteDialog = false"
    @closed="state.showDeleteDialog = false"
  />
</template>

<script lang="ts" setup>
import { computed, ref, reactive } from 'vue';
import type { UploadInstance } from 'element-plus';

import { User } from '~/types/user';
import { AuthTypes } from '~/types/auth-types';

interface UsersState {
  showAddDialog: boolean;
  showEditDialog: boolean;
  showDeleteDialog: boolean;
  search: string;
  selected: User;
};

const authTypes: AuthTypes = {
  pass: 'Password',
  pubkey: 'Public key',
};

const emptyUser: User = {
  username: '',
  authtype: 'pass',
  password: '',
}

const initialState: UsersState = {
  showAddDialog: false,
  showEditDialog: false,
  showDeleteDialog: false,
  search: '',
  selected: {
    ...emptyUser,
  },
};

const state = reactive(initialState);
const uploadRef = ref<UploadInstance>();

const usersData: User[] = [
  {
    username: 'foo',
    authtype: 'pass',
    password: 'Password1',
  },
  {
    username: 'bar',
    authtype: 'pubkey',
    password: '',
  },
];

const filteredTableData = computed(() => 
  usersData.filter(
    (data) => !state.search || data.username.toLowerCase().includes(state.search.toLowerCase())
  )
);

const clearSelectedUser = () => {
  state.selected = { ...emptyUser };
}

const selectUser = (user: User) => {
  state.selected = { ...user };
};

const add = () => {
  clearSelectedUser();
  state.showAddDialog = true;
};

const edit = (user: User) => {
  selectUser(user);
  state.showEditDialog = true;
};

const remove = (user: User) => {
  selectUser(user);
  state.showDeleteDialog = true;
};
</script>

<style>
</style>
