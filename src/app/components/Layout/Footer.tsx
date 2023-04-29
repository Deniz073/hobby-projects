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

const WEBSITE_URL = "https://deniz-hobby-projects.nl/"

export default function Footer() {
  return (
    <footer className="mx-auto h-full mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div className="border-t border-slate-900/5 py-10">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          <div className="flex flex-col mx-auto space-y-2 mb-5 sm:mb-0">
            <p className="font-semibold ">Share my website:</p>
            <div className="flex flex-row space-x-1">
              <FacebookShareButton url={WEBSITE_URL}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <RedditShareButton url={WEBSITE_URL}>
                <RedditIcon size={32} round />
              </RedditShareButton>
              <WhatsappShareButton url={WEBSITE_URL}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <LinkedinShareButton url={WEBSITE_URL}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </div>
          </div>
          <div className="flex flex-col mb-5 sm:mb-0 mx-auto space-y-2">
            <p className="font-semibold">My socials:</p>
            <div className="flex flex-row space-x-1">
              <a
                className="group -m-1 p-1"
                aria-label="Follow on GitHub"
                href="https://github.com/Deniz073"
                target="_blank"
                rel="no-refferer"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600"
                >
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
                </svg>
              </a>
              <a
                className="group -m-1 p-1"
                aria-label="Follow on LinkedIn"
                href="https://www.linkedin.com/in/deniz-erdem-2279b5176/"
                target="_blank"
                rel="no-refferer"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600"
                >
                  <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <span>
              © {new Date().getFullYear()}{' '}
              <a href="https://flowbite.com/" className="hover:underline">
                Deniz Erdem.{' '}
              </a>
              All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
