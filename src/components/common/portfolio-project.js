import React from 'react'

export default ({projectName, projectLink, projectScreenshot}) => (
    <div className="portfolio-project">
        <a href={projectLink}>
            <div className="portfolio-project__thumb">
                <img src={projectScreenshot} alt={projectName}/>
            </div>
            <div className="portfolio-project__name">
                {projectName}
            </div>
        </a>
    </div>    
)