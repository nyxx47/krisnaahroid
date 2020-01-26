<template>
  <div class="container">
    <div class="content">
      <div class="navigation-bar">
        <div class="backpress">
          <nuxt-link to="/">
            <img src="~assets/images/arrow-back.svg" />
          </nuxt-link>
        </div>
        <div class="social">
          <ul class="social">
            <li>
              <a href="https://www.linkedin.com/in/ahroidlife/" target="_blank">IN</a>
            </li>
            <li>
              <a href="https://www.instagram.com/user.ahroidlife/" target="_blank">IG</a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100008872393804" target="_blank">FB</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="section-hero">
        <div class="inner-section-hero">
          <img src="~assets/images/logo-lunafreya.svg" alt="lunafreya" />
          <div class="text-section-hero">
            <p>Lunafreya is a UI Kit created to help you introduce your shoppping app, boost your creativity and save you time.</p>
          </div>
          <div class="line-holder"></div>
        </div>
      </div>
      <div class="section-screens-holder">
        <div class="screens-wrapper">
          <div class="screen1">
            <img src="~assets/images/screen-1.png" alt="screen 1" />
          </div>
          <div class="screen2">
            <img src="~assets/images/screen-2.2.png" alt="screen 2.2 " />
            <img src="~assets/images/screen-2.png" alt="screen 2 " />
          </div>
          <div class="screen3">
            <img src="~assets/images/screen-3.2.png" alt="screen 3.2 " />
            <img src="~assets/images/screen-3.1.png" alt="screen 3.1 " />
          </div>
        </div>
        <div class="pricing">
          <div class="price">
            <strong>$72</strong>
          </div>
          <div class="price">
            <p>$85</p>
          </div>
        </div>
      </div>
      <div class="section-highlight">
        <div class="title-wrapper">
          <h4>HIGHLIGHTS</h4>
          <h1>Full Customizable</h1>
        </div>
        <div class="highlight-wrapper">
          <div class="highlight-item">
            <img src="~assets/images/icon-screen.svg" alt="icon screen" />
            <h1>24+ Screens</h1>
            <p>On screen iPhone X</p>
          </div>
          <div class="highlight-item">
            <img src="~assets/images/icon-typo.svg" alt="icon typo" />
            <h1>Typography</h1>
            <p>Avenir Font family</p>
          </div>
          <div class="highlight-item">
            <img src="~assets/images/icon-vector.svg" alt="icon vector" />
            <h1>Vector Base</h1>
            <p>Can modify your style</p>
          </div>
        </div>
      </div>

      <div class="section-intro">
        <img
          src="~assets/images/art-lunafreya-hero.svg"
          alt="art-lunafreya-hero"
          class="art-square-intro"
        />
        <div class="intro-wrapper">
          <div class="intro-item">
            <img src="~assets/images/screen-1.png" alt="screen 1" class="device-intro" />
          </div>
          <div class="intro-item">
            <div class="content-intro">
              <img src="~assets/images/art-logo-lunaferya.svg" alt="art-logo-lunaferya" />
              <h1>
                Clean, Minimal
                <span>&</span> Modern design
              </h1>
              <p>
                You can easily make this kit your own by simply modifying the global text and color styles and adding your own content.
                Available for the latest versions of Adobe XD.
              </p>

              <div class="multi-button-container">
                <a href="#">
                  <div class="button-wrap black-btn">Buy Now</div>
                </a>
                <a href="#">
                  <div class="button-wrap">Message</div>
                </a>
              </div>
              <img
                src="~assets/images/art-intro-lunafreya.svg"
                alt="art-intro-lunafreya"
                class="art-intro"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="section-highlight">
        <div class="title-wrapper">
          <h4>PREVIEW</h4>
          <h1>Full Interaction in each Design</h1>
        </div>
      </div>

      <div class="section-intro">
        <div class="intro-wrapper">
          <div class="intro-item video-item">
            <vue-plyr ref="plyr">
              <video loop controlss>
                <source src="~assets/videos/ForgotPasswordOverview.mp4" type="video/mp4">
              </video>
            </vue-plyr>
            <div class="title-video">
              <h2>Forgot Password</h2>
            </div>
          </div>
          <div class="intro-item video-item">
            <vue-plyr ref="plyr">
              <video loop controlss>
                <source src="~assets/videos/AddToCartOverview.mp4" type="video/mp4">
              </video>
            </vue-plyr>
            <div class="title-video">
              <h2>Add to Cart</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="section-intro" id="overide-preview">
        <div class="intro-wrapper">
          <div class="intro-item video-item">
            <vue-plyr ref="plyr">
              <video loop controlss>
                <source src="~assets/videos/MainScreen.mp4" type="video/mp4">
              </video>
            </vue-plyr>
            <div class="title-video">
              <h2>Menu, Profile & Collections</h2>
            </div>
          </div>
          <div class="intro-item video-item">
            <vue-plyr ref="plyr">
              <video loop controlss>
                <source src="~assets/videos/SplashOverview.mp4" type="video/mp4">
              </video>
            </vue-plyr>
            <div class="title-video">
              <h2>Splash, On Boarding, and Registratio</h2>
            </div>
          </div>
        </div>
      </div>


      <div class="section-template-app">
        <div class="title-template">
          <h1>
            <span>BONUS</span> FREE TEMPLATE
          </h1>
        </div>
        <div class="template-header">
          <div class="template-header-wrap template-content">
            <img src="~assets/images/art-logo-lunaferya.svg" alt="art-logo-lunaferya" />
            <h1>
              Clean, Minimal
              <span>&</span> Modern design
            </h1>
            <p>Lunafreya make your developers who are challenged to develop store mobile application in a shorter time and the best interaction for your user.</p>
            <div class="platform-list">
              <div class="platform">
                <img src="~assets/images/icon-android.svg" />
              </div>
              <div class="platform">
                <img src="~assets/images/icon-ios.svg" />
              </div>
              <div class="platform">
                <img src="~assets/images/icon-react.svg" />
              </div>
            </div>
          </div>
          <div class="template-header-wrap">
            <vue-plyr controlshidden>
              <div data-plyr-provider="youtube"  :data-plyr-embed-id="videoID"></div>
            </vue-plyr>
          </div>
        </div>
      </div>
      <section id="contact">
        <div class="title">
          <h1>Contact Me</h1>
        </div>
        <div class="content-wrap">
          <div class="content-contact">
            <div class="greeting">
              <h1>Say, Hello!</h1>
            </div>
            <div class="email-address">
              <h2>ahroidlife@gmail.com</h2>
            </div>
            <div class="message">
              <a
                href="https://api.whatsapp.com/send?phone=6283148656290&text=Hi,%20Krisna%20Ahroid!"
                target="_black"
              >
                <div class="button-message">
                  <img src="~assets/images/whatsapp.svg" alt srcset />
                  <span>Message</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="footer">
        <div class="content-section">
          <div class="navigation">
            <ul v-if="isNavTitle" class="tabs">
              <li>
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li>
                <a href="#">About Me</a>
              </li>
              <li>
                <nuxt-link to="/product">Products</nuxt-link>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul v-else class="tabs">
              <li>
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/product">Products</nuxt-link>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div class="socials">
            <ul class="social">
              <li>
                <a href="https://www.linkedin.com/in/ahroidlife/" target="_blank">IN</a>
              </li>
              <li>
                <a href="https://www.instagram.com/user.ahroidlife/" target="_blank">IG</a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100008872393804" target="_blank">FB</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
export default {
  name: "products",
  head() {
    return {
      title: "Fashion Ecommerce UI KIT",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "Lunafreya is a UI Kit created to help you introduce your shoppping app, boost your creativity and save you time."
        }
      ]
    };
  },
  data() {
    return {
      videoID: "1vKJFQlaUSY",
      isNavTitle: true
    };
  },
  components: {},
  methods: {},
  computed:{
    player () {
      return this.$refs.plyr.player
    }
  },
  mounted() {
    console.log(this.player)
    let screenWidth = window.innerWidth;
    console.log("Screen width is ", screenWidth);

    if (screenWidth < 720) {
      this.isImageHero = false;
      this.isSpecializing = false;
      this.isNavTitle = false;
      console.log(this.isImageHero);
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700,800&display=swap");
@import url("https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap");

$width-name: max-device-width;
$target-width: 675px;

.container {
  background: #ededed;
  .content {
    padding: 20px;
    background: url("~assets/images/outline-art-header.svg");
    background-repeat: no-repeat;
    background-position: top right;
    .navigation-bar {
      display: flex;
      justify-content: space-between;

      .backpress {
        background: #1e2127;
        width: 35px;
        height: 35px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 10px 25px rgba(30, 33, 39, 0.2);
      }

      ul.social {
        margin-left: -30px;

        @media screen and ($width-name: $target-width) {
          margin-left: 0;
          display: flex;
          justify-content: flex-end;
          position: relative;
          top: 4px;
        }
        li {
          display: inline;
          margin-left: 14px;
          margin-right: 14px;
          font-family: "Nunito", sans-serif;
          font-weight: 400;
          color: #1e2127;
          font-size: 14px;
          box-sizing: border-box;
          padding: 4px 5px 4px 5px;
          border-radius: 4px;

          &:nth-child(3) {
            border: 1px solid #1e2127;
            background: white;
            box-shadow: 0px 4px 8px rgba(30, 33, 39, 0.2);

            @media screen and ($width-name: $target-width) {
              background: #ffffff;

              a {
                color: #1e2127;
              }
            }
          }

          a {
            text-decoration: none;

            @media screen and ($width-name: $target-width) {
              color: #ffffff;
            }
          }

          @media screen and ($width-name: $target-width) {
            margin-left: 8px;
            margin-right: 8px;
            background: none;
            font-size: 12px;
          }
        }
      }
    }
    .section-hero {
      width: 100%;
      display: flex;
      height: 80vh;
      justify-content: center;
      flex-direction: column;
      .inner-section-hero {
        text-align: center;

        img {
          pointer-events: none;

          @media screen and ($width-name: $target-width) {
            width: 50%;
          }
        }

        .text-section-hero {
          width: 50%;
          margin: 0 auto;
          @media screen and ($width-name: $target-width) {
            width: 100%;
          }
          p {
            font-family: "Nunito", sans-serif;
            font-weight: 300;
            font-size: 18px;
            color: 1e2127;

            @media screen and ($width-name: $target-width) {
              font-size: 14px;
            }
          }
        }
        .line-holder {
          background: #1e2127;
          width: 100px;
          height: 3px;
          border-radius: 30px;
          margin: 0 auto;
          margin-top: 30px;

          @media screen and ($width-name: $target-width) {
            width: 50px;
          }
        }
      }
    }
    .section-screens-holder {
      background-image: url("~assets/images/circle-drawer.svg");
      background-repeat: no-repeat;
      background-position: center;
      height: auto;
      padding-top: 100px;

      @media screen and ($width-name: $target-width) {
        background-image: none;
        padding-top: 0;
      }

      .screens-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;
        .screen1 {
          z-index: 99;
          position: absolute;
          text-align: center;

          img {
            @media screen and ($width-name: $target-width) {
              width: 80%;
            }
          }
        }

        .screen2 {
          z-index: 90;
          width: 50%;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          position: absolute;

          @media screen and ($width-name: $target-width) {
            display: none;
          }
        }

        .screen3 {
          z-index: 80;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-around;

          @media screen and ($width-name: $target-width) {
            width: 90%;
          }

          img {
            @media screen and ($width-name: $target-width) {
              width: 60%;
            }
          }
        }
      }
      .pricing {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        top: 50px;
        flex-direction: row;

        @media screen and ($width-name: $target-width) {
          top: 20px;
        }

        .price {
          margin: 20px;
          font-size: 32px;

          @media screen and ($width-name: $target-width) {
            font-size: 22px;
            margin: 10px;
          }
          strong {
            color: #1e2127;
          }
          p {
            text-decoration: line-through;
            color: #1e2127;
          }
        }
      }
    }
    .section-highlight {
      background: url("~assets/images/art-square-lunafreya.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;

      @media screen and ($width-name: $target-width) {
        background-size: cover;
        margin-top: 30px;
      }

      .title-wrapper {
        text-align: center;
        padding-top: 100px;
        padding-bottom: 100px;

        @media screen and ($width-name: $target-width) {
          padding-bottom: 50px;
        }
        h1 {
          font-size: 24px;
          color: #1e2127;
          font-family: "Nunito", sans-serif;
        }

        h4 {
          font-family: "Nunito", sans-serif;
          color: #1e2127;
          font-size: 14px;
          font-weight: 300;
        }
      }
      .highlight-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        @media screen and ($width-name: $target-width) {
          flex-direction: column;
        }
        .highlight-item {
          margin: 20px;
          text-align: center;
          @media screen and ($width-name: $target-width) {
            margin-top: 0;
            margin-bottom: 50px;
          }
          h1 {
            margin-top: 20px;
            font-size: 24px;
            color: #1e2127;
            font-family: "Nunito", sans-serif;
          }
          p {
            font-size: 18px;
            color: #1e2127;
            font-family: "Nunito", sans-serif;
          }
        }
      }
    }
    #overide-preview{
      margin-top: 50px;
      margin-bottom: 200px;
    }
    .section-intro {
      position: relative;
      margin-top: 200px;

      @media screen and ($width-name: $target-width) {
        margin-top: 100px;
      }
      .art-square-intro {
        position: absolute;
        left: -100px;
        z-index: 0;
        top: 15%;

        @media screen and ($width-name: $target-width) {
          width: 100%;
          left: 0;
        }
      }
      .intro-wrapper {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        @media screen and ($width-name: $target-width) {
          flex-direction: column;
        }
        .intro-item {
          flex: 1;
          @media screen and ($width-name: $target-width) {
            text-align: center;
          }
          .device-intro {
            @media screen and ($width-name: $target-width) {
              width: 80%;
            }
          }

          .content-intro {
            text-align: left;
            padding-top: 100px;
            img {
              @media screen and ($width-name: $target-width) {
                width: 50%;
              }
            }
            h1 {
              font-size: 18px;
              color: #1e2127;
              font-weight: 600;
              font-family: "Nunito", sans-serif;

              span {
                font-weight: 300;
                font-family: "Nunito", sans-serif;
              }
            }

            p {
              width: 80%;
              font-size: 18px;
              font-weight: 300;
              color: #1e2127;
              font-family: "Nunito", sans-serif;

              margin-top: 20px;
            }

            .multi-button-container {
              display: flex;
              flex-direction: row;
              margin-top: 100px;

              @media screen and ($width-name: $target-width) {
                margin-top: 50px;
              }

              a {
                text-decoration: none;
              }
              .button-wrap {
                padding: 8px 20px 8px 20px;
                background: white;
                font-weight: 400;
                color: #1e2127;
                font-family: "Nunito", sans-serif;
                margin-right: 20px;
                border-radius: 4px;
              }

              .black-btn {
                background-color: #1e2127 !important;
                color: #ffffff !important;
              }
            }

            .art-intro {
              position: absolute;
              right: 10%;

              @media screen and ($width-name: $target-width) {
                display: none;
              }
            }
          }
        }

        .video-item{
          padding: 20px;

          .title-video{
            text-align: center;

            h2{
              font-size: 18px;
              color: #1e2127;
              font-weight: 600;
              font-family: "Nunito", sans-serif;
              margin-top: 20px;
            }
          }
        }
      }
    }
    .section-template-app {
      padding-left: 20px;
      padding-right: 20px;
      @media screen and ($width-name: $target-width) {
        margin-top: 100px;
      }
      .title-template {
        background: url("~assets/images/art-title.svg");
        background-repeat: no-repeat;
        background-position: center;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and ($width-name: $target-width) {
          background-size: contain;
        }

        h1 {
          position: relative;
          top: 5%;
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          font-family: "Nunito", sans-serif;
          @media screen and ($width-name: $target-width) {
            font-size: 14px;
            top: 4%;
          }
          span {
            font-weight: 300;
          }
        }
      }

      .template-content {
        text-align: left;
        padding-top: 30px;
        @media screen and ($width-name: $target-width) {
          padding-top: 50px;
        }

        img {
          @media screen and ($width-name: $target-width) {
            width: 50%;
          }
        }
        h1 {
          font-size: 18px;
          color: #1e2127;
          font-weight: 600;
          font-family: "Nunito", sans-serif;

          span {
            font-weight: 300;
            font-family: "Nunito", sans-serif;
          }
        }

        p {
          margin-top: 20px;
          width: 80%;
          font-size: 18px;
          font-weight: 300;
          color: #1e2127;
          font-family: "Nunito", sans-serif;
        }

        .platform-list {
          display: flex;
          flex-direction: row;
          margin-top: 50px;
          .platform {
            margin-right: 30px;

            @media screen and ($width-name: $target-width) {
              margin-right: 10px;
            }

            img {
              @media screen and ($width-name: $target-width) {
                width: 70%;
              }
            }
          }
        }
      }

      .template-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: row;
        margin-top: 150px;

        @media screen and ($width-name: $target-width) {
          flex-direction: column-reverse;
          margin-top: 50px;
        }

        .template-header-wrap {
          flex: 1;

          @media screen and ($width-name: $target-width) {
            width: 100%;
          }
        }
      }
    }
    #contact {
      width: 90%;
      margin: 0 auto;
      padding-top: 100px;

      .title {
        margin-top: 50px;
        h1 {
          text-align: center;
          font-family: "Quicksand", sans-serif;
          font-weight: 600;
          font-size: 32px;
          color: #64637b;
        }
      }

      .content-wrap {
        margin-top: 100px;
        display: flex;
        justify-content: center;
        padding-bottom: 50px;
        background-image: url("~assets/images/square-dots.svg");
        background-repeat: no-repeat;
        background-position: 10% 80%;

        .content-contact {
          background: #1e2127;
          box-shadow: 0px 8px 20px rgba(30, 33, 39, 0.3);
          width: 900px;
          min-height: 165px;
          border-radius: 10px 10px 40px 10px;
          background-image: url("~assets/images/art-contact.svg");
          background-repeat: no-repeat;
          background-position: bottom right;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 50px;

          @media screen and ($width-name: $target-width) {
            flex-direction: column;
          }

          @media screen and (max-width: 320px) {
            width: 100%;
          }

          .greeting {
            h1 {
              text-align: center;
              font-family: "Quicksand", sans-serif;
              font-weight: 600;
              font-size: 32px;
              color: #ffffff;

              @media screen and ($width-name: $target-width) {
                margin-bottom: 14px;
              }
            }
          }

          .email-address {
            h2 {
              text-align: center;
              font-family: "Quicksand", sans-serif;
              font-weight: 400;
              font-size: 24px;
              color: #ffffff;

              @media screen and ($width-name: $target-width) {
                margin-bottom: 44px;
              }
            }
          }

          .message {
            a {
              text-decoration: none;
            }
            .button-message {
              text-align: center;
              font-family: "Quicksand", sans-serif;
              font-weight: 400;
              font-size: 24px;
              color: #64637b;
              background: #ffffff;
              padding: 8px 22px 8px 22px;
              box-sizing: border-box;
              border-radius: 4px;

              @media screen and ($width-name: $target-width) {
                width: 100%;
              }

              img {
                position: relative;
                top: 2px;
                right: 2px;
              }
            }
          }
        }
      }
    }
    #footer {
      width: 90%;
      margin: 0 auto;
      padding-top: 100px;
      padding-bottom: 100px;

      @media screen and ($width-name: $target-width) {
        width: 100%;
      }
      .content-section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .navigation {
          ul.tabs {
            padding: 0 !important;
            li {
              display: inline;
              margin-left: 24px;
              margin-right: 24px;

              a {
                text-decoration: none;
                font-family: "Nunito", sans-serif;
                font-size: 18px;
                font-weight: 300;
                color: #1e2127;

                @media screen and ($width-name: $target-width) {
                  font-size: 16px;
                }
              }
            }
          }
        }

        .socials {
          margin-top: 50px;
          ul.social {
            margin-left: -30px;
            li {
              display: inline;
              margin-left: 14px;
              margin-right: 14px;
              font-family: "Nunito", sans-serif;
              font-weight: 400;
              color: #1e2127;
              font-size: 14px;
              box-sizing: border-box;
              padding: 4px 5px 4px 5px;
              border-radius: 4px;

              &:nth-child(2) {
                border: 1px solid #1e2127;
                background-color: white;
                box-shadow: 0px 4px 8px rgba(30, 33, 39, 0.2);
              }

              a {
                text-decoration: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
