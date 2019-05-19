import React from 'react'
import Story from "./story-board"
import { Link } from 'gatsby';

export default ({stories, className}) => (
    <div className={`story-widget ${className}`}>
        <ul className="story-widget">
            {stories.map((story, index) => <Story {...story} key={story.id} className={`story--${index}`}/>)}
        </ul>
        <div className="story-widget">
            <Link to='/'><button>See More</button></Link>
        </div>
    </div>
)