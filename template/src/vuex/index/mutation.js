import { REDUCE_TIMING,ADD_TIMING } from './mutationTypes';
export const countMutations = {
    [REDUCE_TIMING]( state ){
        state.count++;
        console.log(state,'---state---mutationTypes')
    },
    [ADD_TIMING](state){
        state.count--;
    }
}

