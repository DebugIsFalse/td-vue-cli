import { REDUCE_TIMING } from './mutationTypes';
import { countMutations  } from './mutation';
const state = {
    count : 1,
    status : REDUCE_TIMING
};
// mutations : 同步事件
const mutations = {
     ...countMutations
}

// actions : 异步事件派发

export default {
    state,
    mutations
}