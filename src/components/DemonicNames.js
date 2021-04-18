import { useState } from 'react'
import { generateName } from '../name-lists/name-generator'
import * as demonic from '../name-lists/demonic'

export default DemonicNames(props) {

  const [names, setNames] = useState({
    1: generateName(demonic.prefixes, demonic.suffixes),
    2: generateName(demonic.prefixes, demonic.suffixes),
    3: generateName(demonic.prefixes, demonic.suffixes),
    4: generateName(demonic.prefixes, demonic.suffixes),
    5: generateName(demonic.prefixes, demonic.suffixes),
  })

  return (
    <div>

      <p name="1" onClick={handleClick}>{names[1]}</p>
      <p name="2" onClick={handleClick}>{names[2]}</p>
      <p name="3" onClick={handleClick}>{names[3]}</p>
      <p name="4" onClick={handleClick}>{names[4]}</p>
      <p name="5" onClick={handleClick}>{names[5]}</p>

    </div>
  )

}
