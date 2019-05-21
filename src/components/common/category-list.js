import React from "react"
import { Link } from "gatsby"
import { getCategoryLink } from "../../helpers/link"

export default ({ categories, className }) => (
  <ul className={`inline-list flex-container flex-dir-row ${className || ""}`}>
    {categories.map((item, index) => (
      <li key={index} className="list-item text--bold">
        <Link to={getCategoryLink(item)}>{item}</Link>
      </li>
    ))}
  </ul>
)
