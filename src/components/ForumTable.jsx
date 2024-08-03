import ForumTableBody from "./ForumTableBody";

function ForumTable() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-[100rem] text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
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
