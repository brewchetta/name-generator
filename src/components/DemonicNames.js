import { generateName } from '../name-lists/name-generator'
import * as demonic from '../name-lists/demonic'
import Name from './Name'

export default function DemonicNames(props) {

  return (
    <div>

      <Name prefixes={demonic.prefixes} suffixes={demonic.suffixes} />
      <Name prefixes={demonic.prefixes} suffixes={demonic.suffixes} />
      <Name prefixes={demonic.prefixes} suffixes={demonic.suffixes} />
      <Name prefixes={demonic.prefixes} suffixes={demonic.suffixes} />
      <Name prefixes={demonic.prefixes} suffixes={demonic.suffixes} />

    </div>
  )

}
