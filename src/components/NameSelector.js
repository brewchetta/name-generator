import { useState } from 'react'
import CelticNames from './CelticNames'
import DemonicNames from './DemonicNames'
import FantasyFolkNames from './FantasyFolkNames'

export default function NameSelector() {

  const [nameType, setNameType] = useState('')

  const handleChange = e => {
    setNameType(e.target.value)
  }

  const renderName = () => {
    switch (nameType) {
      case "CelticNames":
        return <CelticNames />
      case "DemonicNames":
        return <DemonicNames />
      case "FantasyFolkNames":
        return <FantasyFolkNames />
      default:
        return null
    }
  }

  return (
    <div className="name-selector-container">

      <select onChange={handleChange} value={nameType}>

        <option value="">---</option>
        <option value="CelticNames">Celtic Names</option>
        <option value="DemonicNames">Demonic Names</option>
        <option value="FantasyFolkNames">Fantasy Folk Names</option>

      </select>

      {renderName()}

    </div>
  )

}
