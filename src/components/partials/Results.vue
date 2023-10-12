<script>

    import {store} from '../../data/store';
    export default {
        name: 'Results',
        data(){
            return{

            }
        },
        props:{
            archetypeSelected: String
        },
        computed:{
            outputResult(){
                if(this.archetypeSelected==="All cards"){
                    return "Found " + store.object.length + " Cards";
                }
                else{
                    const obj = store.object.filter(item => item.archetype === this.archetypeSelected);
                    return "Found " + obj.length + " Cards";
                }
            }
        }
    }
</script>


<template>
  <p class="text-white d-flex align-items-center ps-2 m-0">{{ outputResult }}</p>
</template>

<style>

</style>