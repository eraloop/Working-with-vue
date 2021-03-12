<template>
  <div>
    <div class="call-to-action-section">
      <h1>Boots your links today</h1>
      <button class="btn-fill btn">Get started</button>
    </div>
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
.call-to-action-section{
    width: 100%;
    height:  230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:auto;
    position: relative;
    background: hsl(257, 27%, 26%);
    background-size: cover;
    z-index: -1;
}

.call-to-action-section:before{
    content: '';
    width: 100%;
    height: 230px;
    background-image : url(../assets/images/bg-boost-desktop.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
}

.call-to-action-section *{
    color: #fff;
    z-index: 99;
}

.call-to-action-section h1{
    font-size: 2rem;
    padding: 10px 0;
}
.call-to-action-section button{
    font-size: 20px;
    padding: 10px 15px;
}
</style>
