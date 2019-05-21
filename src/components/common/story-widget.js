import React from "react"
import Story from "./story-board"
import { Link } from "gatsby"
import Button from "../elements/button"

export default ({ stories, className }) => (
  <div className={`story-widget__container ${className}`}>
    <ul className="story-widget">
      {stories.map((story, index) => (
        <Story {...story} key={story.id} className={`story--${index}`} />
      ))}
    </ul>
    <div className="story-widget__bottom flex-container flex-center">
      <Link to="/">
        <Button>See More</Button>
      </Link>
    </div>
  </div>
)
