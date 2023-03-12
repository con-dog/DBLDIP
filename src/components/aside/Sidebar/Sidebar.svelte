<script lang ts>
  import Fa from 'svelte-fa'
  import {
    faCamera,
    faCircleHalfStroke,
    faCrop,
    faVideo
  } from '@fortawesome/free-solid-svg-icons'

  export let toggleColorMode
  export let colorMode
</script>

<aside>
  <img src="/images/logo.png" alt="logo" />
  <button on:click={toggleColorMode} class={colorMode}>
    <Fa icon={faCircleHalfStroke} />
  </button>
  <button>
    <Fa icon={faCrop} />
  </button>
  <button>
    <Fa icon={faCamera} />
  </button>
  <button class="on">
    <Fa icon={faVideo} />
  </button>
</aside>

<style lang="scss">
  $rose: #f72585;
  $grape: #7209b7;
  $zaffre: #3a0ca3;
  $neon-blue: #4361ee;
  $vivid-sky-blue: #4cc9f0;
  $offwhite: #f3f3f3;

  aside {
    z-index: 1;
    background-color: $offwhite;
    position: fixed;
    top: calc(50% - 300px);
    left: 2rem;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    width: 5rem;
    height: 600px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    img {
      top: 0;
      margin-bottom: auto;
      width: 5rem;
      height: 5rem;
      margin-top: 1rem;
    }
    button {
      padding: 0;
      margin: 0;
      text-align: center;
      width: 5rem;
      height: 5rem;
      background-color: transparent;
      color: #000;
      border: none;
      font-size: 1.75rem;
      cursor: pointer;
      outline: none;

      transition: all 0.1s ease-in-out;
      &:hover {
        transform: scale(1.3);
      }
      &:active {
        transform: scale(0.9);
      }
      &.darkMode {
        color: $rose;
      }
    }
  }
</style>
