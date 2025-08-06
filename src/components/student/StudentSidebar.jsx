import { useState } from "react";

function StudentSidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const menuItems = [
    { name: 'Dashboard', icon: '⚡', path: '/dashboard', badge: null },
    { name: 'Courses', icon: '🎓', path: '/courses', badge: '5' },
    { name: 'Schedule', icon: '📅', path: '/schedule', badge: null },
    { name: 'Assignments', icon: '📝', path: '/assignments', badge: '3' },
    { name: 'Grades', icon: '📊', path: '/grades', badge: null },
    { name: 'Library', icon: '📚', path: '/library', badge: null },
    { name: 'Messages', icon: '💬', path: '/messages', badge: '12' },
    { name: 'Settings', icon: '⚙️', path: '/settings', badge: null },
  ];

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-gray-900/95 backdrop-blur-xl border-r border-gray-800/50 transition-all duration-500 ease-in-out fixed left-0 top-0 h-full z-50`}>
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent pointer-events-none"></div>
      
      {/* Header */}
      <div className="relative z-10 p-4 border-b border-gray-800/30">
        <div className="flex items-center justify-between">
          <div className={`${isCollapsed ? 'hidden' : 'block'} transition-all duration-300`}>
            <h1 className="text-xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              EduSpace
            </h1>
            <p className="text-xs text-gray-400 mt-1 font-medium tracking-wide">PORTAL</p>
          </div>
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 group"
          >
            <div className={`w-4 h-0.5 bg-gray-300 transition-transform duration-300 ${isCollapsed ? 'rotate-45 translate-y-1' : ''}`}></div>
            <div className={`w-4 h-0.5 bg-gray-300 my-1 transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : ''}`}></div>
            <div className={`w-4 h-0.5 bg-gray-300 transition-transform duration-300 ${isCollapsed ? '-rotate-45 -translate-y-1' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-3 space-y-1 flex-1 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.name} className="relative group">
            <button
              onClick={() => setActiveItem(item.name)}
              className={`w-full flex items-center ${isCollapsed ? 'justify-center px-2' : 'justify-start px-3'} py-3 rounded-xl transition-all duration-300 relative overflow-hidden ${
                activeItem === item.name
                  ? 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              {/* Active indicator */}
              {activeItem === item.name && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
              )}
              
              <div className="relative flex items-center space-x-3 w-full">
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                <span className={`font-medium text-sm transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                  {item.name}
                </span>
                {item.badge && !isCollapsed && (
                  <span className="ml-auto px-2 py-0.5 text-xs bg-red-500 text-white rounded-full font-bold">
                    {item.badge}
                  </span>
                )}
              </div>
            </button>
            
            {/* Tooltip for collapsed state */}
            {isCollapsed && (
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                {item.name}
                {item.badge && (
                  <span className="ml-2 px-1 py-0.5 text-xs bg-red-500 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div className="absolute bottom-6 left-4 right-4 z-10">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/30">
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'}`}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg">
              JD
            </div>
            {!isCollapsed && (
              <div className="flex-1">
                <p className="text-white font-semibold">John Doe</p>
                <p className="text-gray-400 text-sm">Computer Science</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentSidebar;
