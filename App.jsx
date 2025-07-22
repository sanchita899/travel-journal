import Header from "./Components/Header";
import Entry from "./entry";
import data from "./data.js";



export default function App(){

    const entryElements=data.map((entry)=>{
        return(
            <Entry
            img={entry.img}
            title={entry.title}
            country={entry.country}
            googleMapsLink={entry.googleMapsLink}
            dates={entry.dates}
            text={entry.text}

            />


        )
        
        

    })
    return(
        <>
        <Header></Header>
        {entryElements}
        
        </>

    )
    
}