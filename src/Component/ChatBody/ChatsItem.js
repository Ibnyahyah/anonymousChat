import Card from '../Card'

export default function ChatItems(props){
    return(
        <div className="text">
            <Card>
                <span key={props.id}>
                    {props.title}
                </span>
                <p>{props.image}</p>
            </Card>
        </div>
    )
}