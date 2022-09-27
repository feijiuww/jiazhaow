<template>
  <div class="home">
    <Searchcom/>
	<div class="homenr">
        <van-tabs :active="active" sticky="ture" animated swipeable="ture" offset-top="54px" title-active-color="#87CEFA" color="#87CEFA">
        <van-tab title="科目一">
        <div class="k1">
          <div class="k1banner">
                <van-swipe :autoplay="3000" lazy-render  :width="308">
                <van-swipe-item v-for="image in images" :key="image">
                  <img :src="image" />
                </van-swipe-item>
                </van-swipe> 
          </div>
          <div class="k1neir">
              <div class="k1n1">
                <div class="k1n11">
                  <div class="k1n11tu">
                    <van-icon name="gem" size="30" color="#F08080"/>
                  </div>
                  <div class="k1n11zi">
                    <span>VIP课程</span>
                  </div>
                </div>
                <div class="k1n11">
                  <div class="k1n11tu">
                    <van-icon name="play-circle" size="30" color="#87CEFA"/>
                  </div>
                  <div class="k1n11zi">
                    <span>专项练习</span>
                  </div>
                </div>
                <div class="k1n11">
                  <div class="k1n11tu">
                  <van-icon name="cluster" size="30" color="#00CED1"/>
                  </div>
                  <div class="k1n11zi">
                    <span>图标技巧</span>
                  </div>
                </div>
                <div class="k1n11">
                  <div class="k1n11tu">
                   <van-icon name="column" size="30" color="#FFA07A"/>
                  </div>
                  <div class="k1n11zi">
                    <span>新规必考</span>
                  </div>
                </div>
              </div>
              <div class="k1n2">
                <div class="kn" @click="gotestmu()">
                  <van-config-provider :theme-vars="themeVars">
                  <van-circle
                      v-model:current-rate="currentRate"
                      :rate="rate"
                      :stroke-width="60"
                      :color="gradientColor"
                      :layer-color="layerColor1"
                      :fill="Fill1"
                      text="顺序练习"
                    />
                  </van-config-provider>
                </div>
               
                <div class="kn" @click="gotest()">
                  <van-config-provider :theme-vars="themeVars">
                  <van-circle
                      v-model:current-rate="currentRate2"
                      :rate="rate"
                      :stroke-width="60"
                      :color="gradientColor2"
                      :layer-color="layerColor2"
                      :fill="Fill2"
                      text="模拟考试"  
                    />
                  </van-config-provider>
                </div>
              </div>
              <div class="k1n3">
                <div class="k1n11">
                  <div class="k1n11tu">
                  <van-icon name="hot" size="30" color="#DDA0DD" />
                  </div>
                  <div class="k1n11zi">
                  <span>精简500题</span>
                  </div>
                </div>
                <div class="k1n11">
                  <div class="k1n11tu">
                    <van-icon name="video" size="30" color="#B0E0E6" />
                  </div>
                  <div class="k1n11zi">
                    <span>直播课</span>
                  </div>
                </div>
                <div class="k1n11">
                  <div class="k1n11tu">
                    <van-icon name="map-marked" size="30" color="	#FFBB66" />
                  </div>
                  <div class="k1n11zi">
                    <span>真实考场模拟</span>
                  </div>
                </div>
                <div class="k1n11">
                  <div class="k1n11tu">
                  <van-icon name="bookmark" size="30" color="	#9F88FF" />
                  </div>  
                  <div class="k1n11zi">
                    <span>错题&nbsp;收藏</span>
                    </div>
                </div>
              </div>
          </div>
          
        </div>   
        </van-tab>
        <van-tab title="科目二">
        <div class="k2">
          <div class="k2k">
            <div class="k2kzi">
              考试项目讲解
            </div>
          </div>
          <div class="k2h">
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/k1.jpg" alt="">
              </div>
              <div class="k2nzi">
                倒车入库
              </div>
            </div>
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/k2.jpg" alt="">
              </div>
              <div class="k2nzi">
                侧方停车
              </div>
            </div>
          </div>
          <div class="k2h">
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/k3.jpg" alt="">
              </div>
              <div class="k2nzi">
                坡道顶点停车和起步
              </div>
            </div>
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/k4.jpg" alt="">
              </div>
              <div class="k2nzi">
                曲线行驶
              </div>
            </div>
          </div>
          <div class="k2h">
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/k5.jpg" alt="">
              </div>
              <div class="k2nzi">
                直角转弯
              </div>
            </div>
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/k6.jpg" alt="">
              </div>
              <div class="k2nzi">
                基础驾驶
              </div>
            </div>
          </div>
          </div>
        </van-tab>
        <van-tab title="科目三">
          <div class="k2">
          <div class="k2k">
            <div class="k2kzi">
              考试项目讲解
            </div>
          </div>
          <div class="k2h">
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/n1.jpg" alt="">
              </div>
              <div class="k2nzi">
                模拟夜间灯光
              </div>
            </div>
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/n2.jpg" alt="">
              </div>
              <div class="k2nzi">
                上车准备
              </div>
            </div>
          </div>
          <div class="k2h">
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/n3.jpg" alt="">
              </div>
              <div class="k2nzi">
                起步
              </div>
            </div>
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/n4.jpg" alt="">
              </div>
              <div class="k2nzi">
                直道行驶
              </div>
            </div>
          </div>
          <div class="k2h">
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/n5.jpg" alt="">
              </div>
              <div class="k2nzi">
                变更车道
              </div>
            </div>
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/n6.jpg" alt="">
              </div>
              <div class="k2nzi">
                通过路口
              </div>
            </div>
            </div>
          <div class="k2h">
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/n7.jpg" alt="">
              </div>
              <div class="k2nzi">
                加减档操作
              </div>
            </div>
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/n8.jpg" alt="">
              </div>
              <div class="k2nzi">
                路口左转弯
              </div>
            </div>
          </div>
          <div class="k2h">
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/n9.jpg" alt="">
              </div>
              <div class="k2nzi">
                路口右转弯
              </div>
            </div>
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/n10.jpg" alt="">
              </div>
              <div class="k2nzi">
                会车
              </div>
            </div>
          </div>
          <div class="k2h">
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/n11.jpg" alt="">
              </div>
              <div class="k2nzi">
                超车
              </div>
            </div>
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/n12.jpg" alt="">
              </div>
              <div class="k2nzi">
                掉头
              </div>
            </div>
          </div>
          <div class="k2h">
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/n13.jpg" alt="">
              </div>
              <div class="k2nzi">
                靠边停车
              </div>
            </div>
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/n14.jpg" alt="">
              </div>
              <div class="k2nzi">
                通过人行横道
              </div>
            </div>
          </div>
          <div class="k2h">
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/n15.jpg" alt="">
              </div>
              <div class="k2nzi">
                通过学校区域
              </div>
            </div>
            <div class="k2n">
              <div class="k2ntu">
                <img src="http://127.0.0.1:5300/n16.jpg" alt="">
              </div>
              <div class="k2nzi">
                通过公共汽车站
              </div>
            </div>
          </div>
          </div>
        </van-tab>
        <van-tab title="科目四">
          <div class="k1">
          <div class="k1banner">
                <van-swipe :autoplay="3000" lazy-render  :width="308">
                <van-swipe-item v-for="image in images" :key="image">
                  <img :src="image" />
                </van-swipe-item>
                </van-swipe> 
          </div>
          <div class="k1neir">
              <div class="k1n1">
                <div class="k1n11">
                  <div class="k1n11tu">
                    <van-icon name="gem" size="30" color="#F08080"/>
                  </div>
                  <div class="k1n11zi">
                    <span>VIP课程</span>
                  </div>
                </div>
                <div class="k1n11">
                  <div class="k1n11tu">
                    <van-icon name="play-circle" size="30" color="#87CEFA"/>
                  </div>
                  <div class="k1n11zi">
                    <span>专项练习</span>
                  </div>
                </div>
                <div class="k1n11">
                  <div class="k1n11tu">
                  <van-icon name="cluster" size="30" color="#00CED1"/>
                  </div>
                  <div class="k1n11zi">
                    <span>图标技巧</span>
                  </div>
                </div>
                <div class="k1n11">
                  <div class="k1n11tu">
                   <van-icon name="column" size="30" color="#FFA07A"/>
                  </div>
                  <div class="k1n11zi">
                    <span>新规必考</span>
                  </div>
                </div>
              </div>
              <div class="k1n2">
                <div class="kn">
                  <van-config-provider :theme-vars="themeVars">
                  <van-circle
                      v-model:current-rate="currentRate3"
                      :rate="rate"
                      :stroke-width="60"
                      :color="gradientColor"
                      :layer-color="layerColor1"
                      :fill="Fill1"
                      text="顺序练习"
                    />
                  </van-config-provider>
                </div>
               
                <div class="kn">
                  <van-config-provider :theme-vars="themeVars">
                  <van-circle
                      v-model:current-rate="currentRate4"
                      :rate="rate"
                      :stroke-width="60"
                      :color="gradientColor2"
                      :layer-color="layerColor2"
                      :fill="Fill2"
                      text="模拟考试"  
                    />
                  </van-config-provider>
                </div>
              </div>
              <div class="k1n3">
                <div class="k1n11">
                  <div class="k1n11tu">
                  <van-icon name="hot" size="30" color="#DDA0DD" />
                  </div>
                  <div class="k1n11zi">
                  <span>精简500题</span>
                  </div>
                </div>
                <div class="k1n11">
                  <div class="k1n11tu">
                    <van-icon name="video" size="30" color="#B0E0E6" />
                  </div>
                  <div class="k1n11zi">
                    <span>直播课</span>
                  </div>
                </div>
                <div class="k1n11">
                  <div class="k1n11tu">
                    <van-icon name="map-marked" size="30" color="	#FFBB66" />
                  </div>
                  <div class="k1n11zi">
                    <span>真实考场模拟</span>
                  </div>
                </div>
                <div class="k1n11">
                  <div class="k1n11tu">
                  <van-icon name="bookmark" size="30" color="	#9F88FF" />
                  </div>  
                  <div class="k1n11zi">
                    <span>错题&nbsp;收藏</span>
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const images = [
	"http://127.0.0.1:5300/104.png",
	"http://127.0.0.1:5300/103.png"
    ];
    const currentRate = 50;
    const gradientColor = {
      '0%': '#66FFFF',
      '100%': '#D1BBFF',
    };
    const layerColor1 = "#E0FFFF "
    const Fill1 = "	#CCEEFF"
    const currentRate2 = 90;
    const gradientColor2 = {
      '0%': '#FFCCCC',
      '100%': '#CCCCFF',
    };
    const layerColor2 = "#FFF8DC  "
    const Fill2 = "#FFC8B4"
    const themeVars = {
      circleTextColor : '#fff' ,
    };
    const currentRate3 = 100;
    const currentRate4 = 100;
    const router = useRouter();
    function gotestmu(){
      router.push({
      name:'testmu',
     })
    }
    function gotest(){
      router.push({
      name:'test',
     })
    }
</script>
<style>
.homenr{
  margin-bottom: 50px;
  margin-top: 55px;
  padding-right: 10px;
  padding-left:10px ;
}
.k1banner{
	height: 100px;
	width: 328px;
}
.k1banner img{
	width: 308px;
	height: 100px;
}
.k1neir{
  display: flex;
  margin: 0 8px;
}
.k1n11{
  font-size:x-small;
  font-weight:520;
  margin: 8px;
}
.k1n11tu{
  margin: 4px;
}
.k1n2{
  margin: 10px 10px;
}
.kn{
  margin:10px 0;
}
.k1n1{
  margin: 3px 10px;
}
.k2ntu img{
  width: 140px;
  height: 80px;
  border-radius:5%
}
.k2h{
  display: flex;
  margin: 8px;
}
.k2n{
  margin: 5px;
}
.k2nzi{
  text-align: left;
  padding-left:10px ;
  padding-top:5px ;
  font-size: small;
  font-weight:600;
}
.k2kzi{
  font-weight: 700;
  font-size: large;
  text-align: left;
  margin: 0 20px;
  margin-top: 15px;
}
</style>