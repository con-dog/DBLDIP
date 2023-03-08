import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  // preprocess: vitePreprocess({
  //   scss: {
  //     prependData: '@import "src/styles/variables.scss"'
  //   }
  // })
  preprocess: sveltePreprocess({
    scss: {
      prependData: '@import "src/styles/variables.scss"'
    }
  })
}
