import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { baseUrl } from '../../utils/api';
import '../../styles/main.scss'; // Adjust the path according to your project structure

const socket = socketIOClient(baseUrl);

const Messenger: FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        fetch(`${baseUrl}/api/messages`)
            .then((d) => d.json())
            .then((res) => setMessages(res));
        try {
            socket.on('messages', (arg) => {
                setMessages((prevMessages) => [...prevMessages, arg]);
            });
        } catch (e) {
            console.warn(e, 'smth wrong with websocket');
        }
    }, []);

    function send() {
        socket.emit('messages', value);
        setValue('');
    }

    return (
        <div className='chat-container'>
            <header>
                <Link to='/profile'>Профиль</Link>
            </header>
            <div className='chat-list'>
                <input placeholder='Поиск' />
                {/* Add your chat list items here */}
            </div>
            <div className='chat-messages'>
                <div className='messages-list'>
                    {messages.map((m, index) => (
                        <div key={index}>{m}</div>
                    ))}
                </div>
                <div className='input-container'>
                    <input value={value} onChange={(e) => setValue(e.target.value)} />
                    <button onClick={send}>send</button>
                </div>
            </div>
        </div>
    );
};

export default Messenger;
