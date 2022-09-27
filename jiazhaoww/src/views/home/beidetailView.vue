<template>
           <van-nav-bar  left-arrow  @click-left="onClickLeft" placeholder title="背题练习" fixed>
                <template #right>
                    <van-icon name="search" size="18" @click="showPopup"/>
                </template>
           </van-nav-bar>
           <div class="beidetail">
               <div class="beidetail_title">
                    考友互动
               </div>
               <div class="jingcai">
                     <div class="t">
                        精华点评
                     </div>
                     <div class="jiangcain" v-for="(item,index) in list.slice(0,2)" :key="index">
                        <div class="t_img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="tn" >
                            <div class="tnname">
                                <div>
                                {{item.name}}
                                </div>
                                <div class="ic">
                                   {{item.dianzan}}<van-icon name="thumb-circle-o" size="25px" @click="dianzan(item)"/>
                                    <van-icon name="smile-o" size="25px" @click="showShare = true"/>
                                </div>
                            </div>
                            <div class="tntext">
                               &nbsp;&nbsp; {{item.text}}
                            </div>
                        </div>
                     </div>
               </div>
               <div class="quanbu" >
                     <div class="t">
                        全部点评
                     </div>
                     <div class="quanbun" v-for="(item,index) in list" :key="index">
                        <div class="t_img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="tn" >
                            <div class="tnname">
                                <div>
                                {{item.name}}
                                </div>
                                <div class="ic">
                                    {{item.dianzan}}
                                   <van-icon name="thumb-circle-o" size="25px"  @click="dianzan(item)" />
                                   <van-icon name="smile-o" size="25px" @click="showShare = true"/>
                                </div>

                            </div>
                            <div class="tntext">
                                &nbsp;&nbsp;{{item.text}}
                            </div>
                        </div>
                     </div>
               </div>
           </div>
           <div class="debut">
            <van-cell-group inset>
            <van-field
                v-model="text"
                center
                clearable
                enterkeyhint
                placeholder="请输入评论"
            >
                <template #button>
                <van-button size="small" type="primary" @click="add">发送</van-button>
                </template>
            </van-field>
            </van-cell-group>
            <van-share-sheet
                v-model:show="showShare"
                title="立即分享给好友"
                :options="options"
                @select="onSelect"
                />
        </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
  const color1=ref('')
  const onClickLeft = () => history.back();
  const value = ref('');
  const list = reactive([
    {id:1,name:"勉励的酸奶",dianzan:99,img:"http://127.0.0.1:5300/1.jpg",text:"《道路交通安全违法行为记分管理办法》第八条 ，机动车驾驶人有下列交通违法行为之一，一次记12分：（三）使用伪造、变造的机动车号牌、行驶证、驾驶证、校车标牌或者使用其他机动车号牌、行驶证的。"},
    {id:2,name:"用户123",dianzan:999,img:"http://127.0.0.1:5300/8.jpg",text:"学到了"},
    {id:3,name:"用户2333",dianzan:9999,img:"http://127.0.0.1:5300/10.jpg",text:"不太明白吧"},
    {id:4,name:"用户3444",dianzan:99999,img:"http://127.0.0.1:5300/3.jpg",text:"很简单"},
    {id:5,name:"用户4555",dianzan:9999,img:"http://127.0.0.1:5300/9.jpg",text:"多刷几次就记住了"},
    {id:6,name:"用户5666",dianzan:9999,img:"http://127.0.0.1:5300/5.jpg",text:"明天必过"},
    {id:7,name:"用户6777",dianzan:999,img:"http://127.0.0.1:5300/6.jpg",text:"还是好好看题"},
    {id:8,name:"用户7888",dianzan:99,img:"http://127.0.0.1:5300/7.jpg",text:"不太懂"},
  ])
  const name=ref("")
  const text = ref("")
  const flag = ref('1')
  function dianzan(item){
    if(flag.value==1)
    {
        item.dianzan++;
        flag.value=0;
        color1='blue'
    }
    else{
        item.dianzan--;
        flag.value=1
    }
  }
  function add(index){

    list.push({
        id:9,
        img:"http://127.0.0.1:5300/2.jpg",
        dianzan:0,
        name:"在线无聊jpg",
        text:text.value
    })
  }
  function remove(index){
    list.splice(index,1)
  }
  const showShare = ref(false);
    const options = [
      { name: '微信', icon: 'wechat' },
      { name: '微博', icon: 'weibo' },
      { name: '复制链接', icon: 'link' },
      { name: '分享海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' },
    ];

    const onSelect = (option) => {
      Toast(option.name);
      showShare.value = false;
    };
</script>

<style>
.ic{
    position: absolute;
    right: 10px;
    padding: 2px 0;
    line-height: 20px;
}
.beidetail_title{
    font-weight: 800;
    margin: 15px 0;
}
.t{
    font-weight: 600;
    font-size: small;
    text-align: left;
    padding:8px;
}
.beidetail{
    margin-bottom: 53px;
}
.debut{
    width: 100%;
    position: fixed;
    bottom: 0;
    padding:0 8px;
    background-color: white;
}
.t_img{
    margin:0 10px;
}
.tn .tnname{
    font-size: small;
    margin: 8px 0;
}
.tn .tntext{
    line-height:25px
}
.tn{
    text-align: left;
}
.quanbun ,.jiangcain{
    display: flex;
    padding: 8px;
}
.t_img img{
    width: 40px;
    border-radius:50% ;
}
.tnname{
    display: flex;
}
</style>