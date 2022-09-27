<template>
<div class="detail2">
    <NavComponentVue/>
   <div class="author">
        <div class="author-l">
            <img :src="picIP+jiache.useravatar" alt="">
        <div class="info">
               <div class="name">
               {{jiache.name}}
        
            </div>
            <div class="time">
                {{jiache.time}}
            </div>
        </div>
           
        </div>
        <div class="author-r">
            <van-button round plain type="primary" size="small" @click="myfun" id="gz" >关注</van-button>
             
        </div>
   </div>
   <div class="text" v-for="(item,index) in list.text" :key = "index">
        <p >&ensp;&ensp;{{item.text}}</p>
   </div>
   <div class="pictures">
        <img :src="picIP+jiache.img">
   </div>
   
   <hr size="8" color="#F0F8FF" />
   <div class="huifu">
         全部回复
    <div class="tubiao">
        <van-icon name="fire-o"/>
          按热门
    </div>
    </div>
   <div class="bottom">  

   <div class="comments" v-for="(item,index) in list.comments" :key = "index">
      <div class="image">
         <img :src="picIP+item.useravatar" alt="">
      </div>
      <div class="comments-r">
        <div class="username">
            {{item.username}}
        </div>
        <div class="content">{{item.content}}</div>
      </div>
    <div class="comments-rr">
        <div class="goodjob">
            <van-icon size="18px" name="good-job-o" />
            {{item.dianzhan}}
        </div>
        <div class="time">{{item.time}}</div>
    </div>
   </div>
   </div>
   <div class="input">
        <van-cell-group inset>
        <van-field
            v-model="text"
            center
            clearable
            autosize
            placeholder="请输入评论">
            <template #button>
            <van-button round size="small" type="primary">发送</van-button>
            </template>
        </van-field>
        </van-cell-group>
   </div>
</div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import NavComponentVue from '@/components/NavComponents.vue';
import {ref,reactive,computed} from 'vue';
import { getComment } from '@/api/api';
import { onMounted } from 'vue';
import { getcomments } from '../../api/api';

const label = ref("关注")

function changstyle(){
  if(label.value=="关注")
  {
    label.value="已关注"
  }else{
    label.value = "关注"
  }
}
function myfun() {
  const elementById = document.getElementById('gz');
  elementById.innerHTML = '已关注';
}
const route = useRoute();
const jiache = route.params;
const store = useStore();
const picIP = store.state.picIP;
const list = ref([])
const listi=jiache.list;
const i=jiache.id;
onMounted(()=>{
  getDate();
})
function getDate(){
    getcomments(listi,i).then(res=>{
    list.value = res;
  })
}

</script>
<style scoped>
 p{
        text-align: left;
        line-height: 150%;
        font-size:14px;
    }
.bottom{
    margin-bottom:50px ;
}
.detail2{

    margin-top: 45px;
    padding: 0 5px;
}
.pictures img{
    width: 80%;
    
}
.title{
    text-align: left;
    font-size: 24px;
    margin-bottom: 10px;
}
.author{
    display: flex;
    justify-content: space-between;
}
.author-l{
    display: flex;
}
.author-l img{
    width: 2.5rem;
  height: 2.5rem;
  border-radius:50% ;
}
.author-r{
    width: 70px;
}
.author button{
    margin-top:4px ;
    width:55px;
    height:28px;
}
.info{
    text-align: left;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.info .name{
    font-weight: 600;
    font-size: 14px; 
}
.info .time{
    font-size: 10px;
    color: #999;
}
.image img{
  width: 2rem;
  height: 2rem;
  border-radius:50% ;
}
.image{
    margin:5px;
}
.comments{
    display: flex;
    padding: 7px 0;
    border: 0.5px  rgb(239, 239, 239);
    border-style:solid  none none  none ;
    
}
h4{
    margin:10px 0;
    text-align: left;
}
.comments-r{
    width: 200px;
    text-align: left;
    margin-left: 5px;  
}
.comments-r .username{
    font-weight: 400;
    font-size: 9px;
    color: #999;
    margin: 10px 0;
}
.comments-r .content{
    margin:4px 0;
    font-size:14px;
    color: black;
}
.comments-rr {
    width: 60px;
    position: relative;
}
.comments-rr .time{
    font-size: 7px;
    color:#999;
    position:absolute;
    right:0;
    bottom:0
}
.comments-rr .goodjob{
    margin-top: 15px;
    margin-left:8px;
    font-size:small;
}
.input{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
}
.huifu{
    color: #2c3e50;
    font-size:16px;
    margin: 10px 0;
    display: flex;
    font: Avenir Helvetica Arial sans-serif;
    font-weight: 800;
    position: relative;
}
.tubiao{
    position:absolute;
    right: 10px;
    top:4px;
    font-size: small;
    font-weight: 500;
}
.text{
    letter-spacing:1px;
}
</style>