import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const DetailType = ({ type, onSelect }) => {
    const folderList = useSelector(state => state.user.folders)
    var options = {}
    switch(type){
        case "type":
            options = { id:"type-info", label: "Select type", dropOptions: ["Login"] };
            break
        case "folder":
            options = { id: "folder-info", label: "Select folder", dropOptions: folderList };
            
    }

    const [ displayOption, setDisplayOption ] = useState(false)
    const [ currentValue, setCurrentValue ] = useState(options.dropOptions[0])
    const handleDisplay = () => {
        setDisplayOption(prev => !prev)
    }
    const handleSelect = (type, value) => {
        event.preventDefault()
        setCurrentValue(value)
        onSelect(type,value)
        handleDisplay()

    }
  return (
    <div className="detail-type">
                    <label htmlFor="type-info">{options.label}</label>
                    <input onClick={handleDisplay} type="text" id={options.id} readOnly value={currentValue} />
                    <div className={displayOption ? "options active" : "options"}>
                        {options.dropOptions.length && options.dropOptions.map((option, index) => (<button key={index} onClick={() => handleSelect(type,option)}>{option}</button>))}
                    </div>
                    {/* <div name="folder-info" id={options.id}>
                        <option value="">{options.dropOptions[0]}</option>
                    </div> */}
                    <span className="material-symbols-outlined">
                        expand_more
                        </span>
                </div>
  )
}

export default DetailType