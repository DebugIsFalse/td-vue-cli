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

    </div>
</template>
<script>
export default {
  data() {
      return {
          count  1
      }
  }
};
</script>