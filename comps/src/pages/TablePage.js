import SortableTable from "../components/SortableTable";
// import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "orange", color: "bg-orange-500", score: 5 },
    { name: "apple", color: "bg-red-500", score: 3 },
    { name: "banana", color: "bg-yellow-500", score: 1 },
    { name: "lime", color: "bg-green-500", score: 4 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
