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
    <div class="card mb-3">
      <img :src="getImagePath(image)" alt="">
      <!-- Ho messo d-none in card-body perché così è più carino -->
      <div class="card-body d-none">
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