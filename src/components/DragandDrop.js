import React, { useState } from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const TestDiv1 = styled.div`
  position: fixed;
  top: 5%;
  left: 25%;
  width: 70%;
  height: 70%;
  overflow: hidden;
  box-shadow: 1px 1px 5px #999;
  background-color: lightblue;
  border-radius: 10px;
  cursor: move;
`;

const Container = styled.div`
  height: 70vh;
  width: 70vw;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const DragandDrop = () => {
  const [inputBoxes, setInputBoxes] = useState([
    { name: "Input", classification: "A" },
  ]);
  const [addBoxes, setAddBoxes] = useState([]);

  const [{ canDrop, isOverCurrent }, drop] = useDrop({
    accept: "tool",
    canDrop: () => true,
    drop: (item) => {
      console.log(item);
      if (isOverCurrent) {
        setInputBoxes([...inputBoxes, item]);
      }
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  });

  return (
    <TransformWrapper minScale={0.1}>
      {({ zoomIn, zoomOut, resetTransform, positionX, positionY, ...rest }) => (
        <React.Fragment>
          <div className="tools">
            <button onClick={() => zoomIn()}>+</button>
            <button onClick={() => zoomOut()}>-</button>
            <button onClick={() => resetTransform()}>x</button>
          </div>
          <TestDiv1>
            <TransformComponent>
              <Container>
                {inputBoxes.map((member, index) => (
                  <>
                    <div key={index}>
                      <div className={"box " + member.classification}>
                        {member.name}
                        {member.classification}
                      </div>
                    </div>
                  </>
                ))}

                <div
                  className={`drop-area ${canDrop ? "highlight" : ""}`}
                  ref={drop}
                >
                  Input Drag here
                </div>
              </Container>
            </TransformComponent>
          </TestDiv1>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
};

export default DragandDrop;
