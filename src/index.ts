import { useEffect, useState } from 'react'

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(() => matchMedia(query).matches)

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
