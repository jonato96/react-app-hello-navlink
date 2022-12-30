import Card from "../components/Card"
import Cat from "../components/Cat" 


const About = () =>{  
    const cardInfo={
        // image: "https://i.pinimg.com/originals/e6/e5/e1/e6e5e185c3be2ef5d22f6b01bf34f1cd.jpg",
        name: "La vaca lola",
        description: "Tiene cabeza y tiene cola",
        hasChild: "No"
      }  
    return(
        <div>            
            <Card {...cardInfo}/>
            <Cat/>
        </div>
    )
}
export default About