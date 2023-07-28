import MessageList from "../component/message/MessageList";
import {useState} from "react";
import {Button, Container, Grid} from "@mui/material";

const PageMessage = () => {
    const currentUser = {
        userId: 0,
        userAvatar: "https://mui.com/static/images/avatar/4.jpg",
        userName: "Rini",
    }
    const initialMessageList = [
        {
            id: 1,
            msg: "Halo",
            ts: "2023-07-26 15:00",
            userAvatar: "https://mui.com/static/images/avatar/1.jpg",
            userId: 1,
            userName: "Rudi",
            mode: 0,
        },
        {
            id: 2,
            msg: "See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.",
            ts: "2023-07-26 15:02",
            userAvatar: "https://mui.com/static/images/avatar/2.jpg",
            userId: 2,
            userName: "Budi",
            mode: 1,
        },
        {
            id: 3,
            msg: "In the following example, we demonstrate how to use react-window with the List component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.",
            ts: "2023-07-26 16:12",
            userAvatar: "https://mui.com/static/images/avatar/3.jpg",
            userId: 0,
            userName: "Misa",
            mode: 0,
        },
        {
            id: 4,
            msg: "The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target.",
            ts: "2023-07-26 17:52",
            userAvatar: "https://mui.com/static/images/avatar/4.jpg",
            userId: 4,
            userName: "Rini",
            mode: 0,
        }
    ]

    const [messageList, setMessageList] = useState(initialMessageList)
    const [showChat, setShowChat] = useState(false)
    const onSendMessage = (msg) => {
        if (msg.msg === "")
            return

        let tmp = JSON.parse(JSON.stringify(messageList))
        let new_msg = {...currentUser, id: Math.floor(Math.random() * 10000), msg: msg.msg, mode: msg.mode, ts: "2023-07-26 17:52"}
        tmp.push(new_msg)
        setMessageList(tmp)
    }
    const showChatOnClick = () => {
        setShowChat(!showChat)
    }
    return (
        <>
            <Grid container>
                <Grid item xs={6}>
                    <Container sx={{m: 4}}>
                    <Button variant={'contained'} onClick={showChatOnClick}>Chat</Button>
                    </Container>
                </Grid>
                <Grid item xs={6}>
                    {showChat &&
                        <MessageList data={messageList} currentUser={currentUser}
                                     onCloseMessage={()=> setShowChat(false)}
                                     onSendMessage={onSendMessage}/>
                    }
                </Grid>
            </Grid>
        </>
    )
}
export default PageMessage