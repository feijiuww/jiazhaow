<template>
    <div class="modpassword">
        <NavComponentVue/>
        <div class="word">
            <van-form @submit="onSubmit" @failed="onFailed">
  <van-cell-group inset>
    <van-field
      v-model="username"
      name="原密码"
      label="原密码"
      placeholder="原密码"
      :rules="[{ required: true, message: '请输入原密码' }]"
    />
    <van-field
      v-model="password1"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ pattern, required: true, message: '请填写密码' }]"
    />
    <van-field
      v-model="password2"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{  pattern,required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
            </div>
    </div>
</template>

<script setup>
    import NavComponentVue from '@/components/NavComponents.vue';
    import { identifier } from '@babel/types';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { Dialog } from 'vant';

    const router = useRouter();
    const username = ref('');
    const password1 = ref('');
    const password2 = ref('');
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;//至少8个字符，至少1个大写字母，1个小写字母和1个数字,不能包含特殊字符（非数字字母）：
    const onSubmit = (values) => { 
            if(password1.value==password2.value)
            {
                console.log('submit', values);
                goDetail();
            }
            else{
                Dialog.alert({
                    width:'280px',
                    message: '两次输入密码不一样',
                    height:'80px',
                    }).then(() => {
                    // on close
                    });
            }
            
    };
    const onFailed = (errorInfo) => {  
      console.log('failed', errorInfo);
      Dialog.alert({
                    width:'280px',
                    message: '密码格式错误',
                    height:'80px',
                    }).then(() => {
                    // on close
                    });
    };
    function goDetail(){
     router.push({
      name:'login',

     })
}

    
</script>
<style>
     .back{
  margin: 15px 20px;
  margin-top: 10px; 
  
}
.word{
    margin-top: 50px;
}
</style>