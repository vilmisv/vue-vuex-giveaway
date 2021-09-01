<template>
  <div class="con">
    <div>
      <SortBy/>
    </div>
  </div>
</template>

<script>
import SortBy from '../components/SortBy.vue'
export default {
  name: 'Sort',
  components: {
    SortBy
  }
  
}
</script>

<style scoped> 

.con {
  margin-top: 20px;
}
  
</style>
