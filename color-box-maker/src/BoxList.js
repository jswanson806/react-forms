import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    
    const addBox = (color, height, width) => {
        setBoxes([...boxes, {id: uuid(), backgroundColor: color, height: height, width: width}])
    }

    const removeBox = (box) => {
        setBoxes(boxes.filter(b => b !== box));
    }

    return (
        <div>
            <NewBoxForm addBox={addBox}/>
            {boxes.map((box) => (
                <Box id={box.id} backgroundColor={box.backgroundColor} height={box.height} width={box.width} key={box.id} remove={evt => removeBox(box)}/>
            ))}
        </div>
    )
}

export default BoxList;