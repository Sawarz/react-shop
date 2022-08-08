import { useState, useEffect, useRef } from 'react'
import styles from './dropdown.module.css'

export default function Dropdown({ label, options, chooseSorting }) {
  const [showOptions, _setShowOptions] = useState(false);

  const dropdown = useRef(null);
  const stateRef = useRef(showOptions);

  function setShowOptions(data){
    stateRef.current = data;
    _setShowOptions(data);
  }

  const closeOpenMenus = (e) => {
    if (dropdown.current != null) {
      if (stateRef.current && !dropdown.current.contains(e.target)) {
        setShowOptions(false)
      }
    }
  }
  
  useEffect(() => {
    document.addEventListener('mousedown', closeOpenMenus);
  }, [])

    return (
      <div className={styles.dropdown} ref={dropdown}>
        <button className={styles.button}
          onClick={() => {
            setShowOptions(!showOptions);
          }}
        >Sort by</button>
          {showOptions ? 
            <div className={styles.options}>
            {options.map((option, i) => {
                return (
                  <button key={i} className={styles.option} onClick={() => {
                      chooseSorting(option);
                      setShowOptions(false);
                  }}>{option}</button>
                )
            })}
              </div>
            :
            null
        }
      </div>
      )
}