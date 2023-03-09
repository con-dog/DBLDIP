import App from './App.svelte'

export default {
  title: 'App',
  component: App
}

export const Default = {
  render: () => ({
    Component: App,
    props: {
      primary: true,
      label: 'App'
    }
  })
}
