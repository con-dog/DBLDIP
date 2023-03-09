import AddDevice from './AddDevice.svelte'

export default {
  title: 'AddDevice',
  component: AddDevice
}

export const Default = {
  render: () => ({
    Component: AddDevice,
    props: {
      primary: true,
      label: 'AddDevice'
    }
  })
}
