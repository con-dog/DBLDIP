import SelectDevice from './SelectDevice.svelte'

export default {
  title: 'SelectDevice',
  component: SelectDevice
}

export const Default = {
  render: () => ({
    Component: SelectDevice,
    props: {
      primary: true,
      label: 'SelectDevice'
    }
  })
}
