import React, { useState, useEffect, useRef } from "react";
import { useFormState } from "react-use-form-state";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import InputAdornment from "@material-ui/core/InputAdornment";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import SendIcon from "@material-ui/icons/Send";
import { say } from "../libs/protected-api";
import Face from "@material-ui/icons/Face";

const useStyle = makeStyles(theme => ({
  chat: {
    width: "100%",
    background: "rgba(255,255,255, .7)",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flexGrow: 1,
    height: 250,
    overflow: "scroll"
  },
  header: {
    textAlign: "center"
  },
  button: {
    borderRadius: "0",
    transition: "none"
  },

  alignRight: {
    textAlign: "right"
  },
  avatar: {
    minWidth: 30,
    color: "#33A9FF"
  }
}));

function ChatBox({ chat }) {
  const classes = useStyle();
  const [messages, setMessages] = useState([]);
  const [{ values, setField }, { text }] = useFormState();
  const scroll = useRef();

  useEffect(() => {
    if (chat) {
      setMessages(prev => [...prev, chat]);
    }
  }, [chat]);

  useEffect(() => {
    scroll.current.scrollTop = scroll.current.children[0].offsetHeight;
  }, [messages]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!values.message) return;
    try {
      await say({ message: values.message });
      setMessages(prev => [...prev, `You: ${values.message}`]);
      setField("message", "");
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <Card className={classes.chat}>
      <CardContent ref={scroll} className={classes.content}>
        <List dense={true}>
          {messages.map((msg, id) => (
            <ListItem
              className={`${classes.chat} ${msg.startsWith("You:") &&
                classes.alignRight}`}
              key={id}
            >
              {msg.startsWith("You:") && (
                <>
                  <ListItemText
                    primary={msg.substring(0, msg.indexOf(":"))}
                    secondary={msg.substring(msg.indexOf(":") + 2)}
                  />
                  <ListItemAvatar className={classes.avatar}>
                    <Face />
                  </ListItemAvatar>
                </>
              )}
              {!msg.startsWith("You:") && (
                <>
                  <ListItemAvatar className={classes.avatar}>
                    <Face />
                  </ListItemAvatar>
                  <ListItemText
                    primary={msg.substring(0, msg.indexOf(":"))}
                    secondary={msg.substring(msg.indexOf(":") + 2)}
                  />
                </>
              )}
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <OutlinedInput
          {...text("message")}
          variant="outlined"
          fullWidth
          endAdornment={
            <InputAdornment>
              <Button
                onClick={handleSubmit}
                variant="contained"
                className={classes.button}
              >
                Send
                <SendIcon />
              </Button>
            </InputAdornment>
          }
        />
      </CardActions>
    </Card>
  );
}

export default ChatBox;
