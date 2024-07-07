"use client";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  RedditShareButton,
} from "next-share";

import Icon__Twitter from "../assets/twitter";
import Icon__FB from "../assets/fb";
import Icon__Linkdin from "../assets/linkedin";
import Icon__WhatsApp from "../assets/whatsapp";
import Icon__Redit from "../assets/redit";

export default function SocialShare(props: any) {
  const { post } = props;
  return (
    <div className="flex items-center justify-end gap-2 social_share">
      <FacebookShareButton
        url={`/the-skipr-scoop/${post?.slug}`}
        quote={post?.title}
      >
        <Icon__FB className="fill-darkish" />
      </FacebookShareButton>
      <TwitterShareButton
        url={`/the-skipr-scoop/${post?.slug}`}
        title={post?.title}
      >
        <Icon__Twitter className="fill-darkish" />
      </TwitterShareButton>
      <LinkedinShareButton
        url={`/the-skipr-scoop/${post?.slug}`}
        title={post?.title}
      >
        <Icon__Linkdin className="fill-darkish" />
      </LinkedinShareButton>
      <WhatsappShareButton
        url={`/the-skipr-scoop/${post?.slug}`}
        title={post?.title}
      >
        <Icon__WhatsApp className="fill-darkish" />
      </WhatsappShareButton>
      <RedditShareButton
        url={`/the-skipr-scoop/${post?.slug}`}
        title={post?.title}
      >
        <Icon__Redit className="fill-darkish" />
      </RedditShareButton>
    </div>
  );
}
