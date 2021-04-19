import * as adjectives from '../name-lists/adjectives'
import { chooseRandomName } from '../name-lists/name-generator'
import Name from './Name'

export default function Adjectives({numNames}) {

  numNames = numNames || 1

  const renderNames = () => {
    const arr = []
    for (let i = 0; i < numNames; i++) {
      arr.push(<Name prefixes={adjectives.list} nameGenerator={chooseRandomName} />)
    }
    return arr
  }

  return (
    <div className={numNames > 1 ? "name-list" : "name"}>

      {renderNames()}

    </div>
  )

}
