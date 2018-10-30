<template>
    <div class="domain">
        <div class="list-container">
            <div class="list-item"
                v-for="(item, index) in domain"
                v-bind:key="index"
            >
                <div class="img-container">
                    <img :src="item.imgUrl" alt="" srcset="">
                </div>
                <div class="text-container">
                    {{item.text}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Domain',
  props: {
    domain: Array
  }
};
</script>

<style scoped>
.list-container {
  height: 80px;
  padding: 10px 0 0;
  display: flex;
  justify-content: space-around;
  list-style: none;
}

.list-item {
  width: 4rem;
}

.img-container {
  width: 80%;
  height: auto;
  margin: 0 auto;
}
.text-container {
  font-size: 0.7rem;
  color: #26a2ff;
}
</style>
