import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero"
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects"
import About from "@lekoarts/gatsby-theme-cara/src/components/about"
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact"

const Cara = () => (
  <Layout>
    <Parallax pages={9}>
      <Hero offset={0} factor={1} />
      <Projects offset={2.5} factor={4} />
      <About offset={7} factor={1} />
      <Contact offset={8} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
