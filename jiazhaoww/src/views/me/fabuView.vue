<template>
    <div class="fabu">
        <NavComponentVue/>
        <div class="header">
            <div class="user2">
              <div class="image">
                  <img src="http://127.0.0.1:5300/2.jpg"/>
              </div>
              <div class="usertext">
                <div class="name">
                    在线无聊jpg
                </div>
                <div class="tongg">
                    该车友还未想到如何介绍自己
                </div>
              </div>  
            </div> 
            <div class="zl">
                <span class="class1">10</span>
                <span class="class2">关注</span>
                <span class="class1">0</span>
                <span class="class2">粉丝</span>
                <span class="class1">100</span>
                <span class="class2">获赞</span>
                <span class="class1">4</span>
                <span class="class2">帮助</span>
            </div> 
            <hr size="8" color="#F0F8FF"/>
        </div>
        <div class="diann">
            <van-tabs v-model:active="active" title-active-color="#87CEFA" color="#87CEFA" swipeable="ture" offset-top="128px">
            <van-tab title="资讯" offset-top="128px">
                <div class="n1">
                    <span>精华&nbsp;&nbsp;0</span>
                    <span>主题&nbsp;&nbsp;0</span>
                </div>
                <div class="list">
            <div class = "card" v-for="(item,index) in list1" :key = "index" @click="goDetail(item)">
              <div class="card-l">
                     <img :src="picIP+item.useravatar"/>
              </div>
              <div class="card-r">
                  <div class="title">{{item.title}}</div>
                  <div class="butt">
                    <div class="yu">{{item.yuedu}}</div>
                    <div class="time">{{item.time}}</div>
                  </div>
              </div>
        
          </div>
        </div>
            </van-tab>
            <van-tab title="评论" offset-top="128px">
                <div class="n1">
                    <span>精华&nbsp;&nbsp;0</span>
                    <span>主题&nbsp;&nbsp;0</span>
                </div>
                <van-empty description="什么都没有哦~" />
            </van-tab>
            </van-tabs>
        </div>
        
    </div>
    <div class="add">
      <van-icon name="add-o" color="rgb(112, 188, 255)" size="50px" @click="gopinlun()"/>
    </div>
</template>
<script setup>
import NavComponentVue from '@/components/NavComponents.vue';
import { reactive ,ref,onMounted} from 'vue';
import {getList1, getList5, getList3, getList4} from '../../api/api'
import store from '@/store'
import { useRouter } from 'vue-router';
const list1 = ref([])
const list5 = ref([])
const picIP = store.state.picIP;
onMounted(()=>{
    getDate();
})

function getDate(){
  getList1().then(res=>{
    list1.value = res;
  })}
  getList5().then(res=>{
    list1.value = res;
  })
  const router = useRouter();
function gopinlun(){
     router.push({
      name:'pinlun',
     })
}
</script>
<style>
.add{
  width: 80px;
  height: 80px;
  position: fixed;
  z-index: 999;
  right: 0;
  bottom: 0;
}
.fabu .zl{
    margin: 15px 0;
    display: flex;
    margin-left: 20px;
}
.fabu .class1{
    font-weight: 600;
    font-size: 16px;
    margin:0 5px ;
}

.fabu .class2{
    font-weight:400;
    font-size: 10px;
    color: rgb(63, 177, 239);
    text-align: center;
}
.fabu .header{
  width: 100%;
  height: 128px;
  background-color: rgb(255, 255, 255);
  margin-top:45px;
}
.fabu .user2{
  margin-top:16px ;
  height: 60px;
}
.fabu .usertext{
  margin:8px 0 ;
  color: rgb(112, 188, 255);
}
.fabu .name{
  text-align: left;
  font-size: 20px;
  font-weight: 600;
}
.fabu .tongg{
  margin-top: 6px;
  text-align: left;
  font-size: xx-small;
}
.fabu .user2{
  display: flex;
}
.fabu .image{
  margin:0 16px;
}
.fabu .image img{
  width: 58px;
  height: 58px;
  border-radius:50% ;
}
.dinne{
    width: 100%;
    padding: 0 8px;
    margin-top:128px;
}
.fabu .n1{
  background-color: #F0F8FF;
  display: flex;
  padding: 5px 10px;
  font-size: xx-small;
}
.n1 span{
    margin-right: 10px;
}

.fabu .card{

display: flex;
border-bottom: 0.5px solid #ddd;
padding: 5px 0;
}
.fabu .card-r{
flex: 6;
text-align: left;
display: flex;
flex-direction: column;
justify-content: space-around;
}
.fabu .card-r .title{
font-weight:570;
font-size: 16px ;
}
.fabu .card-r .butt{
display: flex;
justify-content: space-between;
color: #999;
font-size: 14px;
}
.fabu .card-l{
flex: 4;
}
.fabu .card-l img{
width: 130px;
height: 80px;
margin: 5px;
}

</style>