import { useHistory } from "react-router-dom";
import ChatInput from "./ChatSInput";

function InputArea(){
    const history = useHistory();
    function addTextHandler(ChatData){
        fetch('https://my-first-project-a37f4-default-rtdb.firebaseio.com/chat.json',{
            method: 'POST',
            body:JSON.stringify(ChatData),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(()=>{
            history.replace('/');
        });
    }
    return (
        <div>
            <ChatInput onAddText={addTextHandler}/>
        </div>
    )
}
export default InputArea;