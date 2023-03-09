import Sidebar from './Sidebar.svelte'

export default {
  title: 'Sidebar',
  component: Sidebar
}

export const Default = {
  render: () => ({
    Component: Sidebar,
    props: {
      primary: true,
      label: 'Sidebar'
    }
  })
}
