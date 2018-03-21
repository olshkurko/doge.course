import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import Message from "./Message";

const styles = theme => ({
  messagesWrapper: {
    overflowX: "scroll",
    height: "100%",
    width: "100%",
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: "120px"
  },
  paper: {
    padding: theme.spacing.unit * 3
  }
});

class MessageList extends React.Component {
  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    const messagesWrapper = this.refs.messagesWrapper;
    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render() {
    const { classes, messages, match, activeUser } = this.props;

    if (!match.params.chatId) {
      return (
        <Paper className={classes.paper}>
          <Typography variant="display1" gutterBottom>
            Start talking...
          </Typography>
          <Typography variant="body1" gutterBottom>
            Use <strong>Recents</strong> to see recent conversations.
          </Typography>
        </Paper>
      );
    }
    return messages && messages.lenght ? (
      <div className={classes.messagesWrapper} ref="messagesWrapper">
        {messages.map((message, index) => (
          <Message key={index} activeUser={activeUser} {...message} />
        ))}
      </div>
    ) : (
      <Typography variant="display1">There is no messages yet...</Typography>
    );
  }
}

export default withRouter(withStyles(styles)(MessageList));
