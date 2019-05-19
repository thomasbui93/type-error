import React from 'react'
import { Link } from 'gatsby'
import dayjs from 'dayjs'
import { getCategoryLink } from '../../helpers/link'

const StoryBoard = ({
    title,
    image,
    slug,
    createdTime,
    timeToRead,
    excerpt,
    className,
    category
}) => (
    <Link to={slug}>
        <div className={`story-board ${className}`}>
            <div className="story-board__thumb">
                <img src={image} alt={title} />
            </div>
            <div className="story-board__content">
                <div className="story-board__title title">{title}</div>
                <ul className="story-board__category inline-list">
                    { category.map(item => <li><Link to={getCategoryLink(item)}>{item}</Link></li>)}
                </ul>
                <div className="story-board__intro">{excerpt}</div>
                <div className="story-board__meta">
                    <span>{dayjs(createdTime).format('YYYY MMM D')}</span>
                    <span>{timeToRead} min to read.</span>
                </div>
            </div>
        </div>
    </Link>
)

export default StoryBoard