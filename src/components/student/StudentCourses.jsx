function StudentCourses() {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-4">My Courses</h2>
      <ul className="space-y-2">
        <li className="p-2 border rounded hover:bg-gray-50">Web Development</li>
        <li className="p-2 border rounded hover:bg-gray-50">Data Structures</li>
        <li className="p-2 border rounded hover:bg-gray-50">Mathematics</li>
      </ul>
    </div>
  );
}

export default StudentCourses;
