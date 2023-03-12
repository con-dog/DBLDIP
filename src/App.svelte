<script lang="ts">
  import Fa from 'svelte-fa'
  import {
    faInfo,
    faWindowMaximize,
    faWindowMinimize,
    faXmark
  } from '@fortawesome/free-solid-svg-icons'
  import Sidebar from './components/aside/Sidebar/Sidebar.svelte'
  import AddDevice from './components/buttons/AddDevice/AddDevice.svelte'
  import SelectDevice from './components/modals/SelectDevice/SelectDevice.svelte'
  import Iphone12 from './components/devices/phones/Iphone12/Iphone12.svelte'

  let showModal: true | false = false
  let devices: any = []

  function handleClick(event) {
    showModal = true
  }

  function handleSubmit(event) {
    const formData = new FormData(event.detail.form)
    const data = {}
    const selected = []
    for (const [key, value] of formData) {
      data[key] = value
      if (value === 'on') {
        selected.push(key)
      }
    }
    devices = [...devices, ...selected]
    console.log(devices)
  }
</script>

<main>
  <AddDevice on:click={handleClick} />
  <Sidebar />
  <SelectDevice bind:showModal on:submit={handleSubmit} />
  <div class="devices">
    {#each devices as device}
      <div class="device-container">
        <div class="titlebar">
          <h2>{device}</h2>
          <div>
            <button class="minimize-device"> _ </button>
            <button class="close-device"> X </button>
          </div>
        </div>
        <hr />
        <Iphone12 />
      </div>
    {/each}
  </div>
</main>

<style lang="scss">
  $rose: #f72585;
  $grape: #7209b7;
  $zaffre: #3a0ca3;
  $neon-blue: #4361ee;
  $vivid-sky-blue: #4cc9f0;
  $offwhite: #f3f3f3;

  main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .devices {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-left: 9rem;
  }

  .titlebar {
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      position: absolute;
    }
    div {
      margin-left: auto;
    }
  }

  .close-device {
    margin: 0;
    border: 1px solid black;
    border-radius: 5px;
    background-color: $rose;
    color: $offwhite;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
  }
  .minimize-device {
    margin: 0;
    border: 1px solid black;
    border-radius: 5px;
    color: black;
    cursor: pointer;
    font-size: 1rem;
  }
</style>
