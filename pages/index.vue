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
          <ul class="tabs">
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
              <div class="btn-content">Contact</div>
            </div>
          </div>
        </div>
        <div class="content profile">
          <img
            src="~/assets/images/profile-hero.png"
            class="profile-hero"
            alt="krisna ahroid freelancer"
          />
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
            :perPageCustom="[[320, 1],[414, 1],[768, 2], [1024, 10]]"
            :autoplay="true"
            :loop="true"
            :speed="500"
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
                <img src="~assets/images/l_docker.svg" alt="adobe xd" />
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
      <div class="content-cards">
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
    </section>
    <section id="add-value-section">
      <div class="column">
        <div class="title">
          <h1>WHY ME?</h1>
        </div>
        <div class="content">
          <p>
            Hi there!
            <br />I am a qualified Professional UI/UX Designer &
            <br />IOS Developer.
            <br />
            <br />I’m an enthusiastic UI/UX Designer & App
            <br />Developer, You can find my recent projects on
            <br />Dribbble and Instagram or if you’re interested in
            <br />my Design and if you are want to development
            <br />an application, let me know.
          </p>
        </div>
      </div>
      <div class="column">
        <div class="image-holder">
          <img src="~assets/images/profile-conference.png" alt="profile conference" />
        </div>
        <div class="gallery">
          <img src="~assets/images/gallery.png" alt="gallery" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "homepage"
};
</script>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700,800&display=swap");
@import url("https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap");

.container {
  #hero-section {
    width: 100%;
    min-height: 800px;
    background-image: url("~assets/images/art-hero.svg");
    background-repeat: no-repeat;
    background-position: right top;
    position: relative;

    .image-dot-square {
      position: absolute;
      bottom: 0;
    }

    .dots {
      position: absolute;
      bottom: 3%;
      left: 25%;

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

      .content {
        flex: 1;

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
        }

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

            &:nth-child(3) {
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

    .content-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 90%;
      margin: 0 auto;

      .content {
        flex: 1;
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
            }

            h1 {
              font-family: "Quicksand", sans-serif;
              font-weight: 700;
              font-size: 28px;
              color: #3838f8;
            }

            h2 {
              font-family: "Quicksand", sans-serif;
              font-weight: 500;
              font-size: 18px;
              color: #64637b;

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
          .btn-content {
            margin-right: 50px;
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

              &:hover {
                box-shadow: 0px 8px 20px rgba(56, 56, 248, 0.2);
                border-radius: 3px;
              }
            }
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

    .title-header {
      text-align: center;
      margin-top: 200px;

      h1 {
        font-family: "Quicksand", sans-serif;
        font-weight: 600;
        font-size: 32px;
        color: #64637b;
        margin-bottom: 15px;
      }

      p {
        font-family: "Quicksand", sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: #64637b;

        span {
          font-weight: 300;
        }
      }
    }

    .content-cards {
      display: flex;
      justify-content: center;
      margin-top: 100px;
      padding-bottom: 50px;
      position: relative;

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
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .column {
      margin-top: 200px;
      position: relative;
      min-height: 700px;
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
        p {
          font-family: "Quicksand", sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          color: #64637b;
        }
      }

      .gallery {
        position: absolute;
        right: 20%;
        bottom: 2%;
      }
    }
  }
}
</style>