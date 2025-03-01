import ContainerVert from "@/components/containers/ContainerVert";
import GridContainer from "@/components/containers/GridContainer3_2";
import FollowThem from "@/components/people/FollowThem";
import Post from "@/components/posts/Post";
import SideBox from "@/components/sidebar/SideBox";
import SideComp from "@/components/sidebar/SideComp";
import React from "react";

const page = () => {
  const users = [
    {
      id:1,
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D35AQEQNHahzm5kBw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1731077149508?e=1737568800&v=beta&t=g_v6Rurcr8EzXMLhLrWg8oSaLn7SwtFoVF5E8bZ9kvM",
      name:'Hossam Elsheikh',
      exchangesCount:'122',
      rate:'4.5',
    },
    {
      id:2,
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D35AQEQNHahzm5kBw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1731077149508?e=1737568800&v=beta&t=g_v6Rurcr8EzXMLhLrWg8oSaLn7SwtFoVF5E8bZ9kvM",
      name:'Hossam Elsheikh',
      exchangesCount:'122',
      rate:'4.5',
    },
    {
      id:3,
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D35AQEQNHahzm5kBw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1731077149508?e=1737568800&v=beta&t=g_v6Rurcr8EzXMLhLrWg8oSaLn7SwtFoVF5E8bZ9kvM",
      name:'Hossam Elsheikh',
      exchangesCount:'122',
      rate:'4.5',
    },
  ];
  return (
    <GridContainer>
      <ContainerVert>
        <Post />
        <Post />
        <Post />
        <Post />
      </ContainerVert>
      <SideComp>
        <FollowThem users={users} headline="People to follow"></FollowThem>
      </SideComp>
    </GridContainer>
  );
};

export default page;
