<template>
<div>
  <!-- begin vcarticlebox102 -->
  <div class="vcarticlebox102">
    <ul>
      <!-- begin list block 1-->
      <li>
        <header class="vcarticlebox102_article-title">
          <h3 class="vcarticlebox102_heading1">Article heading1</h3>
          <p>
            Lorem ipsum dolor sit amet, elit, sed do eiusmod
          </p>
        </header>
        <div class="row">
          <div class="vcarticlebox102_img-holder">
            <img src="img.jpg" alt="img alt" title="img title">
          </div>
          <article role="article">
            <h3 class="vcarticlebox102_heading2">Article heading2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
        </div>
        <footer class="vcarticlebox102_extras">
          <p>extra text</p>
          <button data-message="button1" class="btn btn1-01" tabindex="0">read more</button>
          <button data-message="button2" class="btn btn1-01" tabindex="0">read more</button>
        </footer>
      </li>
      <!-- end list block 1-->
    </ul>
  </div>
  <!-- end vcarticlebox102 -->
</div>
</template>
<script>
export default {
  data () {
    return {   

    }
  },
  watch: {
  // : function () {
  // }
  },
  props: [
    "prName1"
  ],
  components: {
  },
  mounted: function () {
    // console.log(".vue mounted");
  },
  methods: {        
  }
}
</script>