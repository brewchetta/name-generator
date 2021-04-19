import * as celtic from '../name-lists/celtic'
import { chooseRandomName } from '../name-lists/name-generator'
import Name from './Name'

export default function DemonicNames({numNames}) {

  numNames = numNames || 1

  const renderNames = () => {
    const arr = []
    for (let i = 0; i < numNames; i++) {
      arr.push(<Name prefixes={celtic.prefixes} nameGenerator={chooseRandomName} />)
    }
    return arr
  }

  return (
    <div id="name-list">

      {renderNames()}

    </div>
  )

}
