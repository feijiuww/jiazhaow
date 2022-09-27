<template>
    <div class="pinlun">
        <van-nav-bar
            title="发表话题"
            left-text=""
            right-text="发表"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />
            
            <van-cell-group inset>
            <van-field
                v-model="message"
                rows="4"
                autosize
                type="textarea"
                placeholder="分享你的心得和经验吧~"
                
            />
            </van-cell-group>
            <div class="tu">
            <van-uploader :after-read="afterRead" />
        </div>
        <div class="tu">
        <van-tag type="primary" size="medium" round>添加标签</van-tag>
    </div>
    </div>
</template>
<script setup>
import NavComponentVue from '@/components/NavComponents.vue';
const onClickLeft = () => history.back();
    const onClickRight = () => Toast('按钮');
    const afterRead = (file) => {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    };
</script>


<style scoped>
.pinluntext{
    width: 100%;
    height: 200px;
}
.tu{
    display:flex;
    padding: 0 20px;
}

</style>