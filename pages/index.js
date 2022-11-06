import LandingSection from '../styles/LandingSection.module.css'
import Screen1 from "../styles/Screen1.module.css"
import Screen2 from "../styles/Screen2.module.css"
import Screen3 from "../styles/Screen3.module.css"
import Image from 'next/image'
import Picture1 from "../public/MainSection/Picture.svg"
import Picture2 from "../public/MainSection/Picture2.svg"


export default function Home() {
  return (
    <div className={LandingSection.table}>
      <title>New Code Labs</title>
        <div className={LandingSection.background}>
          <h1 className={LandingSection.headline}>
            New Code Labs
              <h3 className={LandingSection.underline}>
                Design und Entwicklung für guten Preis
              </h3>
          </h1>   
        </div>

        <div className={Screen1.background}>
          
            <text className={Screen1.text}>
              Modern Design
            </text>
           
            <Image src={Picture1}/>
            
            
        </div>
      
      <div className={Screen2.background} >
        <text className={Screen2.text}>
          Einfache Kommunikation mit unserem Team
        </text>
        
        <Image src={Picture2} className={Screen2.picture}/>
      </div>

      <div className={Screen3.background}>
        <h1 className={Screen3.header}>
          Oder nutzen Sie einfach unseren Formular
        </h1>
        <div>
        <div className={Screen3.text}>
          Haben Sie Interesse an unseren Abgeboten? 
        </div>
        <div className={Screen3.text}>
          Oder wollen Sie einfach eine Frage stellen?
        </div>
        <div className={Screen3.text}>
          Schreiben Sie uns eine Email:
        </div>
        <div className={Screen3.text}>
          info@newcodelabs.eu
        </div>
        </div>
        <form className={Screen3.formBorder}>
          <div className={Screen3.inputFlex}>
          <input className={Screen3.inputFirst} placeholder='Name'/>
          
          <input className={Screen3.input} placeholder='Email'/>

          <input className={Screen3.input} placeholder='Telefonnummer'/>

          <input className={Screen3.inputLast} placeholder='Kurze Information'/>
          </div>
          <button className={Screen3.button}>Senden</button>
        </form>
      </div>
   </div>
  )
}