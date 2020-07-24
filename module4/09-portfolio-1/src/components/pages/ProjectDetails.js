import React from 'react'
import {useParams} from 'react-router-dom'
import portfolio from '../../portfolio'

function ProjectDetails(props) {
    const {projectId} = useParams()

    const thisProject = portfolio.find(project => 
        project.id === projectId )
        console.log(thisProject)

    return(
        <div className="project-page">
        <h2 className="project-detail-title">{thisProject.subTitle}</h2>
        <h1 className="project-detail-title">{thisProject.title}</h1>
            <div className="project-detail">
                <article className="text-section">
                    <h4><strong>Problem: </strong></h4>
                    {thisProject.problem}
                    <h4><strong>Approach: </strong></h4>
                    {thisProject.approach}
                    <h4><strong>Results: </strong></h4>
                    {thisProject.results}
                </article>

                <figure className="pic-section">
                    <img src={thisProject.otherAssets[0]} alt={thisProject.subTitle}></img>
                    <a href="#" target="_blank">
                        <button>View Site</button>
                    </a>
                </figure>
                
            </div> {/* end project-detail */}
        </div>
   
    )
}
export default ProjectDetails