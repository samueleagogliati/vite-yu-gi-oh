<script>

export default{
  name:'Header'

}

</script>

<template>

  <header>
    <div class="align-items-center h-100 d-flex ">
      <img src="logo.jpeg" alt="logo">
      <h1 class="text-black ms-2">Yu-Gi-Oh Cards</h1>
    </div>

    
  </header>

</template>

<style lang="scss" scoped>

@use '../sass/variabiles' as *;

header{
 height: 60px;
 padding-left: 20px;
 img{
  width: 50px;
  height: 30px;
 }

  & h1{
    font-size: 30px;
    margin: 0;
  }
}

</style>