<template>
  <div class="container">
    <section id="hero-section">
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
}
</style>