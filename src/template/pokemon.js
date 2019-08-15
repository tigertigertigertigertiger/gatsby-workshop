import React from "react"
import { Link } from "gatsby"

export default ({ data }) => {
  const pokemon = data.pokemonJson
  const { name, type, base, image } = pokemon
  return (
    <div>
      <Link to="/">Go back</Link>
      <h1>Name {name.english}</h1>
      <h1>Type {type.join(", ")}</h1>
      <h1>base Attack {base.Attack}</h1>
      <h1>base Defense {base.Defense}</h1>
      <img src={image} />
      <br />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    pokemonJson(name: { english: { eq: $slug } }) {
      base {
        Attack
        Defense
        HP
      }
      name {
        english
      }
      type
      image
    }
  }
`
