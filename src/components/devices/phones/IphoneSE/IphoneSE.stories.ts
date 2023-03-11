import IphoneSE from './IphoneSE.svelte'

export default {
  title: 'IphoneSE',
  component: IphoneSE
}

export const Default = {
  render: () => ({
    Component: IphoneSE,
    props: {
      primary: true,
      label: 'IphoneSE'
    }
  })
}
