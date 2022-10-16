<template>
  <el-table :data="tableData">
    <el-table-column prop="username" label="Username" align="center"/>
    <el-table-column prop="authtype" label="Authentication" align="center"/>
    <el-table-column label="" align="center">
      <template #default="scope">
        <el-button link type="primary" @click="edit(scope.$index, scope.row)">Edit</el-button>
        <el-button link type="primary">Remove</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
interface User {
  username: string;
  authtype: string;
}

const edit = (index: number, row: User) => {
  console.log(index);
  console.log(row);
}

const tableData = [
  {
    username: 'foo',
    authtype: 'key'
  },
  {
    username: 'bar',
    authtype: 'key'
  },
]
</script>

<style>
</style>
