<template>
  <header class="centered-content">
    <nav class="flex">
      <section class="links flex">
            <h1><img src="../assets/images/logo.svg" alt="" /></h1>
            <ul>
                <li>Features</li>
                <li>pricing</li>
                <li>resources</li>
            </ul>
      </section>
      <section class="call-to-action flex">
        <button class="login btn-login btn">login</button>
        <button class="signup btn-fill btn">signup</button>
      </section>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>


<style scoped>

header{
    padding: 2rem 0;
}
.links h1{
    padding: 0 20px 0 0;
}

.links ul li{
    display: inline;
    padding: 0 10px;
}

.call-to-action .btn-login {
    background: 0;
    padding: 0 20px;
}

</style>
