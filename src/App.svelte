<script lang="ts">
  import Sidebar from './components/aside/Sidebar/Sidebar.svelte'
  import AddDevice from './components/buttons/AddDevice/AddDevice.svelte'
  import SelectDevice from './components/modals/SelectDevice/SelectDevice.svelte'

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
</main>

<style lang="scss">
</style>
