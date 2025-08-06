import { useState } from "react";

function StudentAttendance() {
     const [selectedPeriod, setSelectedPeriod] = useState('This Month');
  
  const attendanceData = [
    { 
      course: 'Advanced Web Development', 
      code: 'CS341',
      present: 22, 
      total: 25, 
      rate: 88, 
      gradient: 'from-blue-600 to-cyan-500',
      trend: 'stable',
      lastClass: '2 days ago'
    },
    { 
      course: 'Data Structures & Algorithms', 
      code: 'CS245',
      present: 19, 
      total: 20, 
      rate: 95, 
      gradient: 'from-emerald-600 to-teal-500',
      trend: 'up',
      lastClass: '1 day ago'
    },
    { 
      course: 'Advanced Mathematics', 
      code: 'MATH301',
      present: 27, 
      total: 30, 
      rate: 90, 
      gradient: 'from-purple-600 to-pink-500',
      trend: 'up',
      lastClass: '3 days ago'
    },
    { 
      course: 'Database Management', 
      code: 'CS382',
      present: 15, 
      total: 18, 
      rate: 83, 
      gradient: 'from-orange-600 to-red-500',
      trend: 'down',
      lastClass: '1 day ago'
    }
  ];

  const getStatusInfo = (rate) => {
    if (rate >= 95) return { status: 'Excellent', color: 'text-emerald-600', bg: 'bg-emerald-100', icon: '🔥' };
    if (rate >= 85) return { status: 'Good', color: 'text-blue-600', bg: 'bg-blue-100', icon: '👍' };
    if (rate >= 75) return { status: 'Average', color: 'text-yellow-600', bg: 'bg-yellow-100', icon: '⚠️' };
    return { status: 'Needs Attention', color: 'text-red-600', bg: 'bg-red-100', icon: '📢' };
  };

  const getTrendIcon = (trend) => {
    const trends = {
      up: { icon: '📈', color: 'text-green-500' },
      down: { icon: '📉', color: 'text-red-500' },
      stable: { icon: '➡️', color: 'text-gray-500' }
    };
    return trends[trend] || trends.stable;
  };

  const overallAttendance = Math.round(
    attendanceData.reduce((acc, item) => acc + item.rate, 0) / attendanceData.length
  );

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-black text-gray-800">Attendance Insights</h2>
          <p className="text-gray-500 mt-1">Monitor your class participation</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className={`px-6 py-3 rounded-2xl ${overallAttendance >= 90 ? 'bg-green-100 text-green-700' : overallAttendance >= 80 ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'} font-bold`}>
            Overall: {overallAttendance}%
          </div>
          
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-3 bg-gray-100 rounded-2xl font-semibold text-gray-700 border-none outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <option>This Week</option>
            <option>This Month</option>
            <option>This Semester</option>
          </select>
        </div>
      </div>

      {/* Attendance Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {attendanceData.map((item, index) => {
          const status = getStatusInfo(item.rate);
          const trend = getTrendIcon(item.trend);
          
          return (
            <div
              key={item.code}
              className="group relative overflow-hidden bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/30 hover:border-gray-300/50 hover:shadow-xl transition-all duration-500"
            >
              {/* Background */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br from-gray-100/50 to-transparent -translate-y-8 translate-x-8"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-bold text-gray-800 text-lg">{item.course}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${status.bg} ${status.color}`}>
                        {status.icon} {status.status}
                      </span>
                    </div>
                    <p className="text-gray-500 font-medium">{item.code}</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-3xl font-black text-gray-800">{item.rate}%</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <span className={`text-sm ${trend.color}`}>{trend.icon}</span>
                      <span className="text-sm text-gray-500 font-medium">{item.trend}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-gray-600">Attendance Progress</span>
                    <span className="text-sm font-medium text-gray-500">{item.present}/{item.total} classes</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${item.gradient} transition-all duration-1000 delay-${index * 100}`}
                      style={{ width: `${item.rate}%` }}
                    ></div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">Last attended:</span>
                    <span className="font-medium text-gray-700">{item.lastClass}</span>
                  </div>
                  <button className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/30">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">📊</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-700">89%</p>
              <p className="text-sm text-green-600 font-medium">Average Attendance</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200/30">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">📅</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-700">93</p>
              <p className="text-sm text-blue-600 font-medium">Classes Attended</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200/30">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">⏰</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-700">7</p>
              <p className="text-sm text-purple-600 font-medium">Classes Missed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentAttendance;
