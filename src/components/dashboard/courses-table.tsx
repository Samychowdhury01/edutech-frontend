import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TCourse } from "@/types/course.type";

const CoursesTable = async () => {
  const response = await fetch(`${process.env.PRODUCTION_SERVER}/courses`);
  const { data } = await response.json();
  console.log(data);
  return (
    <>
      {data?.length !== 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course Name</TableHead>
              <TableHead>Teacher Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((course: TCourse) => (
              <TableRow key={course._id}>
                <TableCell className="font-medium">{course.name}</TableCell>
                <TableCell className="font-medium">
                  {course.teacherName}
                </TableCell>
                <TableCell>{course.category}</TableCell>
                <TableCell>{course.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-center text-red-500 mt-10">No Courses Available</p>
      )}
    </>
  );
};

export default CoursesTable;
