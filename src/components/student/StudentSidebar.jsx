function StudentSidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg p-4">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">SmartCampus</h2>
      <nav className="space-y-3">
        <button className="block w-full text-left text-gray-700 hover:text-blue-600">Dashboard</button>
        <button className="block w-full text-left text-gray-700 hover:text-blue-600">My Courses</button>
        <button className="block w-full text-left text-gray-700 hover:text-blue-600">Attendance</button>
        <button className="block w-full text-left text-gray-700 hover:text-blue-600">Logout</button>
      </nav>
    </aside>
  );
}

export default StudentSidebar;
