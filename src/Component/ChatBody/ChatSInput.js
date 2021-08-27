import React from 'react';
import { useRef } from 'react';

const  ChatInput = (props)=>{
    const titleInputRef = useRef();
    const imageInputRef = useRef();

    function SubmitHandler(event){
        event.preventDefault();
        const enterText = titleInputRef.current.value;
        const enterImage = imageInputRef.current.value;

        const ChatData ={
            title : enterText,
            image: enterImage
        }
        props.onAddText(ChatData);
        console.log(ChatData)
    }
    

    return(
        <form className="chat-bar-input-block" onSubmit={SubmitHandler}>
            <div id="userInput">
                <input type="text" className="textInput" ref={titleInputRef}/>
            </div>
           
            {/* chat bottom */}
            <div id="chat-file">
                <input type="file" ref={imageInputRef} className='file-input'/>
            </div>
            <div className="btn">
                <button>send</button>
            </div>
            </form>
    )
}

export default ChatInput;