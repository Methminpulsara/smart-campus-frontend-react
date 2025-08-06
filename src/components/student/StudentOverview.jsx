function StudentOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 shadow rounded-lg">
        <h3 className="text-gray-600">Courses Enrolled</h3>
        <p className="text-2xl font-bold">5</p>
      </div>
      <div className="bg-white p-4 shadow rounded-lg">
        <h3 className="text-gray-600">Attendance Rate</h3>
        <p className="text-2xl font-bold">92%</p>
      </div>
      <div className="bg-white p-4 shadow rounded-lg">
        <h3 className="text-gray-600">Upcoming Exams</h3>
        <p className="text-2xl font-bold">2</p>
      </div>
    </div>
  );
}

export default StudentOverview;
