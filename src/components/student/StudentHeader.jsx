import { useEffect, useState } from "react";

function StudentHeader() {
   const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-40">
      <div className="px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-black bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Good Morning, John! 👋
              </h1>
              <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                Online
              </div>
            </div>
            <p className="text-gray-500 font-medium">
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} • {currentTime.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit'
              })}
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {/* Quick Actions */}
            <div className="flex items-center space-x-2">
              <button className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300 group relative">
                <span className="text-xl">🔍</span>
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
              </button>
              
              <button className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300 group relative">
                <span className="text-xl">🔔</span>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">5</span>
                </div>
              </button>
              
              <button className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300">
                <span className="text-xl">⚙️</span>
              </button>
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl px-6 py-3 border border-gray-200/50">
              <div className="text-right">
                <p className="font-bold text-gray-800">John Doe</p>
                <p className="text-sm text-gray-500">ID: CS2024001</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">JD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default StudentHeader;
