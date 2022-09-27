<template>
<div class = "search-fix" >
        <van-search
        v-model="value"
        show-action
        label="地址"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        background="#87CEFA"
        shape="round"
        >
        <template #action>
            <div class="serch"  @click="onClickButton">搜索</div>
        </template>
        </van-search>
        </div>
</template>

<script>
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
  setup() {
    const value = ref('');
    const onSearch = (val) => Toast(val);
    const onClickButton = () => Toast(value.value);
    return {
      value,
      onSearch,
      onClickButton,
    };
  },
};


</script>

<style>
.search-fix{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 54px;
   z-index:1;
}
.serch{
  
  border-radius:50%
}
</style>