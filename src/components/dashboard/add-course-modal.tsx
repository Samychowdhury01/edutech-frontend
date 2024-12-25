/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TCourse } from "@/types/course.type"
import { toast } from "sonner"
import { addCourse } from "@/action/course-actions"



const AddCourseModal = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<TCourse>()

  const onSubmit = async (data: TCourse) => {
    setLoading(true)
    try {
        const resData = await addCourse(data)

      if (resData.success) {
        toast.success('Course added successfully')
        setOpen(false) 
        setLoading(false)
      } else {
        toast.error('Failed to add course')
        setLoading(false)
      }
    } catch (error) {
      toast.error('Error adding course:')
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Course</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Course</DialogTitle>
          <DialogDescription>
            Enter the details of the new course. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                className="col-span-3"
                {...register("name", { required: "Course name is required" })}
              />
              {errors.name && <p className="text-red-500 col-span-3 col-start-2">{errors.name.message}</p>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="teacherName" className="text-right">
                Teacher
              </Label>
              <Input
                id="teacherName"
                className="col-span-3"
                {...register("teacherName", { required: "Teacher name is required" })}
              />
              {errors.teacherName && <p className="text-red-500 col-span-3 col-start-2">{errors.teacherName.message}</p>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input
                id="category"
                className="col-span-3"
                {...register("category", { required: "Category is required" })}
              />
              {errors.category && <p className="text-red-500 col-span-3 col-start-2">{errors.category.message}</p>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                type="number"
                className="col-span-3"
                {...register("price", { 
                  required: "Price is required",
                  min: { value: 0, message: "Price must be positive" },
                  valueAsNumber: true
                })}
              />
              {errors.price && <p className="text-red-500 col-span-3 col-start-2">{errors.price.message}</p>}
            </div>
          </div>
          <DialogFooter>
            <Button disabled={loading} type="submit">Add Course</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddCourseModal

