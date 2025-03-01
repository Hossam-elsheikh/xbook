import React from "react";
import SideBox from "../sidebar/SideBox";
import UserToFollow from "../objects/UserToFollow";
import Link from "next/link";

const FollowThem = ({ headline, users }) => {
  return (
    <SideBox>
      <h1 className="text-md font-semibold">{headline}</h1>
      <div className="flex flex-col gap-5">
        {users.map((user) => (
          <UserToFollow key={user.id} user={user}/>
        ))}
      </div>
      <Link href='#' className="text-sm font-medium text-main hover:text-sec transition duration-150">View all suggestions</Link>
    </SideBox>
  );
};

export default FollowThem;
