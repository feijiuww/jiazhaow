<template>
<div class="testmu">
    <van-config-provider :theme-vars="themeVars">
    <van-nav-bar
    title="科目一顺序练习"
    left-text=""
    left-arrow
    z-index="999"
    @click-left="onClickLeft"
    /></van-config-provider>
    <div class="testmu_neir">
        <div class="testmuheader">
            <div class="testmuheadern">
                新规多练习
            </div>
            <div class="testmuheadern">
                考试更放心
            </div>
        </div>
        <div class="testmuneir">
             <div class="testmuneir1">
                  <div class="testmuneir_teb">
                    <div class="testmuneir_tou">
                         <img src="http://127.0.0.1:5300/2.jpg" alt="">
                    </div>
                    <div class="testmuneir_name">
                         在线无聊jpg
                    </div>
                  </div>
                  <div class="testmuneir_left">
                    <div class="testmuneir_left1">
                         40%
                    </div>
                    <div class="testmuneir_left2">
                        预测考试通过率
                    </div>
                </div>
             </div>
             <div class="testmuneir2">
                <div class="testmuneir2n">
                     <div class="testmuneir2ntop">
                        2000
                     </div>
                     <div class="testmuneir2nbut">
                        未做题
                     </div>
                </div>
                <div class="testmuneir2n">
                    <div class="testmuneir2ntop">
                        200
                     </div>
                     <div class="testmuneir2nbut">
                        已做题
                     </div>
                </div>
                <div class="testmuneir2n">
                    <div class="testmuneir2ntop">
                        64%
                    </div>
                    <div class="testmuneir2nbut">
                      答错率
                    </div>
                </div>
             </div>
             <div class="testmuneir3">
                 <div class="testmuneir3n"><van-button type="primary" size="large" round to="/bei">继续练习</van-button></div>
                 <div class="testmuneir3n"><van-button type="primary" size="large" round  plain>精简500题</van-button></div>
             </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
 const themeVars = {
      navBarBackgroundColor : "#87CEFA",
      navBarTitleTextColor :'#fff'
    };
function onClickLeft(){
  router.push({
    name:"home"
  })
}
</script>

<style>
.testmu_neir{
    width: 100%;
    height: 470px;
    background:repeating-linear-gradient(to top,rgb(231, 244, 245),#87CEFA);
}
.testmuheader{
    color: #fff;
    font-size: large;
    font-weight: 600;
    font-style: oblique;
    padding: 20px 20px 10px 20px;
}
.testmuheadern{
    text-align: left;
    margin-left:30px ;
    margin-top:5px;
}
.testmuneir{
    width: 90%;
    height: 280px;
    background-color: #fff;
    margin: 0 16px;
    padding:16px 4px;
    border-radius:4%
}
.testmuneir_tou img{
    width: 60px;
    border-radius:50% ;
}
.testmuneir1,.testmuneir_teb{
    display: flex;
}
.testmuneir1{
    justify-content: space-between;
}
.testmuneir_name{
   line-height: 64px;
   font-size: x-small;
   font-weight: 500;
   color: rgb(76, 76, 76);
}
.testmuneir_tou{
    margin-right: 8px;
}
.testmuneir_left1{
    font-size: 30px;
    font-weight: 600;
    color: red;
}
.testmuneir_left2{
    font-size: x-small;
   font-weight: 500;
   color: rgb(138, 138, 138);
}
.testmuneir2ntop{
  font-weight: 600;
}
.testmuneir2nbut{
  font-size: x-small;
  margin-top:8px ;
}
.testmuneir2n{
   margin: 0 26px;
}
.testmuneir2{
    display: flex;
    margin: 15px;
}
.testmuneir3n{
    width: 250px;
    padding: 8px 24px;
}
</style>
