<script lang="ts">
  import Frame from './Frame.svelte'
  import Screen from './Screen.svelte'
  import StatusBar from './StatusBar.svelte'
  import ChromeHeader from './ChromeHeader.svelte'
  import Iframe from './Iframe.svelte'
  import ChromeFooter from './ChromeFooter.svelte'
  import HomeIndicator from './HomeIndicator.svelte'

  let colorMode: 'lightMode' | 'darkMode' = 'darkMode'
</script>

<div>
  <Frame />
  <Screen {colorMode} />
  <StatusBar {colorMode} />
  <ChromeHeader {colorMode} />
  <Iframe />
  <ChromeFooter {colorMode} />
  <HomeIndicator {colorMode} />
</div>

<style lang="scss">
  div {
    position: relative;
  }
</style>
