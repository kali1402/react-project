import React from "react";
import { useDrag } from "react-dnd";
import styled from "styled-components";

const TOOL = "tool";

const listItems = [
  {
    name: "Input",
    class: "A",
  },
  {
    name: "Shape",
    class: "B",
  },
  {
    name: "Gather",
    class: "B",
  },
  {
    name: "Mul",
    class: "B",
  },
  {
    name: "Cast",
    class: "B",
  },
];

const MenuDiv = styled.div`
  position: fixed;
  top: 5%;
  left: 2%;
  width: 20%;
  height: 70%;
  overflow: hidden;
  box-shadow: 1px 1px 5px #999;
  float: right;
  background-color: #efc;
  border-radius: 10px;
`;

const Tool = ({ name, classification }) => {
  const [, drag] = useDrag({
    type: TOOL,
    item: {
      name,
      classification,
    },
  });
  return (
    <div className={"tool " + classification} ref={drag}>
      {name}
    </div>
  );
};

const Menu = () => {
  return (
    <MenuDiv className="tool-wrapper">
      {listItems.map((item, index) => (
        <Tool name={item.name} classification={item.class} key={index} />
      ))}
    </MenuDiv>
  );
};

export default Menu;
