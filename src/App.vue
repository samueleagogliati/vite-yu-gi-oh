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
      axios.get(store.apiUrl)
        .then( res =>{
          store.object = res.data.data;
          for(let i=0; i<res.data.data.length; i++){
            if (!store.optionList.includes(res.data.data[i].archetype)) {
              if(res.data.data[i].archetype){
                store.optionList.push(res.data.data[i].archetype);
              }
            }
          }
          this.show=false;
        })
        .catch(err => {
          console.log(err);
        })

    }
  },
  mounted(){
    this.getApi();
  }

}

</script>
 

<template>
   <Header></Header>
    <Main :show="show"></Main>
</template>

<style lang="scss">
@use './sass/main.scss';

</style>
