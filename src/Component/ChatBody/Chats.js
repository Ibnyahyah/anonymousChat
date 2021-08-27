import ChatItems from './ChatsItem';

function Chats(props){
    return(
            <div className="chatBox">
                {props.items.map((chatstext)=>
                    <ChatItems
                    key={chatstext.id} 
                    id={chatstext.id}
                    title={chatstext.title}
                    image={chatstext.image} />
                )}
            <div className="chat-bar-bottom">
                <p/>
            </div>
        </div>
    )
}
export default Chats;