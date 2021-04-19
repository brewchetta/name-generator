import * as demonic from '../name-lists/demonic'
import { generateName } from '../name-lists/name-generator'
import Name from './Name'

export default function DemonicNames(props) {

  return (
    <div id="name-list">

      <Name prefixes={demonic.prefixes} suffixes={demonic.suffixes} nameGenerator={generateName} />
      <Name prefixes={demonic.prefixes} suffixes={demonic.suffixes} nameGenerator={generateName} />
      <Name prefixes={demonic.prefixes} suffixes={demonic.suffixes} nameGenerator={generateName} />
      <Name prefixes={demonic.prefixes} suffixes={demonic.suffixes} nameGenerator={generateName} />
      <Name prefixes={demonic.prefixes} suffixes={demonic.suffixes} nameGenerator={generateName} />
      <Name prefixes={demonic.prefixes} suffixes={demonic.suffixes} nameGenerator={generateName} />

    </div>
  )

}
