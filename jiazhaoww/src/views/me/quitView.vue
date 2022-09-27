<template>
    <div class="quit">
        <NavComponentVue/>
        <div class="quit1">
        <van-cell is-link  to="modpassword">
               <span class="custom-title">更改密码</span>
        </van-cell>
            <van-cell is-link >
               <span class="custom-title">账号注销</span>
            </van-cell>
        </div>
    </div>
</template>
<script setup>
import NavComponentVue from '@/components/NavComponents.vue';
</script>
<style>
    .quit1{
        margin-top:50px ;
    }
</style>