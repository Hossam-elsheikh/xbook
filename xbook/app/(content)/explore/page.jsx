import ContainerVert from "@/components/containers/ContainerVert";
import GridContainer from "@/components/containers/GridContainer";
import Post from "@/components/posts/Post";
import React from "react";

const page = () => {
  return (
    <GridContainer cols={5} firstPerc={3} seconedPerc={2}>
      <ContainerVert>
        <Post />
        <Post />
        <Post />
        <Post />
      </ContainerVert>
      <div>grid 2</div>
    </GridContainer>
  );
};

export default page;
