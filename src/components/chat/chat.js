import React, {useState, useEffect} from 'react';
import ChatForm from './form';
import { ChatThread } from './chat-thread';

const Chat = () => {

    const [token, setToken] = useState('');
    // console.log({token})

    useEffect(() => {
        const existingToken = localStorage.getItem('myChatToken');

        if (existingToken) {
            // Token already exists, use it
            setToken(existingToken);
        } else {
            // Token doesn't exist, generate a new one
            const generatedToken = generateToken();
            setToken(generatedToken);

            // Store the token in localStorage
            localStorage.setItem('myChatToken', generatedToken);
        }
    }, []);

    const generateToken = () => {
        const keyLength = 32; // 256 bits
        const buffer = new Uint8Array(keyLength);
        window.crypto.getRandomValues(buffer);
        return Array.from(buffer)
            .map(byte => byte.toString(16).padStart(2, '0'))
            .join('');
    };

    return (
        <div>
            <h1 style={{marginBottom:'1em', marginTop:'3em', width:'75%'}} ><span style={{ paddingLeft:'.25em'}}>ai chat</span></h1>
            <div>
                <ChatForm token={token} className="chat-form" />
                <ChatThread token={token} />
            </div>
        </div>
    )
}

export default Chat;