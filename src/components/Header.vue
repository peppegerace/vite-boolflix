<script>
export default {
  name: 'Header'
}
</script>


<template>

  <header>

    <div class="logo">
      <img src="/logo_boolflix.png" alt="">
    </div>

  </header>
  
</template>


<style lang="scss">

header {
  background: linear-gradient(#000, #313131);
  padding: 15px 10px;

  .logo {
    width: 120px;
    img {
      max-width: 100%;
    }
  }
}

</style>