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
      store,
      archetypeSelected: "All cards"
    }
  },
  methods:{
    gestioneSelect(){
      const index = document.querySelector(".form-select").options.selectedIndex;
      const archeotype = document.getElementsByTagName("option")[index].textContent;
      this.archetypeSelected = archeotype;
    }
  },
  computed:{
    filteredCards() {
      if(this.archetypeSelected==="All cards")
        return this.store.object;
      return this.store.object.filter(item => item.archetype === this.archetypeSelected);
    }
  }
}

</script>

<template>

  <main class="pt-3">
    <select class="form-select mb-3" aria-label="select" @change="gestioneSelect">
      <option selected>All cards</option>
      <option v-for="(o, index) in store.optionList" :key="index">{{ o }}</option>
    </select>
    <div class="p-5 container bg-white h-100 pb-0">
      <div class="row black-bar bg-black">
        <Results :archetypeSelected="archetypeSelected"></Results>
      </div>
      <div class="row">
        <Card v-for="item in filteredCards" 
          :key="item.id" 
          :image="item.card_images[0].image_url"
          :title="item.name" 
          :text="item.archetype">
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
    width: 150px;
    margin-left: 70px;
  }
  .container{
    .black-bar{
      height: 40px;
      margin: 0 1px;
    }
  }
}


</style>