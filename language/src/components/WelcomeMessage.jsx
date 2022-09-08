import React, { useContext } from 'react'
import { LanguageContext } from './LanguageChooser'

function WelcomeMessage() {

  const {language} = useContext(LanguageContext);

  const messages = {
    DE: "Hallo Welt!",
    US: "Hello World!",
    TR: "Selam Dünya!",
    IR: "سلام دنیا!",
    FR: "Bonjour le monde!",
    SP: "Hola Mundo!",
    DU: "Hallo Wereld"
  }

  return (
    <div>
      <h1>{messages[language]}</h1>
    </div>
  )
}

export default WelcomeMessage