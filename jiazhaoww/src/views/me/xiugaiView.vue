<template>
    <div class="xiugai">
        <NavComponentVue/>
        <div class="mytext">
            <hr size="20" color="#F0F8FF"/>
  
            <van-cell is-link  @click="show = true" >
                <span class="custom-title">头像</span>
            </van-cell>
            <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" />
            <!-- 输入任意文本 -->
            <van-field v-model="text" label="昵称" />
            <!-- 输入手机号，调起手机号键盘 -->
            <van-field v-model="tel" type="tel" label="手机号" />
            
            
            <van-field
                    v-model="result"
                    is-link
                    readonly
                    name="area"
                    label="地区选择"
                    placeholder="点击选择省市区"
                    @click="showArea = true"
                  />
                  <van-popup v-model:show="showArea" position="bottom">
                    <van-area
                      :area-list="areaList"
                      @confirm="onConfirm"
                      @cancel="showArea = false"
                    />
                  </van-popup>
                  <van-field
                      v-model="value"
                      is-link
                      readonly
                      name="calendar"
                      label="生日"
                      placeholder="点击选择日期"
                      @click="showCalendar = true"
                    />
                    <van-calendar v-model:show="showCalendar" @confirm="onConfirm1" />


                    
                      <van-field
                        v-model="message"
                        rows="2"
                        autosize
                        label="签名"
                        type="textarea"
                        maxlength="50"
                        placeholder="请输入签名"
                        show-word-limit
                      />
                   
            
            
        </div>
        <div class="back">
              <van-button type="primary" size="large" round to="/Myselfyes">保存</van-button>
             </div>
    </div>
</template>
<script setup>
import NavComponentVue from '@/components/NavComponents.vue';
import { ref } from '@vue/reactivity';
import { areaList } from '@vant/area-data';
    const tel = ref('');
    const text = ref('');
    const digit = ref('');
    const number = ref('');
    const password = ref('');
    
    const result = ref('');
    const showArea = ref(false);
    const onConfirm = (areaValues) => {
      showArea.value = false;
      result.value = areaValues
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('/');
    };
    const value= ref('');
    const showCalendar = ref(false);
    const onConfirm1 = (date) => {
      value.value = `${date.getMonth() + 1}/${date.getDate()}`;
      showCalendar.value = false;
    };


    const show = ref(false);
    const actions = [
      { name: '本地上传' },
      { name: '使用我的微信头像' },
      { name: '历史头像' },
    ];
    const onSelect = (item) => {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      show.value = false;
      Toast(item.name);
    };
</script>

<style>
    .mytext{
        margin-top: 40px;
    }
    .back{
  margin: 15px 20px;
  margin-top: 10px; 
  
}
</style>