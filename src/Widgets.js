
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import {
  TwitterFollowButton,
  TwitterMentionButton,
  TwitterShareButton,
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search " type="text" />
      </div>
      <div className='SubscribeToPremium'>
        <h2>Subscribe to Premium </h2>
        <p>Subscribe to unlock new features and if <br /> eligible, receive a share of ads revenue.</p>
        <button id='SubscribeBtn'>Subscribe</button>
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1695340924438745466"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="MdAbdalHasan1"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/abdal.hasan.58/"}
          options={{ text: "#reactjs is awesome", via: "abdal" }}
        />

        <TwitterMentionButton
          screenName={'@MdAbdalHasan1'}
        />
        <TwitterFollowButton
          screenName={'@MdAbdalHasan1'}
        />
      </div>
    </div>
  );
}

export default Widgets;
