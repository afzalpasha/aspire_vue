/*
export function someMutation (state) {
}
*/

export function addCard(state,card){
  state.cards.push(card);
}

export function removeCard(state,cardIndex){
  state.cards.splice(state.cards.findIndex(card => card.id === cardIndex) , 1);

}

// export const addCard = (state, card) => {
//   state.cards.push(card);
// }
