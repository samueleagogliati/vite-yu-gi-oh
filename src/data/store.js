import { reactive } from 'vue';

// le proprietà dello'oggetto reactive sono proprità reattive 
export const store = reactive({
  apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
  object: [],
  optionList: []
})