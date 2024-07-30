import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Dropbox from './Dropbox';
import Dustbin from './Dustbin';
import '../static/dragBox.scss';

function DragCard({ indicator, num, name, answer, option, updateResponseList, Qnum }) {
    const initialDustbins = Array(3).fill(null).map(() => ({ lastDroppedItem: null}));
    const [dustbins, setDustbins] = useState(initialDustbins);

    const handleDrop = (index, item) => {
        const updatedDustbins = [...dustbins];
        updatedDustbins[index].lastDroppedItem = item;
        setDustbins(updatedDustbins);

        console.log("This is the number you selected")
        console.log(updatedDustbins[index].lastDroppedItem.name)
        console.log("This is the index ")
        console.log(index)

        if(updatedDustbins[index].lastDroppedItem.name == "Customizability"){
            updateResponseList(1, 1, index)
        }
        else if(updatedDustbins[index].lastDroppedItem.name == "Performance"){
            updateResponseList(1,2,index)
        }
        else if(updatedDustbins[index].lastDroppedItem.name == "Space"){
            updateResponseList(1,3,index)
        }
        else if(updatedDustbins[index].lastDroppedItem.name == "Popularity"){
            updateResponseList(1,4,index)
        }
        else if(updatedDustbins[index].lastDroppedItem.name == "Maintenance Cost"){
            updateResponseList(1,5,index)
        }
        else{
            console.log("Out of bounds jinsuk")
        }

};

    let counter = 0;

    console.log(dustbins)

    return (
        <div className='drag-card-wrapper'>
            <div className='question-progress-indicator' style={{ backgroundImage: `url(${indicator})` }}></div>
            <div className='question-num'>{num}</div>
            <div className='question-script'>{name}</div>
            <div className='question-option'>{option}</div>

            <div className='dustbin-container'>
                {dustbins.map((dustbin, index) => {
                  counter = counter + 1;
                  return(
                    <Dustbin
                        key={index}
                        counter={counter}
                        name={dustbin.lastDroppedItem?.name}
                        accept={['box']}
                        lastDroppedItem={dustbin.lastDroppedItem}
                        onDrop={(item) => handleDrop(index, item)}
                        updateResponseList={updateResponseList}
                        Qnum={1}
                    />
                  )
                  })}
            </div>

            <div className='answer-flex'>
                {answer.map((item, index) => (
                    <Dropbox key={index} name={item} />
                ))
              }
            </div>
        </div>
    );
}

export default DragCard;