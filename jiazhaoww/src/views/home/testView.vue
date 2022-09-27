<template>
    <div class="test">
        <div class="test_top">
           <van-nav-bar  left-arrow  @click-left="onClickLeft" placeholder title="模拟考试" fixed>
                <template #right>
                    <van-icon name="search" size="18" />
                </template>
           </van-nav-bar>
        </div>
        <div class="test_neir" >
            <div class="testlist" v-for="(item,index) in list" :key= "index">
            <div class="test_text">
                <van-tag type="primary">选择题</van-tag> &nbsp;&nbsp;{{item.title}}
            </div>
            <div class="test_xuan">
            <van-config-provider :theme-vars="themeVars">
                <van-radio-group v-model="checked[index]">
                    <van-radio name="1">{{item.xuanxianga}}</van-radio>
                    <van-radio name="2">{{item.xuanxiangb}}</van-radio>
                    <van-radio name="3">{{item.xuanxiangc}}</van-radio>
                    <van-radio name="4">{{item.xuanxiangd}}</van-radio>
                </van-radio-group>
            </van-config-provider>
            </div>
        </div>
        <div class="testbuttom">
            <div class="testmuneir3n"><van-button type="primary" size="large" >提交</van-button></div>
        </div>
        </div>
</div>
</template>

<script setup>
import { ref ,onMounted} from "vue";
import { gettest } from "../../api/api";
const list=ref([])
const onClickLeft=()=>history.back();
const checked = ref(['1']);
const currentPage = ref(1);
onMounted(()=>{
  getDate();
})
const themeVars = {
    radioLabelMargin: "10px",
    radioSize:"2.5",
    };
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };

function getDate(){
  gettest().then(res=>{
    list.value = res;
  })}
  
</script>

<style>
.testbutton{
    margin-top:40px;
}
.ttr{
    position: absolute;
    right: 0;
}

.tt1,.tt,.ttn{
    display: flex;
}
.ttnzi{
    margin-left: 4px;
    font-size: small;
}
.ttn{
    margin-right: 8px;
    margin-left:7px ;
}
.tt1{
    width: 60px;
    margin-right: 40px;
}
.tt{
    justify-content:space-between;
}
.ttzi{
    margin-left: 8px;
}
.test_but{
    background-color: aliceblue;
    width: 100%;
    position:fixed;
    bottom: 0;
}
.test_text{
    text-align: left;
    margin-top:8px;
}
.test_xuan{
  margin-top:20px;
}
.test_neir{
    padding:0  20px;
   
}
</style>