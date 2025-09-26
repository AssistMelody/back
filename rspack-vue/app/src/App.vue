<template>
  <div>
    <son></son>
    <p>1234</p>
  </div>
</template>

<script>
import { add } from "rspack-utils";

export default {
  data() {
    return {
      main: 1234,
    };
  },
  created(){
    this.name()
  },
  methods:{
    /**
     * 
     */
    name() {
      console.log(add(1,2,3));
      
    }
  }
};
</script>

<style lang="less" scoped>
p{
  color:#f00
}
</style>
