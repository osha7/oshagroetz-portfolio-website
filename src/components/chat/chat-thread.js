import React, {useState, useEffect} from 'react';

export const ChatThread = ({token}) => {
    const [state, setState] = useState()

    useEffect(() => {
        console.log({token})
        let submitUrl = `http://localhost:3000/chats/${token}`
        fetch (submitUrl, {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setState(data)
            console.log({state})
        })

    }, [token]);

    return (
        <div className="chat-thread">
            <ul>
                {state ? state.map(data => <li key={data.id}>{[Date(data.created_at)]} {data.content}</li> ) : null}
            </ul>
        </div>
    )
}