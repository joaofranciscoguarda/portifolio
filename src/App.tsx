import { createSignal } from 'solid-js'
import { Radar } from './chart';
import { Icon } from '@/Icons';
import { onMount } from 'solid-js'
import { themeChange } from 'theme-change'
onMount(async () => {
  themeChange();
})

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
    <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" class='text-white'>Mudar</button>
    <Radar/>
    <Icon icon='pintas'/>
    </>
  )
}

export default App
