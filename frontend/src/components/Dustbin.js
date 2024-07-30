import React from 'react';
import { useDrop } from 'react-dnd';

const Dustbin = ({ name,counter, accept, lastDroppedItem, onDrop , updateResponseList, Qnum }) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  const isActive = isOver && canDrop;

  let backgroundColor = 'transparent';

  let opacity = '1';

  if (isActive) {
    backgroundColor = '#ADD8E6';
    opacity = '0.1';
  } else if (canDrop) {
    backgroundColor = 'white';
    opacity = '0.1';
  }
  
  if(lastDroppedItem &&  lastDroppedItem.name && lastDroppedItem.name.length > 0) {
    backgroundColor = '#ADD8E6';
    opacity = '0.1';
  }
  

  if(counter == 1){
  return (
    <div
      ref={drop}
      style={{
        backgroundColor,
        width: '255px',
        height: '70px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid #00308F',
        margin: '10px',
        borderRadius: '30px',
        opacity: '1',
        fontSize: '13pt',
        fontWeight: 'bolder',
        color: '#00308F'
      }}
    >
      {"1st " + "\u00A0"}
      {lastDroppedItem && (
        <p>{lastDroppedItem.name}</p>
      )
      }
    </div>
  );
      }
      else if(counter == 2) {
        return (
          <div
            ref={drop}
            style={{
              backgroundColor,
              width: '255px',
              height: '70px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '2px solid #00308F',
              margin: '10px',
              borderRadius: '30px',
              opacity: '1',
              fontSize: '13pt',
              fontWeight: 'bolder',
              color: '#00308F'

            }}
          >
            {"2nd " + "\u00A0"}
            {lastDroppedItem && (
              <p>{lastDroppedItem.name}</p>
            )}
          </div>
        );
      }
      else {
        return (
          <div
            ref={drop}
            style={{
              backgroundColor,
              width: '255px',
              height: '70px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '2px solid #00308F',
              margin: '10px',
              borderRadius: '30px',
              opacity: '1',
              fontSize: '13pt',
              fontWeight: 'bolder',
              color: '#00308F'

            }}
          >
            {"3rd " + "\u00A0"}
            {lastDroppedItem && (
              <p>{lastDroppedItem.name}</p>
            )}
          </div>
        );
      }
};

export default Dustbin;