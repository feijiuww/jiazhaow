<template>
    <div class="login">
        <NavComponentVue/>
        <div class="pass">
        
<van-form @submit="onSubmit" submit-on-enter>
  <van-cell-group inset >
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请输入正确内容' }]"
    
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{pattern, required: true, message: '请输入正确内容' }]"
       
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
  <VanDialog></VanDialog>
  
</van-form>
        </div>
        
    </div>
</template>
<script setup>
import NavComponentVue from '@/components/NavComponents.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Dialog } from 'vant';

const username = ref('');
const password = ref('');
const router = useRouter();
const user_name = "404";
const user_password = "123456"
const VanDialog = Dialog.Component;

 const onSubmit = (values) => {
  if(username.value==user_name&&password.value==user_password)
  {
    console.log('submit', values);
    goDetail();
  }
  else{
    console.log('err', values);
    Dialog.alert({
      width:'280px',
      message: '账号或密码错误',
      height:'80px',
    }).then(() => {
      // on close
    });
  }
};
function goDetail(){
     router.push({
      name:'Myselfyes',

     })
}


const show = ref(true);
const value = ref('')
</script>
<style>
.login{
    width: 100%;
    height: 700px;
    
}
.pass{
    padding-top:80px;
}
</style>