import Image from "next/image";
import React from "react";
import ActionBtn from "../objects/ActionBtn";
import UserControlBtn from "../objects/UserControlBtn";

const ProfileHeader = () => {
  const userDetails = {
    name: "Hossam Elshiekh",
    username: "@hoss",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    followers: 1000,
    following: 1000,
    posts: 55,
    exchanges: 122,
    profilePic:
      "https://scontent.fcai21-4.fna.fbcdn.net/v/t39.30808-6/457694717_2302795166719664_2178799062280197835_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFY47gMlqPcxWFq-1gDbahgoxHFudx7iyOjEcW53HuLI4HcEjYNgaJaMhszZB7HZRiScyEHsfGIjkFMexoydKyc&_nc_ohc=4ae9vbmQH24Q7kNvgFjHnSs&_nc_oc=AditGlsgZtsmbHTUXAAzaS2WeacHABUivWHhmebSXaL-brcuSMWhlXkoysk1Amo2oW4&_nc_zt=23&_nc_ht=scontent.fcai21-4.fna&_nc_gid=AuUYymvsq-n5DmS1nk0W_IY&oh=00_AYAYAf5hNUQoFrX1JDdD8iMTHyv_srxBZYseVjI8mp7Cjg&oe=67A3CE89",
    // profilePic : 'https://i.ibb.co/Pzjp6vwy/104960520-1186429651689560-307042119198685423-n.jpg',
    coverPic:
      "https://scontent.fcai21-4.fna.fbcdn.net/v/t1.6435-9/103022811_1177157572616768_9077394826366218832_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeFQTwXuHiocaFqQ1YD_6HTC0wyUlUogc2PTDJSVSiBzY9ibSusojCNEY8ZVUhByKo2pKUcCg8elPVPjTUpOUElo&_nc_ohc=x4-Kzj4r8c8Q7kNvgEcOl7-&_nc_oc=AdjjdB-_Q8Xe7X6_bejp6LkQ_TT7zpwOkyGlUQOVHHMoezA1A0xN3zY6K5RQPYOVjQY&_nc_zt=23&_nc_ht=scontent.fcai21-4.fna&_nc_gid=AmWmF95SpqSpnhvmnbSyMI0&oh=00_AYBOePFtUjuKB6grGdJvunUxyadMcJXWWZ6KGhe-i7D3WA&oe=67C5A798",
  };
  return (
    <div className="flex flex-col gap-5 w-full ">
      <div className="w-full rounded-lg flex h-60">
        <Image
          alt="cover"
          className="object-cover rounded-lg"
          width="1000"
          height="200"
          src={userDetails.coverPic}
        />
      </div>
      <div className="flex relative ">
        <div className=" flex w-60  h-60 z-10 -top-28  p-6 absolute rounded-full">
          <Image
            alt={userDetails.name}
            className="object-cover rounded-full border-8 border-white"
            width="200"
            height="200"
            src={userDetails.profilePic}
          />
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="ml-60 flex flex-col ">
            <h1 className="font-semibold text-xl">{userDetails.name}</h1>
            <h2 className="text-sm">{userDetails.username}</h2>
            <p className="text-xs font-semibold">
              {userDetails.followers} followers | {userDetails.following}{" "}
              following
            </p>
          </div>
          <div>
            <UserControlBtn href='/settings' action='Edit Profile' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
