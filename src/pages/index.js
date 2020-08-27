import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { graphql, StaticQuery }from "gatsby"

const IndexPage = ({data}) => {

  const {allWordpressPage:{edges}}=data

 return  <Layout>
  <div>
{edges.map(page => {
  return <div key={page.node.id}>

    <h1>{page.node.title}</h1>
    <div dangerouslySetInnerHTML={{__html:page.node.content}}></div>
  </div>
})}
</div>
  </Layout>
}


export const query = graphql`
  {
    allWordpressPage {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`

export default IndexPage
