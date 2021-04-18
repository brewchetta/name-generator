import { useState } from 'react'
import { generateName } from '../name-lists/name-generator'

export default function Name({prefixes, suffixes}) {

  const [name, setName] = useState(generateName(prefixes, suffixes))

  const handleClick = () => {
    setName(generateName(prefixes, suffixes))
  }

  return (
    <p>{name}</p>
  )
}
