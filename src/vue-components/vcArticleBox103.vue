<template>
<div>
  <!-- begin vcarticlebox103 -->
  <div class="vcarticlebox103">
    <ul>
      <!-- begin list block 1-->
      <li>
        <header>
          <h3 class="vcarticlebox103_heading1">Article title</h3>
          <p>
            Lorem ipsum dolor sit amet, elit, sed do eiusmod
          </p>
          <ul class="row vcarticlebox103_title-info">
            <li>
            &copy;&nbsp;Date posted</li>
            <li>Author</li>
            <li>Posted in Category</li>
            <li>comments&nbsp;<span class="vcarticlebox103_badge">12</span>
          </li>
        </ul>
      </header>
      <div class="row">
        <div class="vcarticlebox103_img-holder">
          <img src="img.jpg" alt="img alt" title="img title">
        </div>
        <article role="article">
          <h3 class="vcarticlebox103_heading2">Article heading</h3>
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
      <footer class="vcarticlebox103_extras">
        <p>extra text</p>
        <button data-message="button1" class="btn btn1-01" tabindex="0">read more</button>
        <button data-message="button2" class="btn btn1-01" tabindex="0">read more</button>
      </footer>
    </li>
    <!-- end list block 1-->
  </ul>
</div>
<!-- end vcarticlebox103 -->
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
    console.log(".vue mounted");
  },
  methods: {        
  }
}
</script>