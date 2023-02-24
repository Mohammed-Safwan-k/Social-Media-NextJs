import Avatar from "./Avatar";
import Card from "./Card";

export default function PostCard() {
  return (
    <Card>
      <div className="flex gap-3">
        <div>
          <Avatar />
        </div>
        <div>
          <p>
            <a className="font-semibold" href="">
              {" "}
              Safwan{" "}
            </a>{" "}
            shared a{" "}
            <a className="text-socialBlue" href="">
              {" "}
              album{" "}
            </a>
          </p>
          <p className="text-gray-500 text-sm">2 hours ago</p>
        </div>
      </div>
      <div>
        <p className="my-3 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          placeat vel dolorem nesciunt enim nam ex, facere vitae possimus optio
          impedit ab in sed, consequuntur temporibus quibusdam dicta aliquam
          saepe!
        </p>
        <div className="rounded-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1534695215921-52f8a19e7909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>
      </div>
      <div className="mt-5 flex gap-8">
        <button className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          70
        </button>
        <button className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
          12
        </button>
        <button className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
          5
        </button>
      </div>
      <div className="flex mt-4 gap-3">
        <div>
          <Avatar />
        </div>
        <div className="border grow ">
          <textarea
            className="p-3 px-4 overflow-hidden h-12 rounded-full"
            placeholder="Leave a Comment"
          />
        </div>
      </div>
    </Card>
  );
}
