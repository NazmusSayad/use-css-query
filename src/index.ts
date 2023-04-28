import { useEffect, useState } from 'react'

const useMediaQuery = (query: string) => {
  if (typeof query !== 'string') {
    throw new Error('Provide a valid css query')
  }

  const [matches, setMatches] = useState(() => {
    return matchMedia(query).matches
  })

  useEffect(() => {
    const media = matchMedia(query)
    setMatches(media.matches)
    media.onchange = ({ matches }) => {
      setMatches(matches)
    }
  }, [query])

  return matches
}

export default useMediaQuery
