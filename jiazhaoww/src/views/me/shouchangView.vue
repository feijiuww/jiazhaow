<template>
    <div class="shouchang">
        <NavComponentVue/>
        <div class="shou">
            <van-tabs class="shoutitle" v-model:active="active" offset-top="45px" sticky="ture" animated swipeable="ture" title-active-color="#87CEFA" color="#87CEFA">
            <van-tab  v-for="(item,index) in list" :key="index" :title="item.title" sticky>
                <div class="list">
            <div class = "card" v-for="(items,index) in list1" :key="index" @click="goDetail(items)">
              <div class="card-l">
                     <img :src="picIP+items.useravatar"/>
              </div>
              <div class="card-r">
                  <div class="title">{{items.title}}</div>
                  <div class="butt">
                    <div class="yu">{{items.yuedu}}</div>
                    <div class="time">{{items.time}}</div>
                  </div>
              </div>
        
          </div>
        </div>
            </van-tab>
</van-tabs>
        </div>
    </div>
</template>
<script setup>
import NavComponentVue from '@/components/NavComponents.vue';
import { reactive ,ref,onMounted} from 'vue';
import {getList1, getList2, getList3, getList4} from '../../api/api'
import store from '@/store'

const list1 = ref([])
const picIP = store.state.picIP;
const list =reactive([{
    title:"试题"
},{
    title:"驾校"
},{
    title:"帖子"
},{
    title:"视频"
},{
    title:"订阅"
},{
    title:"车型"
},{
    title:"文章"
},{
    title:"车系"
}])
onMounted(()=>{
    getDate();
})

function getDate(){
  getList1().then(res=>{
    list1.value = res;
  })}

</script>
<style>
.shou .list{
    margin-top:45px ;
}
.shou .card{

display: flex;
border-bottom: 0.5px solid #ddd;
padding: 5px 0;
}
.shou .card-r{
flex: 6;
text-align: left;
display: flex;
flex-direction: column;
justify-content: space-around;
}
.shou .card-r .title{
font-weight:570;
font-size: 16px ;
}
.shou .card-r .butt{
display: flex;
justify-content: space-between;
color: #999;
font-size: 14px;
}
.shou .card-l{
flex: 4;
}
.shou .card-l img{
width: 130px;
height: 80px;
margin: 5px;
}

</style>