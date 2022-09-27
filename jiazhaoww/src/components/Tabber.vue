<template>
  
    <van-tabbar route v-model="active">
  <van-tabbar-item to="/" icon="todo-list">考试</van-tabbar-item>
  <van-tabbar-item to="/message" icon="newspaper-o">资讯</van-tabbar-item>
  <van-tabbar-item to="/about" icon="smile">社区</van-tabbar-item>
  <van-tabbar-item to='/me' icon="manager">我的</van-tabbar-item>
</van-tabbar>
</template>

<script setup>
import { Tabbar } from 'vant';
import { ref } from 'vue';
  

</script>