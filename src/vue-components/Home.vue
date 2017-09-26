<template>
<div>
  <!-- vcArticleBox101 -->
  <div class="row">
    <h2 class="item-id">vcArticleBox101</h2>
    <div class="col-sm-3">39</div>
    <div class="col-sm-9">
      <vcArticleBox101 />
    </div>
  </div>
  <!-- end vcArticleBox101 -->
  <!-- vcArticleBox102 -->
  <div class="row">
    <h2 class="item-id">vcArticleBox102</h2>
    <div class="col-sm-3">39</div>
    <div class="col-sm-9">
      <vcArticleBox102 />
    </div>
  </div>
  <!-- end vcArticleBox102 -->
  <!-- vcArticleBox103 -->
  <div class="row">
    <h2 class="item-id">vcArticleBox103</h2>
    <div class="col-sm-3">39</div>
    <div class="col-sm-9">
      <vcArticleBox103 />
    </div>
  </div>
  <!-- end vcArticleBox103 -->
</div>
</template>
<script>
  const vcArticleBox101 = () =>
    import ('./vcArticleBox101.vue');
    const vcArticleBox102 = () =>
    import ('./vcArticleBox102.vue');
    const vcArticleBox103 = () =>
    import ('./vcArticleBox103.vue');
  export default {
    data() {
        return {}
      },
      components: {
        vcArticleBox101: vcArticleBox101,
        vcArticleBox102: vcArticleBox102,
        vcArticleBox103: vcArticleBox103
      },
      mounted: function () {
        // console.log("Home.vue mounted");
      }
  }
</script>