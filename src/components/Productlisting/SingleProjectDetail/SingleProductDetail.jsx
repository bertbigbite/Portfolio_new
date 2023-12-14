import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./SingleProductDetail.css"
import Projects from '/projects.json'
import "/src/components/Productlisting/Productlisting"

function SingleProductDetail () {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState ('')
    const [url, setUrl] = useState('')
    const [git, setGit] = useState ('')
    const {id} = useParams()
    

    useEffect (function(){
        fetch('projects.json')
        .then(function(res){
            return res.json(Projects)
        })
        .then(function(project){
            console.log(project)
            setName(project.name)
            setDesc(project.desc)
            setUrl(project.url)
            setGit(project.git)
            setImage(project.image)
        })
    }, [])
    
    return (
      
        <div className= "display_container">
            <div className= "display_container image">
            <img src={image} alt={name} />
            </div>
            <div className= "display_container content">
              <h1>{name}</h1>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Description:</strong> {desc}</p>
              <p><strong>url:</strong> {url}</p>
              <p><strong>git:</strong>{git}</p>
            </div>
        </div>
    )
}
export default SingleProductDetail