import React from 'react';
import LanguageContext from '../../context/LanguageContext';

import './index.css'

const langOptions = [
  { 
    id: 1,
    value: 'EN',
    language: 'English',
  },
  { 
    id: 2, 
    value: 'HI', 
    language: 'हिंदी',
  },
  { 
    id: 3, 
    value: 'TE', 
    language: 'తెలుగు',
  }
]

const Header = () => {
  return(
    <LanguageContext.Consumer>
      {value =>{  
        const {activeLanguage, changeLanguage} = value
        const onChangeLanguage = event =>{
          changeLanguage(event.target.value)
      }

      return(
        <div className='header-container'>
          <img src='https://assets.ccbp.in/frontend/react-js/windows-logo-img.png' alt='logo'  className='header-logo'/>
          <div className='header-select'>
            <select 
              value={activeLanguage}
              onChange={onChangeLanguage}
            >
              {langOptions.map((eachOption) =>(
                <option key={eachOption.id} value={eachOption.value}>
                  {eachOption.language}
                </option>
              ))}
            </select>
          </div>
        </div>
      )
      }}
    </LanguageContext.Consumer>
  )
}

export default Header