<script lang ts>
  import Fa from 'svelte-fa'
  import { faPlus } from '@fortawesome/free-solid-svg-icons'
</script>

<button>
  <Fa icon={faPlus} />
</button>

<style lang="scss">
  $rose: #f72585;
  $grape: #7209b7;
  $zaffre: #3a0ca3;
  $neon-blue: #4361ee;
  $vivid-sky-blue: #4cc9f0;
  $offwhite: #f3f3f3;

  button {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    background: $vivid-sky-blue;
    border-radius: 50%;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 2rem;
    font-weight: 700;
    height: 5rem;
    margin: 0;
    outline: none;
    padding: 0;
    width: 5rem;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 0.5rem $vivid-sky-blue;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
</style>
