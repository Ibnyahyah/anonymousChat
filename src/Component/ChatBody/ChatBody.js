import { useState, useEffect } from 'react';
import React from 'react';
import Chats from './Chats';
import InputArea from './inputArea';



function ChatBody(){
       
    const [isLoading, setIsLoading] = useState(true);
    const [loadedChat, setLoadedChat] = useState([]);

    useEffect(()=>{
        setIsLoading(true);
        fetch('https://my-first-project-a37f4-default-rtdb.firebaseio.com/chat.json')
    
            .then((response)=>{
                return response.json();
            })
            .then((data) => {
                const chat = [];

                for(const key in data){
                    const chats = {
                        id : key,
                        ...data[key]
                    };

                    chat.push(chats);
                }

                setIsLoading(false);
                setLoadedChat(chat);
            })
    },[]);

    if (isLoading) {
        return (
            <section className="loading">
                <p>Loading...</p>
            </section>
        )
    }
        return(
            <div className="content">
                <div className="full-chat-block">
                    {/* Message center */}
                    <div className="outer-container">
                    <div className="chat-container">
                        <Chats items={loadedChat}/>
                    </div>
                    <InputArea/>
                    </div>
                </div>
            </div>
            )
        }
export default ChatBody;