import Docs from './../../../README.md'
import { Seo } from '@/components/Seo'

function Home() {
  return (
    <section id="index">
      <Seo />
      <article>
        <Docs />
      </article>
    </section>
  )
}

export default Home
