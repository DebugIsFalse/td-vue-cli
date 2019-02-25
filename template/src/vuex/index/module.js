import {
    countMutations
} from './mutation';
import {
    asyncAction
} from './actions';
const state = {
    count: 1,
    status: 'reduce'
};
// mutations : 同步事件
const mutations = {
    ...countMutations
}

// actions : 异步事件派发
const actions = {
    ...asyncAction
}

export default {
    state,
    mutations,
    actions
}