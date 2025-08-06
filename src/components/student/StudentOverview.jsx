import { useEffect, useState } from "react";

function StudentOverview() {
   const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { 
      title: 'Active Courses', 
      value: '5', 
      change: '+2 from last semester',
      icon: '🎓', 
      gradient: 'from-blue-600 to-blue-500',
      bgGradient: 'from-blue-500/10 to-blue-600/20',
      trend: 'up'
    },
    { 
      title: 'Overall GPA', 
      value: '3.85', 
      change: '+0.12 this semester',
      icon: '📊', 
      gradient: 'from-emerald-600 to-emerald-500',
      bgGradient: 'from-emerald-500/10 to-emerald-600/20',
      trend: 'up'
    },
    { 
      title: 'Attendance Rate', 
      value: '94%', 
      change: '+3% from last month',
      icon: '✅', 
      gradient: 'from-purple-600 to-purple-500',
      bgGradient: 'from-purple-500/10 to-purple-600/20',
      trend: 'up'
    },
    { 
      title: 'Study Hours', 
      value: '127', 
      change: 'This week',
      icon: '📚', 
      gradient: 'from-orange-600 to-orange-500',
      bgGradient: 'from-orange-500/10 to-orange-600/20',
      trend: 'neutral'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={stat.title}
          className={`relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-gray-300/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/20 group ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ 
            animationDelay: `${index * 150}ms`,
            animationFillMode: 'forwards'
          }}
        >
          {/* Background Pattern */}
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-50`}></div>
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-transparent -translate-y-16 translate-x-16"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              {stat.trend === 'up' && (
                <div className="flex items-center space-x-1 text-green-600">
                  <span className="text-sm font-bold">↗</span>
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <h3 className="text-gray-600 font-semibold text-sm uppercase tracking-wide">{stat.title}</h3>
              <p className="text-4xl font-black text-gray-800">{stat.value}</p>
              <p className="text-sm text-gray-500 font-medium">{stat.change}</p>
            </div>
            
            {/* Progress indicator */}
            <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${stat.gradient} transition-all duration-1000 delay-300`}
                style={{ width: isLoaded ? '78%' : '0%' }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudentOverview;
