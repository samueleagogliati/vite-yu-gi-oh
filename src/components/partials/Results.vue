<script>

    import {store} from '../../data/store';
    export default {
        name: 'Results',
        data(){
            return{

            }
        },
        computed:{
            outputResult(){
                if(store.object.length==1){
                    return "Found 1 Card"
                }
                else{
                    return "Found "+store.object.length +" Cards";
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