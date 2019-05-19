import React from "react"
import { Link } from "gatsby"
import dayjs from "dayjs"
import CategoryList from "./category-list"

const StoryBoard = ({
  title,
  image,
  slug,
  createdTime,
  timeToRead,
  excerpt,
  className,
  category,
}) => (
  <div className={`story-board ${className}`}>
    <div className="story-board__thumb">
      <img src={image} alt={title} />
    </div>
    <div className="story-board__content">
      <Link to={slug}>
        <div className="story-board__title">{title}</div>
      </Link>
      <CategoryList categories={category} className="story-board__category" />
      <div className="story-board__intro">{excerpt}</div>
      <div className="story-board__meta">
        <span>{dayjs(createdTime).format("YYYY MMM D")}</span>
        <span>{timeToRead} min to read.</span>
      </div>
    </div>
  </div>
)

export default StoryBoard
