import React, { Component } from 'react'
import styles from './styles.module.css'
import './styles.css'
import jQuery from 'jquery'
import projects from '../../projects';

export default class ProjectsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectStore: projects,
            currentProject: 0
        }
    }
    
    /* jQuery for on-click scrolling of scroll down button */
    componentDidMount() {
        jQuery(document).ready(function($) {
            $("a#scrollProjects").on("click", function(e) {
                e.preventDefault();
                $("body, html").animate({ 
                scrollTop: $($(this).attr('href') ).offset().top 
                }, 600);
            });
        });
    }
    /**/
    
    handleProjectChange = (e) => {
        if (this.state.currentProject === 4) {
            this.setState({
                currentProject: 0,
            })
        } else {
            this.setState({
                currentProject: this.state.currentProject + 1,
            })
        }
    }

    render() {

        let projectStore = this.state.projectStore;
        let currentProject = this.state.currentProject;

        return (
            <div role="presentation" className={styles.projectWrapper} id="projects">    
                    <div role="contentinfo" className={styles.projectHolder}>
                        <h1 className={styles.projectHeading}>
                            <u>PROJECTS</u>
                        </h1>
                        <div className={styles.fadeProjects} role="presentation">
                            <h2 className={styles.projectHeadingTwo}>{projectStore[currentProject].title}</h2>
                            <div role="contentinfo" className="languageIcons">
                                {projectStore[currentProject].languageIcons.map((icon) => {
                                    return (
                                        <img alt={icon.alt} key={icon.alt} className={icon.class} src={icon.src} />
                                    )
                                })}
                            </div> 

                            <div role="contentinfo" className="projectScreenshot">
                                <img alt="quiz app screenshot" className={styles.quizScreenshot} src={projectStore[currentProject].screenshot} />
                            </div>
                            <a href={projectStore[currentProject].applink} target="_blank" className="appLink">Live Application</a>

                            <a href={projectStore[currentProject].githublink} target="_blank" className="githubLink">GitHub Repository</a>

                            <p className={styles.projectDescription}>
                                {projectStore[currentProject].description}
                            </p>
                        </div>
                    </div>
                    <div className={styles.projectScrollHolder}>
                        <a className={styles.scrollDownProject} id="projectScroll" onClick={(e) => this.handleProjectChange(e)} address="true"></a>
                    </div>
                    <div role="button" className={styles.buttonHolder3}>
                        <a href="#contactInfoHolder" aria-label="Scroll down" className={styles.scrollDown} id="scrollProjects" address="true"></a>
                    </div>
            </div>
        )
    }
}
