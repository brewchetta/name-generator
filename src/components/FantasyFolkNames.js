import * as celtic from '../name-lists/celtic'
import * as fantasyFolk from '../name-lists/fantasy-folk-surnames'
import { generateName } from '../name-lists/name-generator'
import Name from './Name'

export default function DemonicNames(props) {

  const generateFantasyName = (prefixes, suffixes) => {
    return generateName(prefixes, suffixes, 1)
  }

  return (
    <div id="name-list">

      <Name prefixes={fantasyFolk.prefixes} suffixes={fantasyFolk.suffixes} nameGenerator={generateFantasyName} />
      <Name prefixes={fantasyFolk.prefixes} suffixes={fantasyFolk.suffixes} nameGenerator={generateFantasyName} />
      <Name prefixes={fantasyFolk.prefixes} suffixes={fantasyFolk.suffixes} nameGenerator={generateFantasyName} />
      <Name prefixes={fantasyFolk.prefixes} suffixes={fantasyFolk.suffixes} nameGenerator={generateFantasyName} />
      <Name prefixes={fantasyFolk.prefixes} suffixes={fantasyFolk.suffixes} nameGenerator={generateFantasyName} />
      <Name prefixes={fantasyFolk.prefixes} suffixes={fantasyFolk.suffixes} nameGenerator={generateFantasyName} />

    </div>
  )

}
