import React from "react"
import { Link } from "gatsby"
import { getCategoryLink } from "../../helpers/link"


export default ({ categories, className }) => (
  <ul className={`inline-list ${className || ""}`}>
    {
        categories.map((item, index) => (
            <li key={index}>
                <Link to={getCategoryLink(item)}>{item}</Link>
            </li>)
        )
    }
  </ul>
)
