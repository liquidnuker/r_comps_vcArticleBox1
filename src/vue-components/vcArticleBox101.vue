<template>
<div>
  <!-- begin vcarticlebox101 -->
  <div class="vcarticlebox101">
    <ul>
      <!-- begin list block 1-->
      <li class="row">
        <div class="vcarticlebox101_img-holder">
          <img src="img.jpg" alt="img alt" title="img title">
        </div>
        <article role="article">
          <h2 class="vcarticlebox101_heading">Article heading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
        <footer class="row vcarticlebox101_extras">
          <p>extra text Lorem ipsum dolor sit amet</p>
          <button data-message="button1" class="btn btn1-01" tabindex="0">read more</button>
          <button data-message="button2" class="btn btn1-01" tabindex="0">read more</button>
        </footer>
      </li>
      <!-- end list block 1-->
    </ul>
  </div>
  <!-- end vcarticlebox101 -->
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
    
  },
  methods: {        
  }
}
</script>