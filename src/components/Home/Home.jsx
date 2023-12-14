import "./Home.css"
import { useEffect, useState } from "react"
import Projects from '/projects.json'
import HomeBanner from "../HomeBanner/HomeBanner"
import ProductListing from "../Productlisting/Productlisting"

function Home() {
    const [projects, setProjects] = useState ([])
    const [clickedBookId, setclickedBookId] = useState(null)


    
    useEffect (function() {
        fetch('projects.json')
            .then(function (res) {
                return res.json()
            })
            .then(function (project) {
                setProjects(project)
            })
    }, [])
   
    return (
        <>
        <HomeBanner/>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Recent projects</h2>
        <div className='rounded-3xl flex flex-row bg-slate-100 books-container'>
            {Projects.map(project => 
            <ProductListing key={project.id}
            name={project.name} 
            desc={project.desc} 
            image={project.image} 
            url={project.url} 
            view={project.view} 
            git={project.git}
            setClickedBookId={setclickedBookId}/>    
            )}
        </div>

        </>

        
    )
}
export default Home