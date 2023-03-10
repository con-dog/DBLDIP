<script lang ts>
  import Fa from 'svelte-fa'
  import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons'
  import {
    faLaptop,
    faTabletScreenButton
  } from '@fortawesome/free-solid-svg-icons'
  import FrameIphone12 from '../../devices/phones/Iphone12/FrameIphone12.svelte'

  let size = 'thumbnail'
</script>

<dialog>
  <form method="dialog">
    <h1>Select devices to emulate</h1>
    <div class="container">
      <fieldset>
        <legend>
          <Fa icon={faApple} />
          Apple smartphones</legend
        >
        <label>
          <input type="checkbox" />
          <div>
            <span>iPhone 12</span>
            <FrameIphone12 {size} />
          </div>
        </label>
        <label>
          <input type="checkbox" />
          <div>
            <span>iPhone 12</span>
            <FrameIphone12 {size} />
          </div>
        </label>
        <label>
          <input type="checkbox" />
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
        <legend>Watches</legend>
      </fieldset>
    </div>
    <div>
      <button type="reset">Cancel</button>
      <button type="submit">Submit</button>
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

  label {
    margin: 0;
    padding: 0;
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
        color: $rose;
        font-weight: 700;
        border: 1px solid transparent;
      }
    }
  }

  dialog {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
  }
  fieldset {
    display: flex;
    gap: 0.8rem;
  }
  .container {
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
</style>
