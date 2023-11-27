import React, {useState, useEffect} from 'react';
import ChatForm from './form';
import { ChatThread } from './chat-thread';

const Chat = () => {

    const [token, setToken] = useState('');
    // console.log({token})
    const [state, setState] = useState({})

    const setStateCallback = (data) => {
        console.log('hitting callback')
        setState(data)
    }

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
            <div style={{marginTop:'10em'}}>
                <ChatForm token={token} className="chat-form" stateCallback={setStateCallback} />
                <div className="chat-info">Well, within reason, of course!  This is ChatGPT4 and the model is only trained with data up through January 2022.  
                    As such, it won't be able to help you get the latest info for lucrative bets, or warn you when it's going to snow next in Chicago 
                    (I'll tell you it could happen any day, now!).  It will, however, let you know the approximate circumference of the sun, 
                    or help you build your own chat feature on your own app so you can stop using up all my precious tokens (for real, this is getting ridiculous)!
                </div>
            </div>
            <div style={{marginTop:'-2em', textAlign: 'right'}}>
                <h1 style={{width: '75%'}}><span style={{ paddingRight:'.25em'}}>ai chat </span></h1>
                {/* <span style={{ fontSize: '10px'}}>with a chicagoan</span> */}
            </div>
            <div>
                <ChatThread token={token} newQuestion={state} />
            </div>
        </div>
    )
}

export default Chat;