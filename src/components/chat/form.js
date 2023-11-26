import React, {useState} from 'react';

function ChatForm({token}) {     
    const [state, setState] = useState({})
    const [inputValue, setInputValue] = useState('');

    function handleSubmit (event) {
        event.preventDefault();
        let submitUrl = "http://localhost:3000/chats"
        fetch (submitUrl, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //make sure to serialize your JSON body
            body: JSON.stringify(state)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
        // .then(data => this.setState(...state, {
        //     user: data.feed.url,
        //     title: data.feed.title,
        //     image: data.feed.image,
        //     blogs: data.items
        // }))

        
        // var form = document.getElementById("chat-form");
        // form.reset();
        setInputValue('')

    }

    const onChange = (event) => {
        setInputValue(event.target.value);
        setState({"role": "user", "content": event.target.value, "encrypted_token": token})
    }

    return (
        <form onSubmit={handleSubmit} method="post" id="chat-form">
            <div>
                <label htmlFor="user-question" >Ask me everything:</label>
                    <input id="user-question" name="user-question" type="text"  onChange={onChange} value={inputValue} required/>
                <button type="submit">Submit Question</button>
            </div>
        </form>
    )  
}

export default ChatForm;