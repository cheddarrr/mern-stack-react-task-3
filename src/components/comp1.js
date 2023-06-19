import {useState} from 'react';
export function Comp1 ()
{
    const [show,setShow] = useState(false);
    const [col,setCol] = useState('');
    
    let arr = ["blue","green","red","black","yellow",'grey']
    const color = (event) => {
        let x = event.target.value;
        setCol(arr[x]);
        setShow(!show);
    }

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div class="container my-5">
            <button onClick={handleClick} class="btn btn-outline-dark"
            style={{backgroundColor:col}}>Pick a color</button>
            <br></br><br></br><br></br>
            {show && (
                <div>
                <button onClick={color} value="0" class="btn btn-primary">Blue</button>
                <button onClick={color} value="1" class="btn btn-success mx-2">Green</button>
                <button onClick={color} value="2" class="btn btn-danger mx-2">Red</button>
                <button onClick={color} value="3" class="btn btn-dark mx-2">Black</button>
                <button onClick={color} value="4" class="btn btn-warning mx-2">Yellow</button>
                <button onClick={color} value="5" class="btn btn-secondary">Grey</button>
                </div>
            )}
            <br/><br/>
            <p>The color choosen is {col}</p>
        </div>
    )
}