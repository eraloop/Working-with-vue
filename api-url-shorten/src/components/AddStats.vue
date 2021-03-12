<template>
  <div class="advance-stats centered-content">
    <section class="ad-stats-pres">
      <h1>advanced statistics</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sed cumque
        modi, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sed
        cumque modi,
      </p>
    </section>

    <section class="ad-stats-content">
      <p class="line"></p>
      <div class="boxes">
        <div class="box box-1">
          <section class="logo">
            <img src="../assets/images/icon-brand-recognition.svg" alt="" />
          </section>
          <section class="box-content">
            <h1>Brand Recognition</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              voluptatem tempora facere, asperiores repudiandae.
            </p>
          </section>
        </div>
        <div class="box box-2">
          <section class="logo">
            <img src="../assets/images/icon-detailed-records.svg" alt="" />
          </section>
          <section class="box-content">
            <h1>detailed records</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              voluptatem tempora facere, asperiores repudiandae.
            </p>
          </section>
        </div>
        <div class="box box-3">
          <section class="logo">
            <img src="../assets/images/icon-fully-customizable.svg" alt="" />
          </section>
          <section class="box-content">
            <h1>fully customisable</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              voluptatem tempora facere, asperiores repudiandae.
            </p>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>


<style scoped>
.advance-stats{
    margin: 3em auto;
}

.ad-stats-pres{
    text-align: center;
    justify-content: center;
}
.ad-stats-pres h1{
    font-size:2em;
    text-transform: capitalize;
    padding:10px 0;
}
.ad-stats-pres p{
    color: hsl(257, 7%, 63%);
}

.boxes{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4rem 0;
    justify-content: space-between;
    position: relative;
    z-index: 9;
}
.box{
    height: 250px;
    width: 300px;
    background: #fff;
    padding: 10px;
}
.logo{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background: hsl(260, 8%, 14%);
    position: relative;
    top: -40px;
    left: 10px;
    margin-bottom: -20px;
}
.box .box-content{
    padding:  0 15px;
}
.box h1{
    padding: 10px 0;
}

.line{
    display: block;
    padding: 5px;
    background:hsl(180, 66%, 49%) ;
    width: 50%;
    border-radius: 25px;
    position: relative;
    left: 25%;
    bottom: -200px;
}

.box-1{
    align-self: start;
}
.box-2{
    align-self: center;
    position: relative;
   top: 30px;
}
.box-3{
   align-self: end; 
   position: relative;
   top: 70px;
}
</style>
