<script>

export default{
  name:'Card',
  props:{
    image: String,
    title: String,
    text: String
  },

  methods:{
    getImagePath(img){
      return new URL(`${img}`, import.meta.url).href;
    }
  }
}
</script>

<template>

  <div class="col1">
    <div class="card mb-2">
      <img :src="getImagePath(image)" alt="">
      <div class="card-body">
        <h1 class="card-title text-center text-white">{{ title }}</h1>
        <p class="card-text text-center">{{text}}</p>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use '../../sass/variabiles' as *;
.col1{
  width: 20%;
  .card{
    img{
      width: 100%;
    }
    .card-body{
      background-color: $bg-color;
      height: 100px;
      h1{
      font-size: medium;
      }
      p{
        font-size: small;
      }
    }
  }
}


</style>