<template>
  <div class="me">
    <div class="header" @click="gouser()">
        <div class="setting">
          <div class="setting-l">
              <van-icon name="scan" size='25px'></van-icon>
          </div>
          <div class="setting-r">
            <div class="r1">
            <van-icon class="iconfont" class-prefix='icon' name='xinxi' size='25px' /></div>
            <div class="r1">
            <van-icon class="iconfont" class-prefix='icon' name='shezhi' size='25px' />
            
            </div>
          </div>
          </div>
        <div class="user2" >     
              <div class="image">
                  <img src="http://127.0.0.1:5300/1.jpg"/>
              </div>
              <div class="usertext">
              <div class="name">
                 未登录
              </div>
              <div class="tongg">
                  当前的考试通过率为0%
              </div>
              </div>    
        </div>
  </div>
        <div class="banner">
             <van-notice-bar left-icon="volume-o" text="我真的没考过驾照——我真的没考过驾照——我真的没考过驾照——我真的没考过驾照——我真的没考过驾照"/>
             <van-tabs  :active="active" type="card" title-active-color="#fff" color="#87CEFA" backgroud="#87CEFA" title-inactive-color="#87CEFA">
                <van-tab title="科目一">
                  <div class="mytab">
                  <div class="mytab1">
                      <div class="mytab11">
                          0
                      </div>
                      <div class="mytab12">
                         累计答题数
                      </div>
                      <div class="mytab13">
                         正确率 0%
                      </div>
                  </div>
                  <div class="mytab2">
                    <div class="mytab11">
                          0
                      </div>
                      <div class="mytab12">
                         模拟考试平均分
                      </div>
                      <div class="mytab13">
                         累计考试次数
                      </div>
                  </div>
                             
                  </div>
                </van-tab>
                <van-tab title="科目二">
                  <div class="mytab">
                  <div class="mytab1">
                      <div class="mytab11">
                          0
                      </div>
                      <div class="mytab12">
                         已掌握项目
                      </div>
                      <div class="mytab13">
                         熟练度 0%
                      </div>
                  </div>
                  <div class="mytab2">
                    <div class="mytab11">
                          0
                      </div>
                      <div class="mytab12">
                         模拟考试
                      </div>
                      <div class="mytab13">
                         当前熟练度
                      </div>
                  </div>
                             
                  </div>
                </van-tab>
                <van-tab title="科目三"><div class="mytab">
                  <div class="mytab1">
                      <div class="mytab11">
                          0
                      </div>
                      <div class="mytab12">
                         已掌握项目
                      </div>
                      <div class="mytab13">
                         当前熟练度 0%
                      </div>
                  </div>
                  <div class="mytab2">
                    <div class="mytab11">
                          0
                      </div>
                      <div class="mytab12">
                         模拟考试
                      </div>
                      <div class="mytab13">
                         当前熟练度
                      </div>
                  </div>
                             
                  </div></van-tab>
                <van-tab title="科目四"><div class="mytab">
                  <div class="mytab1">
                      <div class="mytab11">
                          0
                      </div>
                      <div class="mytab12">
                         累计答题数
                      </div>
                      <div class="mytab13">
                         正确率 0%
                      </div>
                  </div>
                  <div class="mytab2">
                    <div class="mytab11">
                          0
                      </div>
                      <div class="mytab12">
                         模拟考试平均分
                      </div>
                      <div class="mytab13">
                         累计考试次数
                      </div>
                  </div>
                             
                  </div></van-tab>
              </van-tabs>
        </div>
        <hr size="8" color="#F0F8FF" />
        <div class="more">
          <van-grid :border="false"  >
          <van-grid-item  icon="bar-chart-o" text="成绩排行" icon-color="red" />
          <van-grid-item  icon="replay" text="同步数据" icon-color="#7FFF00"/>
          <van-grid-item  icon="upgrade" text="题库更新" icon-color="#6495ED"/>
          <van-grid-item  icon="down" text="下载管理" icon-color="#FF6347"/>
        </van-grid>
        <van-grid :border="false">
          <van-grid-item  icon="like" text="我的收藏" icon-color="#FF69B4"/>
          <van-grid-item  icon="todo-list" text="浏览记录" icon-color="#87CEEB"/>
          <van-grid-item  icon="description" text="我的发表" icon-color="#FFA07A"/>
          <van-grid-item  icon="coupon" text="购车票" icon-color="#DDA0DD"/>
        </van-grid>
        </div>
        <hr size="8" color="#F0F8FF"/>
        <div class="more2"> 
              <van-cell  is-link icon="newspaper-o">
                  <span class="custom-title">我的订单</span> 
              </van-cell>
              <van-cell  is-link icon="paid">
                  <span class="custom-title">我的优惠券</span>
              </van-cell>
              <van-cell  is-link icon="notes-o">
         
                  <span class="custom-title">我的发表</span>
              
              </van-cell>
              <hr size="8" color="#F0F8FF"/>

              <van-cell  is-link icon="good-job-o">
               
                  <span class="custom-title">给App点赞</span>
              
              </van-cell>
              <van-cell  is-link icon="service-o">
               
               <span class="custom-title">帮助与服务</span>
          
           </van-cell>
           <van-cell is-link icon="setting-o">
             
               <span class="custom-title">设置</span>
            
           </van-cell>
              
              

             

        </div>
        <Tabber/>
  </div>
</template>

<script setup>
import Tabber from '@/components/Tabber.vue';
import "@/assets/iconfont/iconfont.css";
import { ref } from '@vue/reactivity';
import { useRouter,useRoute } from 'vue-router';
import { getuser } from '../../api/api';
import { onMounted } from '@vue/runtime-core';

const router = useRouter();
const route = useRoute();

const list = ref([]);
const username="未登陆";
console.log(list);
function gouser(){
      router.push({
      name:'login'
    })}
onMounted(()=>{
  getDate();
})
function getDate(){
  getuser().then(res=>{
    list.value = res;
  })
}
 
</script>

<style>

hr{
  margin: 0;
}
.header{
  width: 100%;
  height: 140px;
  background-color: #87CEFA;
}
.setting{
  display: flex;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  justify-content:space-between ;
}
.user2{
  margin-top:16px ;
  height: 60px;
}
.usertext{
  margin:8px 0 ;
  color: aliceblue;
}
.name{
  text-align: left;
  font-size: 20px;
  font-weight: 600;
}
.tongg{
  margin-top: 6px;
  text-align: left;
  font-size: xx-small;
}
.setting .van-icon{
  font-size: 25px;
  padding-left:10px ;
  padding-top: 10px;
  color: aliceblue;
}
.user-l,.user2{
  display: flex;
}
.image{
  margin:0 16px;
}
.image img{
  width: 58px;
  height: 58px;
  border-radius:50% ;
}
 .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
.setting-r{
  display: flex;
}
.r1{
    padding-right:20px ;
    color: aliceblue;
}
.mytab{
  display: flex;}
.mytab1,.mytab2{
  width: 150px;
  height: 60px;
  margin: 18px 20px;
}
.mytab11{
  margin-bottom: 10px;
  font-size: large;
  font-weight: 600;
}
.mytab12{
  margin: 2px;
  font-size:small;
}
.mytab13{
  
  font-size:xx-small;
}
.more2{
  margin-bottom: 50px;
 
}
.custom-title{
  text-align: left;
}
</style>