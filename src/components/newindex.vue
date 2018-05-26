<template>
  <div style="width: 100%;height: 100%">
    <div style="width: 100%;height: 100%">

      <div class="bgDiv bgDiv1" :style="bgDiv1Style">
        <div class="bgDiv bgDivC bgDiva" :style="bgDivaStyle"></div>
        <div class="bgDiv bgDivC bgDivb" :style="bgDivbStyle" style="background-color:brown"></div>

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
            'height': this.fullHeight * 0.3 + 'px'
          }
          this.bgDivbStyle = {
            'height': this.fullHeight * 0.7 + 'px'
          }

        },
      },
      mounted(){
        this.init()
        document.onmousemove = function(e){
          console.log(e.pageY)
          this.bgDivaStyle = {
            'height': e.pageY + 'px'
          }
          this.bgDivbStyle = {
            'height': this.fullHeight - e.pageY + 'px'
          }
        }
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
  /*.bgDiva{*/
    /*height: 30%;*/
  /*}*/
  /*.bgDivb{*/
    /*height: 70%;*/
  /*}*/

</style>
