const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
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
  `)

  result.data.allPokemonJson.edges.forEach(({ node }) =>
    createPage({
      path: node.name.english,
      component: path.resolve("./src/template/pokemon.js"),
      context: {
        slug: node.name.english,
      },
    })
  )
}
