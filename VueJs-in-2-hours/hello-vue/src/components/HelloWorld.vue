
<template functional>
  <div>
    <!-- <p>{{product}}</p>
    <p v-for="(brand, index) in props.brands" :key="index">{{ brand }}</p> -->
  </div>
</template>

<script >
export default {
  functional: true,
  props: {
    user: Object,
  },

  userFullName(user) {
    return `${user.firstName} ${user.lastName}`;
  },
};
</script>
