<script lang ts>
  export let colorMode
</script>

<svg
  class="home"
  width="390"
  height="34"
  viewBox="0 0 390 34"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect x="128" y="21" width="134" height="5" rx="2.5" class={colorMode} />
</svg>

<style lang="scss">
  .home {
    position: absolute;
    bottom: 14px;
    left: 25px;
    height: 44px;
    width: 390px;
  }
  .lightMode {
    fill: #000;
  }
  .darkMode {
    fill: #fff;
  }
</style>
