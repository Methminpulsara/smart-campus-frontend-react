function StudentAttendance() {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Attendance Overview</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b p-2">Course</th>
            <th className="border-b p-2">Present</th>
            <th className="border-b p-2">Total</th>
            <th className="border-b p-2">Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">Web Dev</td>
            <td className="p-2">22</td>
            <td className="p-2">25</td>
            <td className="p-2">88%</td>
          </tr>
          <tr>
            <td className="p-2">DSA</td>
            <td className="p-2">19</td>
            <td className="p-2">20</td>
            <td className="p-2">95%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentAttendance;
