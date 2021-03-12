<template>
  <div id="app">
    <app-layout></app-layout>
  </div>
</template>

<script>

import Layout from './components/Layout'


export default {
  components:{
    "app-layout": Layout
  },

  data () {
    return {
     
    }
  }
}
</script>


<style>

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'poppins';
    color: hsl(260, 8%, 14%);
    box-sizing: border-box;
    font-weight: 500;
}

ul{
    list-style-type: none;
}

.btn-fill:hover{
    background: hsl(180, 50%, 70%);
}
.centered-content{
    max-width: 70%;
    margin: 0 auto;
}

li{
    text-decoration: none;
    text-transform: capitalize;
    font-weight: 500;
    cursor: pointer;
}
li:hover{
    color: hsl(180, 66%, 49%);
}

p{
    color: hsl(0, 0%, 75%);
}
.flex{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.btn{
    text-transform: capitalize;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    border: none;
    outline: none;
}


.btn-fill{
    background:hsl(180, 66%, 49%) ;
    border-radius: 25px;
    border: 0;
    padding: 5px 10px;
    color: #fff;
    margin: 0 20px;
    font-weight: 600;
    cursor: pointer;
}

.not-visible{
    display: none;
}
.visible{
    display: "" !important;
}

</style>
