<template>
  <!-- vcArticleBox101 -->
  <div class="row">
    <h2 class="item-id">vcArticleBox101</h2>
      <div class="col-sm-3">39</div>
      <div class="col-sm-9">
      <vcArticleBox101 />
      </div>
    </div>
    <!-- end vcArticleBox101 -->
</template>
<script>
  const vcArticleBox101 = () =>
    import ('./vcArticleBox101.vue');
  export default {
    data() {
        return {}
      },
      components: {
        vcArticleBox101: vcArticleBox101
      },
      mounted: function () {
        // console.log("Home.vue mounted");
      }
  }
</script>