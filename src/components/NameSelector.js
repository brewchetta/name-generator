import { useState } from 'react'
import CelticNames from './CelticNames'
import DemonicNames from './DemonicNames'
import FantasyFolkNames from './FantasyFolkNames'
import SciFiAnimalNames from './SciFiAnimalNames'
import Adjectives from './Adjectives'

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
      case "SciFiAnimalNames":
        return <SciFiAnimalNames />
      case "Adjectives":
        return <Adjectives />
      default:
        return null
    }
  }

  return (
    <div className="name-selector-container">

      <select onChange={handleChange} value={nameType}>

        <option value="">---</option>
        <option value="Adjectives">Adjectives</option>
        <option value="CelticNames">Celtic Names</option>
        <option value="DemonicNames">Demonic Names</option>
        <option value="FantasyFolkNames">Fantasy Folk Names</option>
        <option value="SciFiAnimalNames">Sci-Fi Animal Names</option>

      </select>

      {renderName()}

    </div>
  )

}
