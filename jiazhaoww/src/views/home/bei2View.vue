<template>
    <div class="test">
        <div class="test_top">
           <van-nav-bar  left-arrow  @click-left="onClickLeft" placeholder title="背题练习" fixed>
                <template #right>
                    <van-icon name="search" size="18" @click="showPopup"/>
                </template>
           </van-nav-bar>
        </div>
        <div class="test_neir" >
            <div class="testlist">
            <div class="test_text">
                <van-tag type="primary">选择题</van-tag> &nbsp;&nbsp;{{list.title}}
            </div>
            <div class="test_xuan">
            <van-config-provider :theme-vars="themeVars">
                <van-radio-group v-model="checked">
                    <van-radio name="1">{{list.xuanxianga}}</van-radio>
                    <van-radio name="2">{{list.xuanxiangb}}</van-radio>
                    <van-radio name="3">{{list.xuanxiangc}}</van-radio>
                    <van-radio name="4">{{list.xuanxiangd}}</van-radio>
                </van-radio-group>
            </van-config-provider>
            </div>
        </div>
       
        </div>
        <div class="xiati">
            <div class="xiati1">
            <van-button icon="arrow-left" type="primary" to='/bei'/>
           </div>
                <div class="xiati2">
            <van-button icon="arrow" type="primary" to='/bei3'/>
        </div>
        </div>
        <div class="test_but" >
           
                <div class="tt">
                    <div class="tt1">
                        <div class="ttu">
                            <van-icon name="star-o" />
                        </div>
                        <div class="ttzi">
                            收藏
                        </div>
                    </div>
                    <div class="tt1">
                        <div class="ttn">
                            <van-icon name="checked" color="blue"/>
                        <div class="ttnzi">
                            34
                        </div>
                        </div>
                        <div class="ttn">
                            <van-icon name="clear" color="red"/>
                        <div class="ttnzi">
                            0
                        </div>
                        </div>
                    </div>
                    <div class="tt1">
                        <div class="ttr">
                        <van-icon name="apps-o" />
                    </div>
                    </div>
                    
                </div>
             <van-popup v-model:show="show" position="bottom" :style="{ height: '40%' }" round >
                <div class="jie">
                 <div class="daan">
                    答案：{{list.daan}}
                 </div>
                 <div class="jiexi">
                    解析：<br>&nbsp;&nbsp;{{list.jiexi}}
                 </div>
                </div>
             </van-popup>
            </div>
</div>
</template>

<script setup>
import { ref ,onMounted} from "vue";
import { useRouter } from "vue-router";
import { gettest1 } from "../../api/api";
const list=ref('')
const router = useRouter();
const checked = ref('');
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
  gettest1(2).then(res=>{
    list.value = res;
  })}
function onClickLeft(){
    router.push({
        name:'testmu'
    })
}
</script>

<style>
.xiati1{
    position:absolute;
    left: 10px;
    bottom:30px;
}
.xiati2{
    position:absolute;
    right: 10px;
    bottom:30px;
}
.xiati{
    margin: 10px;
}
.jie{
    text-align: left;
}
.daan
{
    margin:20px 20px 10px 20px;
}
.jiexi{
    margin:10px 20px 10px 20px;
}
.testbutton{
    margin-top:20px;
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
    background-color: rgb(253, 253, 253);
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
    margin-bottom: 20px;
}
</style>