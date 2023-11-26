import React, {useState, useEffect} from 'react';
import ChatForm from './form';

const Chat = () => {

    // const [token, setToken] = useState('');
    // console.log({token})

    // useEffect(() => {
    //     const existingToken = localStorage.getItem('myChatToken');

    //     if (existingToken) {
    //         // Token already exists, use it
    //         setToken(existingToken);
    //     } else {
    //         // Token doesn't exist, generate a new one
    //         const generatedToken = generateToken();
    //         setToken(generatedToken);

    //         // Store the token in localStorage
    //         localStorage.setItem('myChatToken', generatedToken);
    //     }
    // }, []);

    // const generateToken = () => {
    //     const keyLength = 32; // 256 bits
    //     const buffer = new Uint8Array(keyLength);
    //     window.crypto.getRandomValues(buffer);
    //     return Array.from(buffer)
    //         .map(byte => byte.toString(16).padStart(2, '0'))
    //         .join('');
    // };

    return (
        <div>
            <h1>AI Chat</h1>
            <div>
                {/* <ChatForm token={token}/> */}
                <ChatForm />
            </div>
        </div>
    )
}

export default Chat;