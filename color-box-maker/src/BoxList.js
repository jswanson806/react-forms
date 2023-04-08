import React, { useState } from "react";
import Box from './Box';
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    
    const addBox = (color, height, width) => {
        setBoxes([...boxes, {backgroundColor: color, height: height, width: width}])
    }

    const removeBox = (box) => {
        setBoxes(boxes.filter(b => b !== box));
    }

    return (
        <div>
            <NewBoxForm addBox={addBox}/>
            {boxes.map((box) => (
                <Box backgroundColor={box.backgroundColor} height={box.height} width={box.width} remove={evt => removeBox(box)}/>
            ))}
        </div>
    )
}

export default BoxList;