import * as celtic from '../name-lists/celtic'
import { chooseRandomName } from '../name-lists/name-generator'
import Name from './Name'

export default function DemonicNames(props) {

  return (
    <div id="name-list">

      <Name prefixes={celtic.prefixes} nameGenerator={chooseRandomName} />
      <Name prefixes={celtic.prefixes} nameGenerator={chooseRandomName} />
      <Name prefixes={celtic.prefixes} nameGenerator={chooseRandomName} />
      <Name prefixes={celtic.prefixes} nameGenerator={chooseRandomName} />
      <Name prefixes={celtic.prefixes} nameGenerator={chooseRandomName} />
      <Name prefixes={celtic.prefixes} nameGenerator={chooseRandomName} />

    </div>
  )

}
