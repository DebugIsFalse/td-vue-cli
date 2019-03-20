<style scoped>
button{
    margin:  0 20px;
}
.show-result{
    margin-top: 30px;
}
.reduce-actions{
    margin-top: 30px;
}
.actions-input-num input{
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
}
</style>

<template>
    <div class="about">
        <div class="actions-input-num">
            <Input type="text" v-model="count" style="width:200px;"/>
        </div>
        <div class="reduce-actions">
            <Button @click="mutationsReduceCount">点击同步减</Button>
            <Button @click="actionsReduceCount">点击异步减</Button>
        </div>
        <div class="reduce-actions">
            <Button @click="mutationsAddCount">点击同步加</Button>
            <Button @click="actionsAddCount">点击异步加</Button>
        </div>
        <div class="show-result">
            <p>显示结果 : {{updateAccount}}</p>
        </div>

    </div>
</template>
<script>
import {
    ADD_TIMING,
    REDUCE_TIMING,
    ACTION_ADD_TIMING,
    ACTION_REDUCE_TIMING
} from "@/vuex/index/mutationTypes";
export default {
    data() {
        return {
            count : 1
        }
    },
    computed:{
        updateAccount(){
            const { count } = this.$store.state.indexModule;
            return count;
        }
    },
    methods: {
        mutationsReduceCount() {
            //mutation同步提交vuex
            this.$store.commit(REDUCE_TIMING, { count: this.count });
        },
        actionsReduceCount() {
            //actions异步提交vuex
            this.$store.dispatch(ACTION_REDUCE_TIMING, { count: this.count }).then(() => {
                console.log('action----to do---reduce')
            });
        },
        mutationsAddCount() {
            //mutation同步提交vuex
            this.$store.commit(ADD_TIMING, { count: this.count });
        },
        actionsAddCount() {
            //actions异步提交vuex
            this.$store.dispatch(ACTION_ADD_TIMING, { count: this.count }).then(() => {
                console.log('action----to do---add')
            });
        }
    }
};
</script>