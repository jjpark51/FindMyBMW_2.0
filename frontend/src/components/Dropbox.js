import React, {useState} from 'react'
import { useDrag } from 'react-dnd'
import '../static/dragBox.scss'
import DragHandleIcon from '@mui/icons-material/DragHandle';

function Dropbox({name}) {

    const [active, setActive] = useState(false);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'box',
        item: { name },

        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
          handlerId: monitor.getHandlerId(),
        }),
      }))

  return (
    <>
    <button ref={drag} data-testid={'box'} className='question-answer' style={{ backgroundColor: active ? "#ADD8E6" : "rgb(210, 210, 210) " , color: active ? "#00308F": "black", border: active? "3px solid #00308F" :  "3px solid black" }}>
<DragHandleIcon style={{position: 'relative', top: '20px', left: '15px'}}/>
<a>
  {name}</a></button>           
    </>
    )
}

export default Dropbox