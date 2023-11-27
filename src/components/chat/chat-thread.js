import React, {useState, useEffect} from 'react';

export const ChatThread = ({token, newQuestion}) => {
    const [state, setState] = useState()

    useEffect(() => {
        let submitUrl = `https://personal-portfolio-backend-api-b395670d7c6b.herokuapp.com/chats/${token}`
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

    }, [token, newQuestion]);

    if (newQuestion.length > 0) {
        setState({...state, newQuestion})
    }

    const mappedData = () => {
        return state.map(data => {
            if (data.role === "user") {
                return (
                <div className='user-chat'>
                    <li key={data.id}>{data.content}</li>
                </div>
                )
            } else {
                return (
                <div className='assistant-chat'>
                    <li key={data.id} >{data.content}</li>
                </div>
                )
            }
        })
    }

    return (
        <div className="chat-thread">
            <ul>
                {/* {state ? state.map(data => <li key={data.id}>{[Date(data.created_at)]} {data.content}</li> ) : null} */}
                {state ? mappedData() : null}
            </ul>
        </div>
    )
}