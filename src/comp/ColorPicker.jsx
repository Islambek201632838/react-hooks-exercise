import { useState } from 'react'

function ColorPicker() {
    const [color, setColor] = useState('138, 43,246');

    const handleColor = function () {
        let x = Math.floor(Math.random() * 253);
        let y = Math.floor(Math.random() * 253);
        let z = Math.floor(Math.random() * 253);
        setColor(`${x}, ${y}, ${z}`);
    }

    return (
        <>
            <button style={{ backgroundColor: `rgba(${color}, 1)`, width: '500px', 
                            outline:'none', fontSize:'30px', padding:'5px'}} 
                    onClick={handleColor}>click to change color</button>
        </>
    )
}

export default ColorPicker;
