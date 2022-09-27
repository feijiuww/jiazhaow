<template>
  <div class="about">
    
        <Searchcom/>
   
    <div class="neir">
        <van-tabs :active="active" sticky="ture" animated swipeable="ture" offset-top="54px" title-active-color="#87CEFA" color="#87CEFA">
        <van-tab title="科目一" sticky offset-top="54px">
                <div class="list">
                    <div class = "card" v-for="(item,index) in list1" :key = "index" >               
                      <div class="one">
                        <div class="userimg"> 
                          <img :src="picIP+item.useravatar"/>
                        </div> 
                        <div class="neirong">
                          <div class="neirongtop" @click="goDetail(item)">
                              <div class="user" >
                                  <div class="id">{{item.name}}</div>
                                  <div class="time">{{item.time}}</div>
                              </div>
                               <div class="title" >
                                {{item.text[0].text}}
                               </div>
                              <div class="image">
                                <img :src="picIP+item.img" alt="">
                              </div>
                              </div>
                               <div class="pinlun">
                                    <div class="pinlun-r">
                                      <van-tag round type="primary" size="medium">科目一</van-tag>
                                    </div>
                                    <div class="pinlun-l">
                                    <van-icon name="thumb-circle-o" size="25px"/>
                                    <div class="pinlunnum">{{item.dianzhan}}</div>
                                    <van-icon name="comment-circle-o" size="25px"/>
                                    <div class="pinlunnum">{{item.pinlun}}</div>
                                  </div>
                               </div>
                        </div> 
                      </div>      
                    </div>    
                </div>
        </van-tab>
        <van-tab title="科目二">
          <div class="list">
                    <div class = "card" v-for="(item,index) in list2" :key = "index" >               
                      <div class="one">
                        <div class="userimg"> 
                          <img :src="picIP+item.useravatar"/>
                        </div> 
                        <div class="neirong">
                          <div class="neirongtop" @click="goDetail(item)">
                              <div class="user" >
                                  <div class="id">{{item.name}}</div>
                                  <div class="time">{{item.time}}</div>
                              </div>
                               <div class="title">
                                {{item.text[0].text}}
                               </div>
                              <div class="image">
                                <img :src="picIP+item.img" alt="">
                              </div>
                              </div>
                               <div class="pinlun">
                                    <div class="pinlun-r">
                                      <van-tag round type="primary" size="medium">科目二</van-tag>
                                    </div>
                                    <div class="pinlun-l">
                                    <van-icon name="thumb-circle-o" size="25px"/>
                                    <div class="pinlunnum">{{item.dianzhan}}</div>
                                    <van-icon name="comment-circle-o" size="25px"/>
                                    <div class="pinlunnum">{{item.pinlun}}</div>
                                  </div>
                               </div>
                        </div> 
                      </div>      
                    </div>    
                </div>
        </van-tab>
        <van-tab title="科目三">
          <div class="list">
                    <div class = "card" v-for="(item,index) in list3" :key = "index" >               
                      <div class="one">
                        <div class="userimg"> 
                          <img :src="picIP+item.useravatar"/>
                        </div> 
                        <div class="neirong">
                          <div class="neirongtop" @click="goDetail(item)">
                              <div class="user" >
                                  <div class="id">{{item.name}}</div>
                                  <div class="time">{{item.time}}</div>
                              </div>
                               <div class="title">
                                {{item.text[0].text}}
                               </div>
                              <div class="image">
                                <img :src="picIP+item.img" alt="">
                              </div>
                              </div>
                               <div class="pinlun">
                                    <div class="pinlun-r">
                                      <van-tag round type="primary" size="medium">科目三</van-tag>
                                    </div>
                                    <div class="pinlun-l">
                                    <van-icon name="thumb-circle-o" size="25px"/>
                                    <div class="pinlunnum">{{item.dianzhan}}</div>
                                    <van-icon name="comment-circle-o" size="25px"/>
                                    <div class="pinlunnum">{{item.pinlun}}</div>
                                  </div>
                               </div>
                        </div> 
                      </div>      
                    </div>    
                </div>
        </van-tab>
        <van-tab title="科目四">
          <div class="list">
                    <div class = "card" v-for="(item,index) in list1" :key = "index" >               
                      <div class="one">
                        <div class="userimg"> 
                          <img :src="picIP+item.useravatar"/>
                        </div> 
                        <div class="neirong">
                          <div class="neirongtop" @click="goDetail(item)">
                              <div class="user" >
                                  <div class="id">{{item.name}}</div>
                                  <div class="time">{{item.time}}</div>
                              </div>
                               <div class="title">
                                {{item.text[0].text}}
                               </div>
                              <div class="image">
                                <img :src="picIP+item.img" alt="">
                              </div>
                              </div>
                               <div class="pinlun">
                                    <div class="pinlun-r">
                                      <van-tag round type="primary" size="medium">科目四</van-tag>
                                    </div>
                                    <div class="pinlun-l">
                                    <van-icon name="thumb-circle-o" size="25px"/>
                                    <div class="pinlunnum">{{item.dianzhan}}</div>
                                    <van-icon name="comment-circle-o" size="25px"/>
                                    <div class="pinlunnum">{{item.pinlun}}</div>
                                  </div>
                               </div>
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
import {getList5, getList6, getList7, getList8} from '../../api/api'
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
  getList5().then(res=>{
    list1.value = res;
  })
  getList6().then(res=>{
    list2.value =res;
  })
  getList7().then(res=>{
    list3.value = res;
  })
  getList8().then(res=>{
    list4.value = res;
  })
}

const router = useRouter();
function goDetail(item){
     router.push({
      name:'detail2',
      params:item
     })
}

</script>

<style scoped>
.neir{
  margin-bottom: 50px;
  margin-top: 55px;
  padding-right: 10px;
  padding-left:10px ;
}
.card{
  width: 100%;
  
}
.one{
  display: flex;
  
}
.userimg img{
  width: 2.5rem;
  height: 2.5rem;
  margin: 10px;
}
.neirong{
  width:250px;
}
.neirong .image{
  margin:10px 0;
  display: flex;
}
.neirong .image img{
  width: 100px;
  height: 100px;
  border-radius:0;
}
.user{
  text-align:left;
  
  padding-right: 10px;
  padding-top: 10px;
  height: 40px;
}
.title{
  width:240px;
  text-align: left;
  overflow:hidden; /*溢出的部分隐藏*/
  white-space:nowrap; /*文本不换行*/
  text-overflow:ellipsis;
}
.userimg img{
  width: 2.5rem;
  height: 2.5rem;
  border-radius:50% ;
}
.time{
  width: auto;
  height:20px ;
  font-weight: 300;
  color:rgba(61, 61, 61, 0.639);
  font-size:x-small;

}
.id{
  font-weight:600;
  color: black;
  font-size:small;
  height: 20px;
}
.pinlun{
  width: 250px;
  height: 25px;
  display: flex;
  line-height: 25px;
  justify-content: space-between;
  margin-top:8px ;
}
.pinlun-l{
  display: flex;
  
}
.pinlunnum{
  font-size: small;
  margin-right: 8px;
  margin-left: 3px;
}
</style>


