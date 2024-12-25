import AddCourseModal from '@/components/dashboard/add-course-modal';
import CoursesTable from '@/components/dashboard/courses-table';
import React from 'react';

const CoursesPage = () => {
    return (
        <div className='space-y-5'>
            <h1 className='text-3xl text-center font-semibold text-primary-foreground pb-5 border-b'>All Courses</h1>
            <div className='flex justify-end'>
            <AddCourseModal/>
            </div>
            <CoursesTable/>
        </div>
    );
};

export default CoursesPage;