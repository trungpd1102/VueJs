<template>
  <div class="total-money">
    {{ totalMoney | splitTotalMoney }}
    <button @click="totalMoney += 20000">Click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalMoney: 1000000,
    };
  },
  filters: {
    splitTotalMoney: function (totalMoney) {
      return totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>

<style>
</style>