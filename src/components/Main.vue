<script>

import Card from './partials/Card.vue';
import { store } from '../data/store';
import Results from './partials/Results.vue';

export default{
  name:'Main',
  components:{
    Card,
    Results
  },
  data(){
    return{
      store
    }
  },
  props:{
    show: Boolean
  }
}

</script>

<template>

  <main class="pt-3">
    <select class="form-select mb-3" aria-label="select" v-model="store.selectedArchetype" @change="$emit('search')">
      <option selected>All cards</option>
      <option v-for="(o, index) in store.optionList" :key="index">{{ o }}</option>
    </select>
    <div class="p-4 container bg-white h-100 pb-0">
      <div v-if="show" id="loading-message" class="d-flex justify-content-center mb-1 align-items-center" >
        <span class="spinner-grow" role="status"></span>
        <h3 class="text-black loading">Loading...</h3>
      </div>
      <div class="row black-bar bg-black" v-if="!show">
        <Results></Results>
      </div>
      <div class="row" v-show="!show">
        <Card v-for="item in store.object" 
          :key="item.id" 
          :image="item.card_images[0].image_url"
          :title="item.name" 
          :text="item.archetype"
          >
        </Card>      
      </div>
    </div>
  </main>

</template>

<style lang="scss" scoped>

@use '../sass/_variabiles' as *;

main{
  background-color: $bg-color;
  select{
    width: 200px;
    margin-left: 70px;
  }
  .container{
    min-height: 100vh;
    .spinner-grow{
      width: 50px;
      height: 50px;
    }
    .loading{
      margin-left: 20px;
    }
    .black-bar{
      height: 40px;
      margin: 0 1px;
    }
  }
}


</style>