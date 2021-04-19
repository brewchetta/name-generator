import * as celtic from '../name-lists/celtic'
import * as fantasyFolk from '../name-lists/fantasy-folk-surnames'
import { generateName } from '../name-lists/name-generator'
import Name from './Name'

export default function DemonicNames({numNames}) {

  numNames = numNames || 1

  const generateFantasyName = (prefixes, suffixes) => {
    return generateName(prefixes, suffixes, 1)
  }

  const renderNames = () => {
    const arr = []
    for (let i = 0; i < numNames; i++) {
      arr.push(<Name prefixes={fantasyFolk.prefixes} suffixes={fantasyFolk.suffixes} nameGenerator={generateFantasyName} />)
    }
    return arr
  }

  return (
    <div className={numNames > 1 ? "name-list" : "name"}>

      {renderNames()}

    </div>
  )

}
