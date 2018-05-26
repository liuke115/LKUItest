<template>
  <div style="width: 100%;height: 100%">
    <!--<button style="position: absolute;z-index: 999;top: 100px;right: 100px" @click="moveDIV">动一动</button>-->
    <div style="width: 100%;height: 100%">
      <div class="bgDiv bgDiv1" :style="bgDiv1Style">
        <div class="bgDiv bgDivC bgDiva" :style="bgDivaStyle"></div>
        <div class="bgDiv bgDivC bgDivb" :style="bgDivbStyle" style="background-color:rgba(195, 195, 195, 0.5)"></div>
      </div>
      <div class="contentDiv" :style="bgDivbStyle">
        <div style="padding-left: 50px;padding-top: 25px">
          <div style="font-size: 12px; color: darkgrey;">
            <i class="fa fa-cloud fa-2x" style="margin-right: 10px;color: #3b3b3b;vertical-align:sub"></i>
           捷泰天域信息技术有限公司 | <b>刘珂实验</b>
          </div>
          <div style="background-color: darkgrey;width: 350px;height: 2px;margin-top: 5px"></div>
          <div style="background-color: darkgrey;width: 500px;height: 1px;"></div>
          <div style="color: rgba(90,90,90,0.8);margin-top: 5px;font-size: 32px">GIStack for Manager 5.0</div>
          <div style="color: rgba(90,90,90,0.8);margin-top: 10px;font-size: 8px">
            载入页面...<br>
            获取组织列表...<br>
            获取用户信息...<br>
            获取站点信息...<br>
            获取站点详情...<br>
            创建站点...<br>
            正在创建ArcGIS Server站点集群...<br>
            正在配置WebAdapter...<br>
            站点创建成功...<br>
            渲染完毕...<br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // document.onmousemove = function(e){
  //   console.log(e)
  // }

    export default {
      name: "newindex",
      data(){
        return {
          fullHeight: null,
          fullWidth: null,
          bgDiv1Style: null,
          bgDivaStyle: null,
          bgDivbStyle: null,
          yy:null
        }
      },
      watch: {
        yy(n,o){
          this.moveDIV(n)
        }
      },
      methods:{
        init(){
          this.fullHeight = document.documentElement.clientHeight
          this.fullWidth = document.documentElement.clientWidth
          this.bgDiv1Style = {
            'left': this.fullHeight * 1.732 / 6 + 'px'
          }
          this.bgDivaStyle = {
            'height': this.fullHeight * 0.3 + 'px',
            'left': this.fullHeight * 1.5 * 1.732 / 3  + 'px'
          }
          this.bgDivbStyle = {
            'height': this.fullHeight * 0.7 + 'px'
          }
        },
        moveDIV(n) {
          this.bgDivaStyle = {
            'height': n + 'px',
            'left': n*1.5 * 1.732 / 3 + 'px'
          }
          this.bgDivbStyle = {
            'height': this.fullHeight - n + 'px'
          }
        },
        mouseMove(){
          const that = this
          document.onmousemove = function(e){
            that.yy = e.pageY
          }
        }
      },
      mounted(){
        this.init()
        this.mouseMove()
      }
    }
</script>

<style scoped>
  .bgDiv1{
    width: 500px;
    height: 100%;
    position: absolute;
    top: 0;
    transform: skewX(30deg);
  }
  .bgDiv{
    background-color: rgba(195, 195, 195, 0.3);
  }
  .bgDivC{
    width: 100%;
  }
  .bgDiva{
    transform: skewX(120deg);
    position: relative;
    /*left: 250px;*/
  }
  /*.bgDivb{*/
    /*height: 70%;*/
  /*}*/
  .contentDiv{
    width: 100%;
    background-color: rgba(195, 195, 195, 0.1);
    position: absolute;
    left: 0;
    bottom: 0;
    color: rgba(195, 195, 195, 1);
  }
  /*i,.fa {vertical-align:bottom}*/

</style>
