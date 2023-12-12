const Tableheader = () => {
  return (
    <thead className="text-xs leading-3 uppercase font-medium bg-[#EAEBED] py-2 px-4 w-full">
      <tr>
        <th
          scope="col"
          className=" rounded-l text-xs leading-3 uppercase font-medium py-2 pl-4"
        >
          LP.
        </th>
        <th scope="col" className="text-xs leading-3 uppercase font-medium">
          Drużyna
        </th>
        <th
          scope="col"
          className="text-xs leading-3 uppercase font-medium text-center"
        >
          M
        </th>
        <th
          scope="col"
          className="text-xs leading-3 uppercase font-medium text-center"
        >
          B
        </th>

        <th
          scope="col"
          className="text-xs leading-3 uppercase font-medium text-center"
        >
          RB
        </th>

        <th
          scope="col"
          className="text-xs leading-3 uppercase font-medium rounded-r pr-4 text-right"
        >
          P
        </th>
      </tr>
    </thead>
  )
}

export default Tableheader
