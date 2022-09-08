import WelcomeMessage from "./WelcomeMessage"
import React, { useContext } from 'react'
import { LanguageContext } from './LanguageChooser'

function Content() {

  const {setLanguage} = useContext(LanguageContext)

  return (
    <div className="labelName">
      <label>
        <div className="neben">
        <h2>Please select your language:</h2>
        <select onChange={(e) => setLanguage(e.target.value)}>
          <option value='DE'>GERMAN</option>
          <option value='US'>ENGLISH</option>
          <option value='TR'>TURKISH</option>
          <option value='IR'>PERSIAN</option>
          <option value='FR'>FRENCH</option>
          <option value='SP'>SPANISH</option>
          <option value='DU'>DUTCH</option>
        </select>
        </div>
        <WelcomeMessage />
      </label>
    </div>
  )
}

export default Content