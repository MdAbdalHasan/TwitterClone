import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import { Avatar, Button, Tooltip } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "abdal",
      username: "MdAbdalHasan1",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://avatars.githubusercontent.com/u/109234405?v=4",
    });

    setTweetMessage("");
    setTweetImage("");
  };





  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <div><Avatar src="https://avatars.githubusercontent.com/u/109234405?v=4" /></div>
          <div className='innerPost'>
            <div>
              <button id='Everyone'>Everyone<ArrowDropDownOutlinedIcon /></button>
            </div>
            <div>
              <input
                id='inputType'
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage}
                placeholder="What is happening?!"
                type="text"
              />
            </div>
            <div id='PublicOutlinedIcon'> <PublicOutlinedIcon />Every One can reply</div>
          </div>



        </div>


        <div className="PostIcon">
          <div className='toolKitIcon'>
            <Tooltip title="Media">
              <InsertPhotoOutlinedIcon />
            </Tooltip>
            <Tooltip title="GIF">
              <GifBoxOutlinedIcon />
            </Tooltip>
            <Tooltip title="Poll">
              <BallotOutlinedIcon />
            </Tooltip>
            <Tooltip title="Emoji">
              <EmojiEmotionsOutlinedIcon />
            </Tooltip>
            <Tooltip title="Schedule">
              <PendingActionsOutlinedIcon />
            </Tooltip>
            <FmdGoodOutlinedIcon />
          </div>
          <div>
            <Button
              onClick={sendTweet}
              type="submit"
              className="Boxtweet__tweetButton"
            >
              post
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
