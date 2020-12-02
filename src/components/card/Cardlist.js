import userEvent from '@testing-library/user-event'
import React from 'react'
import "./Cardlist"

const Cardlist = (props) => {
    return (
        <div className="CardList">
        {props.user.map((user) => (
            <Card key={user.id} user={user} />
        ))}
        </div>
    )
}

export default Cardlist
