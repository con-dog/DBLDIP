<script lang ts>
  import { createEventDispatcher } from 'svelte'

  import Fa from 'svelte-fa'
  import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons'
  import {
    faClock,
    faLaptop,
    faTabletScreenButton
  } from '@fortawesome/free-solid-svg-icons'
  import FrameIphone12 from '../../devices/phones/Iphone12/FrameIphone12.svelte'

  export let showModal

  const dispatch = createEventDispatcher()

  let dialog
  let form
  let size = 'thumbnail'

  $: if (dialog && showModal) {
    dialog.showModal()
  }

  function handleSubmit() {
    dispatch('submit', {
      form: form
    })
  }
</script>

<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <form
    method="dialog"
    on:submit|preventDefault={handleSubmit}
    bind:this={form}
  >
    <div class="head">
      <h1>Select devices to emulate</h1>
    </div>
    <div class="container">
      <fieldset>
        <legend>
          <Fa icon={faApple} />
          Apple smartphones</legend
        >
        <label for="iPhone12" data-tooltip="390 x 844">
          <input type="checkbox" id="iPhone12" name="iPhone12" />
          <div>
            <span>iPhone 12</span>
            <FrameIphone12 {size} />
          </div>
        </label>
      </fieldset>
      <fieldset>
        <legend>
          <Fa icon={faAndroid} />
          Android smartphones</legend
        >
      </fieldset>
      <fieldset>
        <legend>
          <Fa icon={faLaptop} />
          Laptops</legend
        >
      </fieldset>
      <fieldset>
        <legend>
          <Fa icon={faTabletScreenButton} />
          Tablets</legend
        >
      </fieldset>
      <fieldset>
        <legend>
          <Fa icon={faClock} />
          Watches</legend
        >
      </fieldset>
    </div>
    <div class="form-buttons">
      <button type="reset" class="cancel" on:click={() => dialog.close()}
        >Cancel</button
      >
      <button type="submit" class="submit">Submit</button>
    </div>
  </form>
</dialog>

<style lang="scss">
  $hover-blue: hwb(185 97% 0%);
  $rose: #f72585;
  $grape: #7209b7;
  $zaffre: #3a0ca3;
  $neon-blue: #4361ee;
  $vivid-sky-blue: #4cc9f0;
  $offwhite: #f3f3f3;
  $arrow-size: 10px;

  .head {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 1.75rem;
  }

  label {
    position: relative;
    margin: 0;
    padding: 0;
    &::after {
      content: '';
      margin: 0;
      padding: 0;
      position: absolute;
      left: calc(50% - $arrow-size);
      bottom: calc(-3px - $arrow-size);
      /* the arrow */
      border: $arrow-size solid #000;
      border-color: transparent transparent black transparent;
      display: none;
      z-index: 1;
    }
    &::before {
      padding: 0.5rem 0;
      content: attr(data-tooltip);
      position: absolute;
      bottom: calc(-2rem - $arrow-size);
      width: 100%;
      background-color: black;
      color: white;
      border-radius: 5px;
      font-size: 1rem;
      text-align: center;
      display: none;
      z-index: 1;
    }
    &:hover::before,
    &:hover::after {
      display: block;
    }
  }

  input[type='checkbox'] {
    margin: 0;
    padding: 0;
    width: 0px;
    height: 0px;
    padding: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    + div {
      display: flex;
      margin: 0;
      margin-top: -18px;
      padding: 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      border: 1px solid black;
      border-radius: 0.5rem;
      width: 80px;
      height: 80px;
      background-color: white;
      cursor: pointer;
      transition: all 0.05s ease-in-out;
      &:hover {
        background-color: $offwhite;
      }
    }
    &:focus {
      + div {
        outline: 1px solid black;
      }
    }
    &:checked {
      + div {
        outline: 3px solid $vivid-sky-blue;
        font-weight: 700;
        border: 1px solid transparent;
      }
    }
  }

  dialog {
    width: 520px;
    position: absolute;
    top: 50%;
    bottom: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    background-color: $offwhite;
    &::backdrop {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  fieldset {
    margin: 0 auto;
    padding: 1rem;
    width: 100%;
    max-width: calc(5 * (80px + 0.8rem));
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, max-content));
    justify-content: start;
    gap: 0.8rem;
  }
  .container {
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .form-buttons {
    display: flex;
    gap: 0.25rem;
    justify-content: center;
  }

  button {
    padding: 0.5rem 1rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    color: white;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.05s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
    &.cancel {
      background-color: $rose;
    }
    &.submit {
      background-color: $neon-blue;
    }
  }
</style>
