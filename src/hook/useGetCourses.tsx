import { TCourse } from '@/types/course.type'
import { useState, useEffect } from 'react'



export function useGetCourses() {
  const [data, setData] = useState<TCourse[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true)
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/courses`
        const response = await fetch(apiUrl)
        const result = await response.json()
        if(result.success) {
            setData(result.data)
        }
      } catch (e) {
        setError(e instanceof Error ? e : new Error('An unknown error occurred'))
      } finally {
        setIsLoading(false)
      }
    }

    fetchCourses()
  }, []) 

  return { data, isLoading, error }
}

