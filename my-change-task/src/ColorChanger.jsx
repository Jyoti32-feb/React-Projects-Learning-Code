import {useState} from 'react'

function ColorChanger() {
    const [color, setColor] = useState("black");
    const changeColor = (e) => {
        setColor(e.target.value);
    }
    return (
        <div>
            <h2 style={ { color } } >Hello, World!</h2>
            <input type="text" value ={color} onChange={changeColor} />
            
        </div>
    );
}
export default ColorChanger;