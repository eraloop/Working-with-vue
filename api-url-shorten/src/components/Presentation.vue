<template>
    <div class="presentation  centered-content flex">
        <section class="presentation-text">
            <h1>More than just shorter links </h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nobis cumque recusandae eligendi obcaecati ratione aliquid
                aut ut accusantium autem dicta?
            </p>
            <button class="btn-fill">Get started</button>
        </section>
        <section class="presentation-illutration">
            <img src="../assets/images/illustration-working.svg" alt="">
        </section>
    </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  }
}
</script>


<style scoped>
.presentation{
    margin: 2em auto 8em;
}
.presentation .presentation-text{
    margin-right: 4rem;
}

.presentation .presentation-text h1{
    font-size: 3rem;
    font-weight: 700;
    padding: 10px 0;
}
.presentation .presentation-text p{
    padding: 20px 0;
    line-height: 1.5;
}
.presentation .presentation-text button{
    padding:13px 22px;
    margin-left: 0;
}
.presentation .presentation-illutration img{
    height: 400px;
    width: 500px;
}
</style>
