import {
    ACTION_ADD_TIMING,
    ACTION_REDUCE_TIMING
} from './mutationTypes';

/*
 * action主要应用于异步示例
 */
export const asyncAction = {
    [ACTION_REDUCE_TIMING]({
        state
    }, data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                state.count = state.count - data.count;
                resolve();
            }, 1e3)
        })
    },
    [ACTION_ADD_TIMING]({
        state
    }, data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                state.count = state.count + data.count;
                resolve();
            }, 1e3)
        })
    }
}