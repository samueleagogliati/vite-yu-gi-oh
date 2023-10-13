import { reactive } from 'vue';

// le proprietà dello'oggetto reactive sono proprità reattive 
export const store = reactive({
  apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?',
  object: [],
  optionList: [],
  apiOptionUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
  selectedArchetype: ""

})