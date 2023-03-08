<script lang="ts">
  import Frame from './Frame.svelte'
  import Screen from './Screen.svelte'
  import StatusBar from './StatusBar.svelte'
  import ChromeHeader from './ChromeHeader.svelte'

  let colorMode: 'lightMode' | 'darkMode' | 'offMode' = 'lightMode'
</script>

<div>
  <Frame />
  <Screen {colorMode} />
  <StatusBar {colorMode} />
  <ChromeHeader {colorMode} />
</div>

<style>
  div {
    position: relative;
  }
</style>
