<template>
  <div class="container">
    <section id="hero-section">
      <div class="image-dot-square">
        <img src="~assets/images/hero-dots.svg" alt srcset />
      </div>
      <div class="dots">
        <div></div>
        <div></div>
      </div>
      <div class="navigation">
        <div class="content">
          <div class="menu">
            <div></div>
            <div></div>
          </div>
          <ul class="tabs">
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Portofolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div class="content">
          <ul class="social">
            <li>
              <a href="#">IN</a>
            </li>
            <li>
              <a href="#">IG</a>
            </li>
            <li>
              <a href="#">FB</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="button-arrow-mobile">
          <img src="~assets/images/arrow-down.svg" alt="arrow down" />
        </div>
        <div class="content">
          <div class="inner">
            <div class="wrap">
              <p>Hi, there</p>
              <h1>I’m Krisna Ahroid</h1>
              <h2>
                UI/UX Designer
                <span>&</span> Frontend Developer
              </h2>
            </div>
            <div class="bottom">
              <div class="btn-content">
                <a href="#" class="active-button">HIRE ME</a>
              </div>
              <div class="btn-content">Contact Me</div>
            </div>
          </div>
        </div>
        <div class="content profile">
          <img
            v-if="isImageHero"
            src="~/assets/images/profile-hero.png"
            class="profile-hero"
            alt="krisna ahroid freelancer"
          />
          <img v-else src="~assets/images/profile-mobile-hero.svg" alt srcset />
        </div>
      </div>
    </section>
    <section id="tools-section">
      <div class="title">
        <h1>Work With:</h1>
      </div>
      <div class="content">
        <no-ssr>
          <carousel
            :perPageCustom="[[320, 3],[414, 3],[768, 8], [1024, 10]]"
            :autoplay="true"
            :loop="true"
            :speed="3000"
            :autoplayTimeout="5000"
            :scrollPerPage="true"
            :paginationEnabled="false"
          >
            <slide>
              <div class="image">
                <img src="~assets/images/l_xd.svg" alt="adobe xd" />
              </div>
            </slide>
            <slide>
              <div class="image">
                <img src="~assets/images/figma-1.svg" alt="adobe xd" />
              </div>
            </slide>
            <slide>
              <div class="image">
                <img src="~assets/images/l_ps.svg" alt="adobe xd" />
              </div>
            </slide>
            <slide>
              <div class="image">
                <img src="~assets/images/l_zeplin.svg" alt="adobe xd" />
              </div>
            </slide>
            <slide>
              <div class="image">
                <img src="~assets/images/invision.svg" alt="adobe xd" />
              </div>
            </slide>
            <slide>
              <div class="image">
                <img src="~assets/images/react.svg" alt="adobe xd" />
              </div>
            </slide>
            <slide>
              <div class="image">
                <img src="~assets/images/l_redux.svg" alt="adobe xd" />
              </div>
            </slide>
            <slide>
              <div class="image">
                <img src="~assets/images/vue.svg" alt="adobe xd" />
              </div>
            </slide>
            <slide>
              <div class="image">
                <img src="~assets/images/nuxt.svg" alt="adobe xd" />
              </div>
            </slide>
            <slide>
              <div class="image">
                <img src="~assets/images/swift.svg" alt="adobe xd" />
              </div>
            </slide>
            <slide>
              <div class="image">
                <img src="~assets/images/XcodeIcon_2x.svg" alt="adobe xd" />
              </div>
            </slide>
            <slide>
              <div class="image">
                <img src="~assets/images/github.svg" alt="adobe xd" />
              </div>
            </slide>
            <slide>
              <div class="image">
                <img src="~assets/images/gitlab.svg" alt="adobe xd" />
              </div>
            </slide>
            <slide>
              <div class="image">
                <img src="~assets/images/bitbucket.svg" alt="adobe xd" />
              </div>
            </slide>
          </carousel>
        </no-ssr>
      </div>
    </section>
    <section id="specialize-section">
      <div class="title-header">
        <h1>Specializing in</h1>
        <p>
          Hi there! I am a qualified Professional UI/UX
          <br />Designer
          <span>&</span> IOS Developer.
        </p>
      </div>
      <div v-if="isSpecializing" class="content-cards">
        <img class="square-dots" src="~assets/images/square-dots.svg" alt="dots" />
        <div class="card">
          <div class="line line1"></div>
          <div class="title">
            <h1>
              Grapics
              <br />Design.
            </h1>
          </div>
          <div class="content">
            <p>You can focus on a task by displaying only what you need.</p>
          </div>
          <div class="more">
            <h2>Know more</h2>
          </div>
        </div>
        <div class="card">
          <div class="line line2"></div>
          <div class="title">
            <h1>
              UI/UX
              <br />Design
            </h1>
          </div>
          <div class="content">
            <p>You can focus on a task by displaying only what you need.</p>
          </div>
          <div class="more">
            <h2>Know more</h2>
          </div>
        </div>
        <div class="card">
          <div class="line line3"></div>
          <div class="title">
            <h1>
              Apps
              <br />Development
            </h1>
          </div>
          <div class="content">
            <p>You can focus on a task by displaying only what you need.</p>
          </div>
          <div class="more">
            <h2>Know more</h2>
          </div>
        </div>
      </div>
      <div v-else class="content-cards card-mobile">
        <img class="square-dots" src="~assets/images/square-dots.svg" alt="dots" />
        <no-ssr>
          <carousel
            :perPageCustom="[[320, 1],[414, 1],[768, 8], [1024, 10]]"
            :paginationEnabled="false"
            :scrollPerPage="true"
            class="carousel"
          >
            <slide>
              <div class="card">
                <div class="line line1"></div>
                <div class="title">
                  <h1>
                    Grapics
                    <br />Design.
                  </h1>
                </div>
                <div class="content">
                  <p>You can focus on a task by displaying only what you need.</p>
                </div>
                <div class="more">
                  <h2>Know more</h2>
                </div>
              </div>
            </slide>
            <slide>
              <div class="card">
                <div class="line line2"></div>
                <div class="title">
                  <h1>
                    UI/UX
                    <br />Design
                  </h1>
                </div>
                <div class="content">
                  <p>You can focus on a task by displaying only what you need.</p>
                </div>
                <div class="more">
                  <h2>Know more</h2>
                </div>
              </div>
            </slide>
            <slide>
              <div class="card">
                <div class="line line3"></div>
                <div class="title">
                  <h1>
                    Apps
                    <br />Development
                  </h1>
                </div>
                <div class="content">
                  <p>You can focus on a task by displaying only what you need.</p>
                </div>
                <div class="more">
                  <h2>Know more</h2>
                </div>
              </div>
            </slide>
          </carousel>
        </no-ssr>
      </div>
    </section>
    <section id="add-value-section">
      <!-- <div class="title">
        <h1>WHY ME?</h1>
      </div> -->
      <div class="wrapper-column">
        <img
          src="~assets/images/art-square-about-me.svg"
          class="art-box"
          alt="art square ahroidlife"
        />
        <div class="column left-column">
          <div class="content">
            <div class="title-header">
              <h1>
                Krisna Ahroid.
                <br />A freelance UI/UX Designer
                <span>&</span>
                <br />Frontend Developer based in
                <br />Jakarta, Indonesia
              </h1>
            </div>
            <div class="body-content">
              <p>
                <strong>Hi there!</strong>
                <br />
                <br />I’m an enthusiastic UI/UX Designer & App
                <br />Developer, You can find my recent projects on
                <br />
                <a href="https://dribbble.com/ahroidlife" target="_blank">Dribbble</a> and
                <a href="https://www.instagram.com/user.ahroidlife/" target="_blank">Instagram</a> or if you’re interested in
                <br />my Design and if you are want to development
                <br />an application, let me know.
                <br>
                <br>
                <strong>
                I’m currently available for
                <br />freelance work.
              </strong>
              <br/><br/>
              <p>If you have a project that you want to get started, <br> let me know.</p>
              </p>
            </div>
          </div>
        </div>
        <div class="column right-column">
          <div class="image-holder">
            <img src="~assets/images/profile-conference.png" alt="profile conference" />
          </div>
          <div class="gallery">
            <img src="~assets/images/gallery.png" alt="gallery" />
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <div class="title">
        <h1>Contact Me</h1>
      </div>
      <div class="content-wrap">
        <div class="content">
          <div class="greeting">
            <h1>Say, Hello!</h1>
          </div>
          <div class="email-address">
            <h2>ahroidlife@gmail.com</h2>
          </div>
          <div class="message">
            <a href="https://api.whatsapp.com/send?phone=6283148656290&text=Hi,%20Krisna%20Ahroid!" target="_black">
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
      <div class="content">
        <div class="navigation">
          <ul v-if="isNavTitle" class="tabs">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Portofolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul v-else class="tabs">
            <li>
              <a href="#">Why Me?</a>
            </li>
            <li>
              <a href="#">Portofolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div class="socials">
          <ul class="social">
            <li>
              <a href="#">IN</a>
            </li>
            <li>
              <a href="#">IG</a>
            </li>
            <li>
              <a href="#">FB</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "homepage",
  head () {
    return {
      title: "Krisna Ahroid - Freelancer",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Krisna Ahroid. A freelance UI/UX Designer & Apps Developer based in Jakarta, Indonesia' }
      ]
    }
  },
  data() {
    return {
      isImageHero: true,
      isSpecializing: true,
      isNavTitle: true
    };
  },
  mounted() {
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
  #hero-section {
    width: 100%;
    min-height: 800px;
    background-image: url("~assets/images/art-hero.svg");
    background-repeat: no-repeat;
    background-position: right top;
    position: relative;

    @media screen and ($width-name: $target-width) {
      background-image: url("~assets/images/art-hero-mobile.svg");
      background-size: contain;
      min-height: 100vh;
    }

    .image-dot-square {
      position: absolute;
      bottom: 0;

      @media screen and ($width-name: $target-width) {
        display: none;
      }
    }

    .dots {
      position: absolute;
      bottom: 3%;
      left: 25%;

      @media screen and ($width-name: $target-width) {
        display: none;
      }

      div {
        width: 40px;
        height: 40px;
        border-radius: 50px;
        background: #f2f2f2;

        &:nth-child(2) {
          width: 60px;
          height: 60px;
          border-radius: 50px;
          background: #f2f2f2;
          margin-left: 200px;
        }
      }
    }

    .navigation {
      width: 90%;
      margin: 0 auto;
      min-height: 80px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-end;

      @media screen and ($width-name: $target-width) {
        min-height: 55px;
        width: 80%;
        margin: 0 auto;
      }

      .content {
        flex: 1;

        .menu {
          display: none;

          div {
            &:nth-child(1) {
              width: 35px;
              height: 4px;
              background-color: #ffffff;
              border-radius: 2px;
              margin-bottom: 8px;
            }

            &:nth-child(2) {
              width: 15px;
              height: 4px;
              background-color: #ffffff;
              border-radius: 2px;
            }
          }

          @media screen and ($width-name: $target-width) {
            display: inline-block;
          }
        }

        ul.tabs {
          padding: 0 !important;
          li {
            display: inline;
            /* margin-left: 24px; */
            margin-right: 40px;

            a {
              text-decoration: none;
              font-family: "Nunito", sans-serif;
              font-weight: 300;
              color: #64637b;
            }
          }

          @media screen and ($width-name: $target-width) {
            display: none;
          }
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
            color: #3838f8;
            font-size: 14px;
            background-color: white;
            box-sizing: border-box;
            padding: 4px 5px 4px 5px;
            border-radius: 4px;

            &:nth-child(3) {
              border: 1px solid #3838f8;
              box-shadow: 0px 4px 8px rgba(56, 56, 248, 0.2);

              @media screen and ($width-name: $target-width) {
                background: #ffffff;

                a {
                  color: #3838f8;
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
    }

    .content-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 90%;
      margin: 0 auto;
      position: relative;

      .button-arrow-mobile {
        display: none;

        @media screen and ($width-name: $target-width) {
          display: inline-block;
          background: #6868f5;
          position: absolute;
          z-index: 100;
          right: 0;
          bottom: 5%;
          width: 36px;
          height: 36px;
          border-radius: 50px;
          border: 1px solid #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        }
      }

      @media screen and ($width-name: $target-width) {
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        width: 80%;
        margin: 0 auto;
      }

      .content {
        flex: 1;
        @media screen and ($width-name: $target-width) {
          width: 100%;
        }
        .profile-hero {
          width: 90%;
          margin-left: -25px;
          margin-top: 45px;
        }

        .inner {
          .wrap {
            p {
              font-family: "Nunito", sans-serif;
              font-weight: 300;
              font-size: 18px;
              margin-top: -50px;
              margin-bottom: 34px;
              color: #3838f8;

              @media screen and ($width-name: $target-width) {
                margin-top: 70px;
                margin-bottom: 50px;
                color: #ffffff;
                font-size: 14px;
              }
            }

            h1 {
              font-family: "Quicksand", sans-serif;
              font-weight: 700;
              font-size: 28px;
              color: #3838f8;

              @media screen and ($width-name: $target-width) {
                color: #ffffff;
                font-size: 24px;
              }
            }

            h2 {
              font-family: "Quicksand", sans-serif;
              font-weight: 500;
              font-size: 18px;
              color: #64637b;

              @media screen and ($width-name: $target-width) {
                color: #ffffff;
                font-size: 15px;
                width: 80%;
              }

              span {
                font-family: "Nunito", sans-serif;
                font-weight: 300;
              }
            }
          }
        }

        .bottom {
          display: flex;
          margin-top: 80px;

          @media screen and ($width-name: $target-width) {
            margin-top: 50px;
          }
          .btn-content {
            margin-right: 50px;
            @media screen and ($width-name: $target-width) {
              color: #ffffff;
              font-family: "Nunito", sans-serif;
              font-size: 14px;
              font-weight: 400;
              margin-right: 40px;
            }
            .active-button {
              background: #3838f8;
              padding: 8px 30px 8px 30px;
              color: #ffffff;
              font-family: "Nunito", sans-serif;
              font-weight: 600;
              font-size: 14px;
              border-radius: 3px 10px 3px 10px;
              text-decoration: none;
              transition: 0.3s ease;

              @media screen and ($width-name: $target-width) {
                border: 1px solid #ffffff;
                border-radius: 2px 8px 2px 8px;
                font-weight: 600;
                font-size: 12px;
                padding: 6px 20px 6px 20px;
              }

              &:hover {
                box-shadow: 0px 8px 20px rgba(56, 56, 248, 0.2);
                border-radius: 3px;

                @media screen and ($width-name: $target-width) {
                  border-radius: 2px;
                }
              }
            }
          }
        }
      }

      .profile {
        @media screen and ($width-name: $target-width) {
          display: flex;
          justify-content: flex-start;
          position: relative;
          top: 100px;
          left: -40px;
        }

        img {
          @media screen and ($width-name: $target-width) {
            width: 100%;
          }
        }
      }
    }
  }

  #tools-section {
    width: 90%;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 50px;

    .title {
      padding-top: 50px;
      padding-bottom: 50px;
      h1 {
        font-family: "Quicksand", sans-serif;
        font-weight: 300;
        font-size: 18px;
        color: #64637b;
      }
    }

    .content {
      .image {
        display: flex;
        align-items: center;
        min-height: 90px;
        margin-left: 14px;

        img {
          transition: all 0.3s ease-in-out;

          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }

  #specialize-section {
    width: 90%;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 50px;

    /* @media screen and ($width-name: $target-width) {
      width: 100%;
    } */

    .title-header {
      text-align: center;
      margin-top: 200px;

      @media screen and ($width-name: $target-width) {
        margin-top: 100px;
      }

      h1 {
        font-family: "Quicksand", sans-serif;
        font-weight: 600;
        font-size: 32px;
        color: #64637b;
        margin-bottom: 15px;
        @media screen and ($width-name: $target-width) {
          font-size: 24px;
        }
      }

      p {
        font-family: "Quicksand", sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: #64637b;

        @media screen and ($width-name: $target-width) {
          font-size: 14px;
        }

        span {
          font-weight: 300;
        }
      }
    }

    .card-mobile {
      display: none;

      @media screen and ($width-name: $target-width) {
        display: inline-block;
      }
    }

    .content-cards {
      display: flex;
      justify-content: center;
      margin-top: 100px;
      padding-bottom: 50px;
      position: relative;

      .carousel {
        width: 100%;
      }

      .square-dots {
        position: absolute;
        left: 10%;
        bottom: 5%;
      }

      .card {
        margin: 20px;
        width: 266px;
        min-height: 296px;
        background: #ffffff;
        border-radius: 10px 10px 30px 10px;
        box-shadow: 0px 10px 25px rgba(96, 96, 96, 0.2);

        padding: 32px;
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: all 0.3s ease-in-out;

        @media screen and ($width-name: $target-width) {
        width: 295px;
      }

      @media screen and (max-width: 320px) {
        width: 250px;
      }

      @media screen and  (min-width: 380px)and(max-width: 520px) {
        width: 320px;
      }

        .line {
          position: absolute;
          right: 6%;
          top: 5%;
          width: 50px;
          height: 3px;
          border-radius: 10px;
        }

        .line1 {
          background: #fbff9d;
        }

        .line2 {
          background: #9d9dff;
        }

        .line3 {
          background: #ff9d9d;
        }

        .title {
          h1 {
            font-family: "Quicksand", sans-serif;
            font-weight: 600;
            font-size: 32px;
            color: #64637b;
          }
        }

        .content {
          p {
            font-family: "Quicksand", sans-serif;
            font-weight: 500;
            font-size: 14px;
            color: #64637b;
          }
        }

        .more {
          h2 {
            font-family: "Quicksand", sans-serif;
            font-weight: 600;
            font-size: 14px;
            color: #64637b;
          }
        }

        &:hover {
          background: #3838f8;
          box-shadow: 0px 10px 25px rgba(56, 56, 248, 0.4) !important;
          background-image: url("~assets/images/art-box.svg");
          background-repeat: no-repeat;
          background-position: bottom right;
          transform: scale(1.1);
          .title {
            h1 {
              color: #ffffff !important;
            }
          }

          .content {
            p {
              color: #ffffff !important;
            }
          }

          .more {
            h2 {
              color: #ffffff !important;
            }
          }
        }
      }
    }
  }

  #add-value-section {
        margin-top: 200px;
    .wrapper-column {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      @media screen and ($width-name: $target-width) {
        flex-direction: column-reverse;
        margin-top: 100px;
      }
      

      .art-box {
        position: absolute;
        left: 0;
        top: 3%;

        @media screen and ($width-name: $target-width) {
          min-height: 300px;
          margin-top: 0;
          width: 80%;
          top: 33%;
        }
      }

      .left-column {
        margin-left: 5%;

        @media screen and ($width-name: $target-width) {
          margin-right: 5%;
        }
      }

      .right-column {
        margin-right: 5%;
        @media screen and ($width-name: $target-width) {
          margin-left: 10%;
        }
      }

      .column {
        position: relative;
        min-height: 700px;

        @media screen and ($width-name: $target-width) {
          min-height: 300px;
          margin-top: 0;
        }

        .image-holder {
          @media screen and ($width-name: $target-width) {
            text-align: center;
          }
          img {
            @media screen and ($width-name: $target-width) {
              width: 60%;
              margin-left: 40px;
            }
          }
        }

        .title {
          h1 {
            font-family: "Quicksand", sans-serif;
            font-weight: 600;
            font-size: 14px;
            color: #3838f8;
          }
        }

        .content {
          margin-top: 50px;

          .title-header {
            margin-bottom: 25px;
            min-height: 250px;
            padding-top: 14px;
            position: relative;

            @media screen and ($width-name: $target-width) {
          margin-bottom: 40px;
          margin-top: 20px;
          min-height: auto;
        }
            h1 {
              font-family: "Quicksand", sans-serif;
              font-weight: 300;
              font-size: 32px;
              line-height: 45px;
              color: #64637b;

              span {
                font-weight: 300;
              }

              @media screen and ($width-name: $target-width) {
          font-size: 24px;
          line-height: 35px;
        }
            }
          }

          .body-content {
            p {
              font-family: "Quicksand", sans-serif;
              font-weight: 400;
              font-size: 18px;
              line-height: 24px;
              color: #64637b;

              a {
                color: #3838f8;
                text-decoration: none;
              }

              strong {
                font-size: 18px;
              }

              @media screen and ($width-name: $target-width) {
          font-size: 14px;
        }
            }

            
          }
        }

        .gallery {
          position: absolute;
          right: 0%;
          bottom: 0%;

          img {
            @media screen and ($width-name: $target-width) {
              width: 60%;
            }
          }
        }
      }
    }
  }

  #contact {
    width: 90%;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 100px;

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

      .content {
        background: #3838f8;
        box-shadow: 0px 8px 20px rgba(56, 56, 248, 0.3);
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
    .content {
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
              color: #64637b;

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
            color: #3838f8;
            font-size: 14px;
            background-color: white;
            box-sizing: border-box;
            padding: 4px 5px 4px 5px;
            border-radius: 4px;

            &:nth-child(2) {
              border: 1px solid #3838f8;
              box-shadow: 0px 4px 8px rgba(56, 56, 248, 0.2);
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
</style>