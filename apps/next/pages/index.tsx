import Docs from './../../../README.md'

function Home() {
  return (
    <section className="markdown-wrapper flex flex-col gap-4 max-w-[900px]">
      <Docs />
    </section>
  )
}

export default Home
