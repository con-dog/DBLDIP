<script lang="ts">
  import FrameIphoneSE from './FrameIphoneSE.svelte'
  import Screen from './Screen.svelte'

  let colorMode: 'lightMode' | 'darkMode' = 'darkMode'
  let size: 'thumbnail' | 'regular' = 'thumbnail'
</script>

<div>
  <FrameIphoneSE {size} />
</div>

<style lang="scss">
  div {
    position: relative;
  }
</style>
