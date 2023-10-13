<script>

import Header from './components/Header.vue';
import Main from './components/Main.vue';
import {store} from './data/store';
import axios from 'axios';

export default{
  name:'App',
  components:{
    Header,
    Main
  },
  data(){
    return{
      store,
      show: true
    }
  },
  methods:{
    getApi(){
      console.log(store.selectedArchetype);
      if(store.selectedArchetype==="All cards"){
        store.apiUrl='https://db.ygoprodeck.com/api/v7/cardinfo.php?';
        this.show=true;
      }
      if(store.selectedArchetype!=""&&store.selectedArchetype!="All cards"){
        store.apiUrl='https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype='+store.selectedArchetype;
      }
      axios.get(store.apiUrl)
        .then( res =>{
          store.object = res.data.data;
          this.show=false;
        })
        .catch(err => {
          console.log(err);
        })
    },
    pushOptionList(){
      axios.get(store.apiOptionUrl)
        .then(res =>{
          for(let i=0; i<res.data.length;i++){
            store.optionList.push(res.data[i].archetype_name);
          }
        })
        .catch(err => {
          console.log(err);
        })
    }

  },
  mounted(){
    this.getApi();
    this.pushOptionList();
  }

}

</script>
 

<template>
   <Header></Header>
    <Main :show="show" @search="getApi"></Main>
</template>

<style lang="scss">
@use './sass/main.scss';

</style>
