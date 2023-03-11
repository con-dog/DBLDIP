<script lang="ts">
  import Sidebar from './components/aside/Sidebar/Sidebar.svelte'
  import AddDevice from './components/buttons/AddDevice/AddDevice.svelte'
  import SelectDevice from './components/modals/SelectDevice/SelectDevice.svelte'

  let showModal: true | false = false

  function handleClick(event) {
    console.log('showing modal')
    showModal = true
  }
</script>

<main>
  <AddDevice on:click={handleClick} />
  <SelectDevice bind:showModal />
</main>

<style lang="scss">
</style>
