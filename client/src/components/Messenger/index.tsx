import { FC, useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'
const serverUrl = 'http://localhost:3001'

const socket = socketIOClient(serverUrl)

const Messenger: FC = () => {
    const [messages, setMessages] = useState<string[]>([])
    const [value, setValue] = useState('')

    useEffect(() => {
        fetch(`${serverUrl}/api/messages`)
            .then(d => d.json())
            .then(res => setMessages(res))
        socket.on('messages', arg => {
            setMessages(prevMessages => [...prevMessages, arg])
        })
    }, [])
    function send() {
        socket.emit('messages', value)
        setValue('')
    }



    return <div>
        <input value={value} onChange={e => setValue(e.target.value)} />
        <button onClick={send}>send</button>
        <div>
            {messages.map(m => <div>{m}</div>)}
        </div>
    </div>
}


export default Messenger