import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioProject from "../components/common/portfolio-project"

export const projects = [
    {
        projectName: 'Hobbyhall',
        projectLink: 'https://www.hobbyhall.fi/',
        projectScreenshot: require('../images/projects/hobbyhall.png')
    },
    {
        projectName: 'Bauhof',
        projectLink: 'https://www.bauhof.ee/',
        projectScreenshot: require('../images/projects/bauhof.png')
    },
    {
        projectName: 'SLO',
        projectLink: 'https://verkkokauppa.slo.fi/',
        projectScreenshot: require('../images/projects/slo.png')
    },
    {
        projectName: 'Kalustekauppa',
        projectLink: 'https://www.kalustekauppa.com/',
        projectScreenshot: require('../images/projects/kalustekauppa.png')
    },
    {
        projectName: 'Hurtta',
        projectLink: 'https://www.hurtta.com/global_en/',
        projectScreenshot: require('../images/projects/hurtta.png')
    },
    {
        projectName: 'Bestfriend',
        projectLink: 'https://www.bestfriend.com/en/',
        projectScreenshot: require('../images/projects/bestfriend.png')
    },
    {
        projectName: 'Alyasra',
        projectLink: 'https://www.ontime.com/kw_en/',
        projectScreenshot: require('../images/projects/alyasra.png')
    },
    {
        projectName: 'Yourface',
        projectLink: 'https://www.yourface.fi/face_fi/',
        projectScreenshot: require('../images/projects/yourface.png')
    },
    {
        projectName: 'Rils',
        projectLink: 'https://www.rils.com/',
        projectScreenshot: require('../images/projects/rils.png')
    }
];
export default ({ data }) => (
    <Layout>
      <SEO title="About Me" />
      <div className="page-layout">
        <div className="portfolio-head">
            <div className="portfolio-head__bg">
            </div>
            <div className="portfolio-head__profile">
                <div className="portfolio-head__avatar">
                    <div className="hero__image"></div>
                </div>
                <div className="portfolio-head__content">
                    <h4>Khoa Bui</h4>
                    <div className="portfolio-head__title">
                        <span className="text--bold">Frontend Engineer</span> &#183; Fish Lover &#183; Amateur Poem writer.
                    </div>
                    <div className="portfolio-head__location">
                        <span className="text--bold">Dublin, Ireland</span> - But I'm open to locate to US or Australia.
                    </div>
                    <div className="portfolio-head__about">
                        <div className="text--bold">Facts about me:</div>
                        <ul className="fact-list">
                            <li>
                                <span>I'm frontend engineer by day and fullstack engineer by night.</span>
                            </li>
                            <li>
                                <span>I have worked with JavaScript, PHP, Python, MySQL, MongoDB.</span>
                            </li>
                            <li>
                                <span>I love to optimize web application, it's my pet peeves.</span>
                            </li>
                            <li>
                                <span>I dont like JavaScript to begin with,
                                    I spend entire first year in the university to avoid using it by using CSS instead.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="portfolio-head__story">
                        <div className="text--bold">Background story:</div>
                        <p>
                            <strong className="text--bold">Chapter one: </strong> I broke free since 1993 in Vietnam. <br/>
                            <strong className="text--bold">Chapter two: </strong> I started and earned my bachelor degree in Network and Telecommunication in Oulu, Finland with a scholarship. <br/>
                            <strong className="text--bold">Chapter there: </strong>
                            Third year in university, I interned at Vaimo Group in Finland and became a Software Engineer there.
                            My work was very exciting, LAMP Stack with Magento 1 and Magento 2.
                            I became one of the first developer in the group to work with Magento 2 and integrate React with Magento. <br/>
                            <strong className="text--bold">Chapter four: </strong>
                            Saying farewell to my friend and colleages in Oulu, I moved to Dublin, Ireland to work for Smartbox Group Ltd.
                            The company is so great and welcoming, I could not complain about the job and I would recommend anyone to work at Smartbox Group.
                            In Beneficiary squad, I maintain and improve Frontend development with ES6, Unit Tests, TypeScript and VueJS.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-projects">
            <div className="portfolio-projects__grid">
                {projects.map((project, index) => <PortfolioProject key={index} {...project}/>)}
            </div>
        </div>
      </div>
    </Layout>
  )