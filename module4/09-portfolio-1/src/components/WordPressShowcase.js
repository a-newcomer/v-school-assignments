import React from 'react';
import portfolio from '../portfolio'
import {Link} from 'react-router-dom'

function WordPressShowcase() {
    let wpList = portfolio.map((site)=>{
        if (site.categories.includes("wordpress-site")) {
        return(<figure className="project" key={site.id}>
                <Link to={`/projects/${site.id}`}>
                  <img src={site.screenshotURL}  alt={site.title} />
                  <div className="project_details" >
                        <h4>{site.title}</h4>
                        <p className="project_desc">{site.subTitle}</p>
                    </div> 
                </Link>
               </figure>)
}
    })
    let featured = portfolio.map((site)=>{
        if (site.categories.includes("featured")) {
        return(<figure className="project featured" key={site.id} >
                 <Link to={`/projects/${site.id}`}>
                  <img src={site.screenshotURL}  alt={site.title} />
                  <div className="project_details" >
                        <h4>{site.title}</h4>
                        <p className="project_desc">{site.subTitle}</p>
                    </div> 
                    </Link>
               </figure>)
}
    })
    return (
        <section className="section section-2 php-wordpress">
            <h2>WordPress & PHP</h2> 
            <article className="project-holder">
                {featured}
                {wpList}
                
            </article>
            
      </section>
    );
};

export default WordPressShowcase;