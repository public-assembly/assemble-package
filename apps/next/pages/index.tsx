import Docs from './../../../README.md'
import { Seo } from '@/components/Seo'

function Home() {
  return (
    <section id="index">
      <Seo />
      <Docs />
    </section>
  )
}

export default Home
