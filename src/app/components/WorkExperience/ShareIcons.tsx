"use client"

import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';

export default function ShareIcons() {
  const WEBSITE_URL = "https://deniz-hobby-projects.nl/"

  return (
    <div className="mt-6 inline-flex flex-col gap-6">
      <small className="font-semibold ">Or share my website:</small>
      <div className="flex flex-row mx-auto gap-x-2">
        <FacebookShareButton
          url={WEBSITE_URL} >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <RedditShareButton
          url={WEBSITE_URL} >
          <RedditIcon size={32} round />
        </RedditShareButton>
        <WhatsappShareButton
          url={WEBSITE_URL} >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <LinkedinShareButton
          url={WEBSITE_URL} >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  )
}
