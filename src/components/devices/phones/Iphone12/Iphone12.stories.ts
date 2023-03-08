import Iphone12 from './Iphone12.svelte'

export default {
  title: 'Iphone12',
  component: Iphone12
}

export const Default = {
  render: () => ({
    Component: Iphone12,
    props: {
      primary: true,
      label: 'Iphone12'
    }
  })
}
