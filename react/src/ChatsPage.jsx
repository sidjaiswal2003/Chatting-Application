import {PrettyChatWindow } from 'react-chat-engine-pretty'
const Chatspage=(props)=>{
    
    return(
        <div style={{height:"100vh"}}>
           <PrettyChatWindow 
             projectId='a6feac93-3550-4eff-a085-ecfdb58f8ad'
             username={props.user.username}
             secret={props.user.secret}
             style={{height:'100%'}}/>

        
        </div>
    )
}
export default Chatspage