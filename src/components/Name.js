import { useState } from 'react'

export default function Name({prefixes, suffixes, nameGenerator}) {

  const [name, setName] = useState(nameGenerator(prefixes, suffixes))

  const handleClick = () => {
    setName(nameGenerator(prefixes, suffixes))
  }

  return (
    <p onClick={handleClick}>{name}</p>
  )
}
