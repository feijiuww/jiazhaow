<template>
  <div class="message">
    <Searchcom/>
    <div class="tab-fix">
        <van-tabs :active="active" offset-top="54px" sticky="ture" animated swipeable="ture" title-active-color="#87CEFA" color="#87CEFA">
        <van-tab title="科目一" sticky>
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
        <van-tab title="科目二">
          <div class="list">
            <div class = "card" v-for="(item,index) in list2" :key = "index" @click="goDetail(item)">
            
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
        <van-tab title="科目三">
          <div class="list">
            <div class = "card" v-for="(item,index) in list3" :key = "index" @click="goDetail(item)">
            
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
        <van-tab title="科目四">
          <div class="list">
            <div class = "card" v-for="(item,index) in list4" :key = "index" @click="goDetail(item)">
            
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
        </van-tabs>
    </div>
    <Tabber/>
  </div>
</template>

<script setup>
import Tabber from '@/components/Tabber.vue'
import Searchcom from '@/components/Searchcom.vue'

import {ref,reactive, onMounted} from 'vue'
import {getList1, getList2, getList3, getList4} from '../../api/api'
import store from '@/store'
import { useRouter } from 'vue-router';
const list1 = ref([])
const list2 = ref([])
const list3 = ref([])
const list4 = ref([])
const picIP = store.state.picIP;
onMounted(()=>{
  getDate();
})
function getDate(){
  getList1().then(res=>{
    list1.value = res;
  })
  getList2().then(res=>{
    list2.value =res;
  })
  getList3().then(res=>{
    list3.value = res;
  })
  getList4().then(res=>{
    list4.value = res;
  })

}
const router = useRouter();
function goDetail(item){
     router.push({
      name:'detail',
      params:item
     })
}
</script>

<style>
.card{

    display: flex;
    border-bottom: 0.5px solid #ddd;
    padding: 5px 0;
 }
 .card-r{
   flex: 6;
   text-align: left;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
 }
 .card-r .title{
    font-weight:570;
    font-size: 16px ;
 }
 .card-r .butt{
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 14px;
 }
 .card-l{
   flex: 4;
 }
 .card-l img{
   width: 130px;
   height: 80px;
   margin: 5px;
 }
 .tab-fix{
  margin-top: 55px;
  padding-right: 10px;
  padding-left:10px ;
  margin-bottom: 50px;
 }

</style>