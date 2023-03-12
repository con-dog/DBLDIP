<script lang="ts">
  import Fa from 'svelte-fa'
  import {
    faInfo,
    faWindowMaximize,
    faWindowMinimize,
    faXmark
  } from '@fortawesome/free-solid-svg-icons'
  import { v4 as uuidv4 } from 'uuid'
  import Sidebar from './components/aside/Sidebar/Sidebar.svelte'
  import AddDevice from './components/buttons/AddDevice/AddDevice.svelte'
  import SelectDevice from './components/modals/SelectDevice/SelectDevice.svelte'
  import Iphone12 from './components/devices/phones/Iphone12/Iphone12.svelte'

  let showModal: true | false = false
  let devices: any = []

  let colorMode = 'lightMode'

  const deviceMap = {
    iPhone12: Iphone12
  }

  function toggleColorMode() {
    colorMode = colorMode === 'lightMode' ? 'darkMode' : 'lightMode'
  }

  function handleClick(event) {
    showModal = true
  }

  function handleSubmit(event) {
    const formData = new FormData(event.detail.form)
    const selected = []
    for (const [key, value] of formData) {
      const device = {}
      device['name'] = key
      device['uuid'] = uuidv4()
      if (value === 'on') {
        selected.push(device)
      }
    }
    devices = [...devices, ...selected]
  }

  function removeDevice(uuid) {
    devices = devices.filter((device) => device['uuid'] !== uuid)
  }
</script>

<main>
  <AddDevice on:click={handleClick} />
  <Sidebar {toggleColorMode} {colorMode} />
  <SelectDevice bind:showModal on:submit={handleSubmit} />
  <div class="devices">
    {#each devices as device}
      <div class="device-container">
        <div class="titlebar">
          <h2>{device['name']}</h2>
          <div>
            <button class="minimize-device"> _ </button>
            <button
              class="close-device"
              on:click={() => removeDevice(device['uuid'])}
            >
              X
            </button>
          </div>
        </div>
        <hr />
        <svelte:component this={deviceMap[device['name']]} {colorMode} />
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
