import * as sciFiAnimals from '../name-lists/sci-fi-animals'
import { generateName } from '../name-lists/name-generator'
import Name from './Name'

export default function DemonicNames({numNames}) {

  numNames = numNames || 1

  const generateAnimalName = (prefixes, suffixes) => generateName(prefixes, suffixes, 1)

  const renderNames = () => {
    const arr = []
    for (let i = 0; i < numNames; i++) {
      arr.push(<Name prefixes={sciFiAnimals.prefixes} suffixes={sciFiAnimals.suffixes} nameGenerator={generateAnimalName} />)
    }
    return arr
  }

  return (
    <div className={numNames > 1 ? "name-list" : "name"}>

      {renderNames()}

    </div>
  )

}
