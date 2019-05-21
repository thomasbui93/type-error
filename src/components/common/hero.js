import React from 'react'
import linkedin from '../../images/linkedin.svg'
import github from '../../images/github.svg'
import twitter from '../../images/twitter.svg'

export default () => (<div className="hero flex-container flex-dir-col">
    <div className="hero__avatar flex-container flex-center">
        <div className="hero__image">
        </div>
    </div>
    <div className="hero__content text--center">
        <h6 className="hero__name text--bold">
            Khoa Bui 
        </h6>
        <div className="hero__title">
            A Frontend Engineer &#183; Dublin, Ireland
        </div>
        <p>
            I built web with JavaScript, PHP, Python since 2017. Keep betting on JavaScript and profit.
        </p>
        <div className="flex-container flex-center">
            <div className="hero__social">
                <a href="https://www.linkedin.com/in/bdk93" target="_blank">
                    <img src={linkedin} alt="Khoa Bui's Linkedin"/>
                </a>
            </div>
            <div className="hero__social">
                <a href="https://github.com/thomasbui93" target="_blank">
                    <img src={github} alt="Khoa Bui's Github"/>
                </a>
            </div>
            <div className="hero__social">
                <a href="https://twitter.com/moonagek" target="_blank">
                    <img src={twitter} alt="Khoa Bui's Twitter"/>
                </a>
            </div>
        </div>
    </div>
</div>)