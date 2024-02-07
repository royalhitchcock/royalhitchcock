/* eslint-disable react/prop-types */ 

import { useSelector } from 'react-redux'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

const columns = [
    {
        header: "ID",
        accessorKey: 'id',
    },
    {
        header: "Name",
        accessorKey: 'name',
    },
    {
        header: "Age",
        accessorKey: 'unitPrice',
    },
    {
        header: "High Risk",
        accessorKey: 'soldOut',
    },
]

function PatientList({handleClick}) {

    const data = useSelector((state) => state.patient.patientArray);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <span className='overflow-auto relative max-h-[100] my-8'>
            <table className="y-3 border border-stone-500 my-8 ml-16 mr-32">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} >
                            {headerGroup.headers.map((header) => 
                                <th key={header.id} className="y-3 border border-stone-500 text-center p-2">
                                    {flexRender(header.column.columnDef.header, header.getContext())}       
                                </th>
                            )}
                        </tr>
                    ))}
                </thead>
                <tbody>    
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} onClick={() => handleClick(row.id)} className='hover:bg-slate-400'>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="p-3 border border-stone-500 text-center">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                        ))}
                    </tr>
                    ))}
                </tbody>
            </table>
        </span>
    );
}

export default PatientList;