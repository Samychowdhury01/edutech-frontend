'use server'

import { TCourse } from '@/types/course.type'
import { revalidatePath } from 'next/cache'

export const addCourse= async(data: TCourse) =>{
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/courses/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const resData = await response.json()

    if (resData.success) {
      // Revalidate the courses page to reflect the new data
      revalidatePath('/courses')
      return { success: true, message: 'Course added successfully' }
    } else {
      return { success: false, message: 'Failed to add course' }
    }
  } catch (error) {
    console.error('Error adding course:', error)
    return { success: false, message: 'Error adding course' }
  }
}
