function StudentCourses() {
  const courses = [
   
    { 
      id: 1,
      name: 'Advanced Web Development', 
      code: 'CS341',
      progress: 87, 
      instructor: 'Dr. Sarah Chen',
      nextClass: 'Today • 2:00 PM',
      location: 'Room A-205',
      gradient: 'from-blue-600 to-cyan-500',
      bgGradient: 'from-blue-500/5 to-cyan-500/10',
      icon: '💻',
      status: 'ongoing',
      assignments: 3
    },
    { 
      id: 2,
      name: 'Data Structures & Algorithms', 
      code: 'CS245',
      progress: 72, 
      instructor: 'Prof. Michael Johnson',
      nextClass: 'Tomorrow • 10:00 AM',
      location: 'Room B-301',
      gradient: 'from-emerald-600 to-teal-500',
      bgGradient: 'from-emerald-500/5 to-teal-500/10',
      icon: '🌳',
      status: 'upcoming',
      assignments: 1
    },
    { 
      id: 3,
      name: 'Advanced Mathematics', 
      code: 'MATH301',
      progress: 91, 
      instructor: 'Dr. Emily Williams',
      nextClass: 'Friday • 1:00 PM',
      location: 'Room C-150',
      gradient: 'from-purple-600 to-pink-500',
      bgGradient: 'from-purple-500/5 to-pink-500/10',
      icon: '📐',
      status: 'completed',
      assignments: 0
    },
    { 
      id: 4,
      name: 'Database Management', 
      code: 'CS382',
      progress: 68, 
      instructor: 'Prof. David Drown',
      nextClass: 'Monday • 11:00 AM',
      location: 'Lab D-102',
      gradient: 'from-orange-600 to-red-500',
      bgGradient: 'from-orange-500/5 to-red-500/10',
      icon: '🗄️',
      status: 'ongoing',
      assignments: 2
    }
  ];

  const getStatusBadge = (status) => {
    const badges = {
      ongoing: { text: 'In Progress', class: 'bg-blue-100 text-blue-700 border-blue-200' },
      upcoming: { text: 'Starting Soon', class: 'bg-green-100 text-green-700 border-green-200' },
      completed: { text: 'Completed', class: 'bg-purple-100 text-purple-700 border-purple-200' }
    };
    return badges[status] || badges.ongoing;
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-black text-gray-800">My Courses</h2>
          <p className="text-gray-500 mt-1">Track your academic progress</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl font-semibold transition-all duration-300">
            View Calendar
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-semibold">
            Browse Courses
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {courses.map((course) => {
          const statusBadge = getStatusBadge(course.status);
          return (
            <div
              key={course.id}
              className="group relative overflow-hidden bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/30 hover:border-gray-300/50 hover:shadow-xl transition-all duration-500"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${course.bgGradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${course.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{course.icon}</span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-bold text-gray-800 text-lg">{course.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${statusBadge.class}`}>
                          {statusBadge.text}
                        </span>
                      </div>
                      <p className="text-gray-500 font-medium">{course.code} • {course.instructor}</p>
                    </div>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-gray-600">Course Progress</span>
                    <span className="text-sm font-bold text-gray-800">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${course.gradient} transition-all duration-1000 delay-200`}
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-500">Next Class</p>
                    <p className="font-semibold text-gray-800">{course.nextClass}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-500">Location</p>
                    <p className="font-semibold text-gray-800">{course.location}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {course.assignments > 0 && (
                      <div className="flex items-center space-x-2 text-orange-600">
                        <span className="text-sm">📋</span>
                        <span className="text-sm font-semibold">{course.assignments} pending</span>
                      </div>
                    )}
                  </div>
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentCourses;
