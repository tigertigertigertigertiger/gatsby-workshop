import React from "react"
import { Link } from "gatsby"

export default ({ data }) => {
  return (
    <>
      <h1>Pokedex</h1>
      {data.allPokemonJson.edges.map(({ node }) => {
        return (
          <div key={node.name.english}>
            <Link to={"/" + node.name.english}>{node.name.english}</Link>
          </div>
        )
      })}
    </>
  )
}

export const query = graphql`
  {
    allPokemonJson {
      edges {
        node {
          name {
            english
          }
        }
      }
    }
  }
`
