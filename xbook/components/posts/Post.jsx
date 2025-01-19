import Image from "next/image";
import React from "react";
import ExchangeFlame from "../objects/Flame";
import { Yellowtail } from "next/font/google";
import BookPost from "../books/BookPost";
import LikeIcon from "../objects/Like";
import ActionBtn from "../objects/ActionBtn";
import CommentIcon from "../objects/Comment";
import ExchangeIcon from "../objects/Exchange";

const Post = () => {
  const postDetails = {
    posterName: "Hossam Elsheikh",
    posterAvatar:
      "https://media.licdn.com/dms/image/v2/D4D35AQEQNHahzm5kBw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1731077149508?e=1737568800&v=beta&t=g_v6Rurcr8EzXMLhLrWg8oSaLn7SwtFoVF5E8bZ9kvM",
    exchangesCount: 20,
    rate: 4.5,
    bookDetails: {
      img: "https://m.media-amazon.com/images/I/81NQA1BDlnL._AC_UF1000,1000_QL80_.jpg",
      title: "Harry Potter and the Prisoner of Azkaban",
      author: "J. K. Rowling",
      pubYear: "2000",
    },
    likesCount: 52,
    commentsCount: 15,
  };
  return (
    <div className="flex  flex-col w-full bg-white rounded-md border">
      <div className="p-5 flex gap-5 flex-col">
        <div className="flex gap-3">
          <div className="flex relative rounded-full w-12 h-12">
            <Image
              objectFit="cover"
              className="rounded-full"
              src={postDetails.posterAvatar}
              fill
            />
          </div>
          <div>
            <h1 className="font-semibold">{postDetails.posterName}</h1>
            <p className="flex text-sm font-base items-center gap-1">
              {postDetails.exchangesCount}
              <ExchangeFlame
                size={14}
                fill={"var(--main)"}
                color={"var(--main)"}
              />
              {postDetails.rate} / 5
            </p>
          </div>
        </div>
        <div className="flex flex-col p-3 gap-2 rounded-sm">
          <p>I'm looking for Harry Potter series ...</p>
          <BookPost {...postDetails.bookDetails} />
        </div>
        <div className="text-xs font-light flex gap-2">
          <p>{postDetails.likesCount} Likes</p>
          <p>{postDetails.commentsCount} Comments</p>
        </div>
      </div>
      <div className="flex">
       <ActionBtn Icon={LikeIcon} text={'Like'} size={20} color={'var(--main)'} fill={'none'}  />
       <ActionBtn Icon={CommentIcon} text={'Comment'} size={20} color={'var(--main)'} fill={'none'}  />
       <ActionBtn Icon={ExchangeIcon} text={'Exchange'} size={20} color={'var(--main)'} fill={'none'}  />
      </div>
    </div>
  );
};

export default Post;
