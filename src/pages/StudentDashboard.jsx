import React from 'react'
import StudentSidebar from '../components/student/StudentSidebar'
import StudentHeader from '../components/student/StudentHeader'
import StudentOverview from '../components/student/StudentOverview'
import StudentCourses from '../components/student/StudentCourses'
import StudentAttendance from '../components/student/StudentAttendance'

function StudentDashboard() {
  return (
    <div className='flex h-screen bg-gray-50'>
      <StudentSidebar/>

        <div className='flex flex-col flex-1'>
            <StudentHeader/>
                <main className='p-6 space-y-6 overflow-auto'>
                    <StudentOverview/>
                    <StudentCourses/>
                    <StudentAttendance/>
                </main>
        </div>    
    </div>
  )
}

export default StudentDashboard
