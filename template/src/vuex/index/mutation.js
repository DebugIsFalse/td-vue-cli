import {
    REDUCE_TIMING,
    ADD_TIMING
} from './mutationTypes';
export const countMutations = {
    [REDUCE_TIMING](state, data) {
        state.count = state.count - data.count;
        console.log(state, data, '---state.count---mutationTypes')
    },
    [ADD_TIMING](state, data) {
        state.count = state.count + data.count;
        console.log(state, '---state.count---mutationTypes')
    }
}