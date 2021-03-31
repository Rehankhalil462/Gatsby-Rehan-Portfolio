import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../layout"
import Hero from "../hero"
import Projects from "../projects"
import About from "../about"
import Contact from "../contact"

const Cara = () => (
  <Layout>
    <Parallax pages={10}>
      <Hero offset={0} factor={1} />
      <Projects offset={2.5} factor={4} />
      <About offset={7} factor={1} />
      <Contact offset={8} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
