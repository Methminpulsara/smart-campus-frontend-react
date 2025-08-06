import React from 'react'
import StudentSidebar from '../components/student/StudentSidebar'
import StudentHeader from '../components/student/StudentHeader'
import StudentOverview from '../components/student/StudentOverview'
import StudentCourses from '../components/student/StudentCourses'
import StudentAttendance from '../components/student/StudentAttendance'

function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <div className="flex">
        <StudentSidebar />
        
        <div className="flex-1">
          <StudentHeader />
          
          <main className="p-8 space-y-8">
            <StudentOverview />
            <StudentCourses />
            <StudentAttendance />
          </main>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard
