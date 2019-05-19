import React from 'react'
import Story from "./story-board"

export default ({stories, title, className}) => (
    <div className={`story-widget ${className}`}>
        <h4>{title}</h4>
        <ul className="story-widget">
            {stories.map((story, index) => <Story {...story} key={story.id} className={`story--${index}`}/>)}
        </ul>
    </div>
)