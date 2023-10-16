<script>
export default {
  name: 'card',
  props: {
    details: Object
  }
}
</script>


<template>
  <div class="col-3">
  
    <div class="card mb-3 p-1
    ">
      
      <h5>{{ details.title }}</h5>
      <h5>{{ details.original_title }}</h5>
      <h5>{{ details.original_language }}</h5>
      <h5>{{ details.vote_average }}</h5>
    </div>

  </div>
  

</template>


<style>

</style>