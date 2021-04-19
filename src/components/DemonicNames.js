import * as demonic from '../name-lists/demonic'
import { generateName } from '../name-lists/name-generator'
import Name from './Name'

export default function DemonicNames({numNames}) {

  numNames = numNames || 1

  const renderNames = () => {
    const arr = []
    for (let i = 0; i < numNames; i++) {
      arr.push(<Name prefixes={demonic.prefixes} suffixes={demonic.suffixes} nameGenerator={generateName} />)
    }
    return arr
  }

  return (
    <div className={numNames > 1 ? "name-list" : "name"}>

      {renderNames()}

    </div>
  )

}
