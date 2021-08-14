import React from 'react'
import Member from './Member'

export default function TeamMembers({datos, removeDato}) {
    return (
        <ul>
            {datos.map(dato => (
                <Member key={dato.id} dato={dato} removeDato={removeDato} />
            ))}
           
        </ul>
    )
}

