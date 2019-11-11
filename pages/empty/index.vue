<template>
<div class="container">
  <nuxt-link to="/">
  <div class="backpress">
     
            <img src="~assets/images/arrow-back.svg" />
      
   </div>
   </nuxt-link>
   <div class="wrapper">
    <div class="content">
      <Lottie ref="lottie" loop autoplay :data="gitAnimation"></Lottie>
      <div class="subtitle">
        <h1>COMING SOON</h1>
        <p>Nothing to See Here!</p>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
import Lottie from 'vue-lottie-ssr'
import gitAnimation from '../../assets/animation/blob-empty.json'

export default {
    name: 'coming soon',
    components: {
      Lottie
  },
  data(){
    return{
      speed: 1,
      gitAnimation
    }
  },
   computed: {
            lottie () {
                return this.$refs.lottie
            }
        },
}
</script>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap");

$width-name: max-device-width;
$target-width: 675px;

.container{
  display: flex;
  flex: 1;
  height: 100vh;

  .backpress {
    position: absolute;
    left: 3%;
    top: 5%;
        background: #1e2127;
        width: 35px;
        height: 35px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .3s ease;

        &:hover{
           box-shadow: 0px 10px 25px rgba(30, 33, 39, 0.2);
        }

         @media screen and ($width-name: $target-width) {
          top: 3%;
          left: 5%;
        }
      }

      .wrapper{
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
      .content{
          text-align: center;

          .subtitle{
            h1{
              color: #9A989F;
              font-family: "Quicksand", sans-serif;
              font-size: 60px;
              font-weight:300;

              @media screen and ($width-name: $target-width) {
                font-size: 32px;
              }
            }

            p{
              color: #9A989F;
              font-family: "Quicksand", sans-serif;
              font-size: 24px;
              font-weight:300;

               @media screen and ($width-name: $target-width) {
                font-size: 18px;
              }
            }
          }
        }
      }

  
}
</style>