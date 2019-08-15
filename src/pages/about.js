import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <div>
      <h1>About</h1>
      <div style={{ color: "red" }}>Hello world!</div>
      <a href="/">index a</a>
      <br />
      <Link to="/">index link</Link>
    </div>
  )
}
