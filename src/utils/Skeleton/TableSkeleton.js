import React from 'react';
import './tableSkeleton.scss'

const TableSkeleton = (props) => {
    const content = Array.from({ length: 20 }).map((e, index) => (
        <tr key={index}>
            <td>&nbsp;</td>
            <td className='table-view__table__tbody__th has-text-right'>&nbsp;</td>
        </tr>
    ))
    return (
        <div className='container  table-view'>
            <table className='table is-hoverable table-view__table table'>
                <thead>
                    <tr>
                        <th className='table-view__title has-text-left' > <span className='table-view__span' >&nbsp;</span></th>
                        <th className='table-view__year has-text-right'><span className='table-view__span' >&nbsp;</span></th>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    )
}

export default TableSkeleton;