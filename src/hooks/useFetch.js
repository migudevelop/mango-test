import { useState, useEffect } from 'react'

export default function useFetch(url, mappedFn = (data) => data) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(mappedFn(data)))
      .catch((error) => {
        setError(error)
      })
      .finally(() => setIsLoading(false))
  }, [url])

  return { data, isLoading, error }
}
