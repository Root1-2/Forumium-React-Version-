import ForumTableBody from "./ForumTableBody";

function ForumTable() {
  return (
    <div className="h-screen w-full overflow-auto shadow-md sm:w-5/6 sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-400 rtl:text-right">
        <thead className="bg-gray-700 text-xs uppercase text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Topic Name
            </th>
            <th scope="col" className="px-6 py-3">
              Created By
            </th>
            <th scope="col" className="px-6 py-3">
              Created On
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
          </tr>
        </thead>
        <ForumTableBody />
      </table>
    </div>
  );
}

export default ForumTable;
