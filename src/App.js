import React, { useState } from 'react'
import Button from '@mui/material/Button';
const App = () => {

    const [string , updateString] = useState("");
    const [result , updateResult] = useState(0);

    const clearBoard = ()=>{
        updateString("");
        updateResult(0);
    }

    const changeString = (e)=>{
        if(e == "C") clearBoard();
        else if(e == "+/-")
        {
            if(string.includes(+'-(') == true)
            {
                updateString(string.slice(2 , string.length-1));
            }
            else
            {
                updateString("-("+string+")");
            }
        }
        else if(e == "=")
        {
            let a;
            try{
                a = eval(string);
            }
            catch(err) {
                a = "Error";
            }
            finally{
                updateResult(a);
            }
        }
        else
        {
            if(e=="x") updateString(string+"*");
            else updateString(string+e);
        }
    }

    return <div id="container">

        <div id="upper">

            <div id="string">{string}</div>
            <div id="result">{result}</div>

        </div>

        <div id="lower">

            <div id="buttonContainer">
                <div className="upperButtons">
                    <Button className='button' variant="contained" onClick={()=>changeString('C')} >C</Button>
                    <Button className='button' variant="contained" onClick={()=>changeString('+/-')} >+/-</Button>
                    <Button className='button' variant="contained" onClick={()=>changeString('%')} >%</Button>
                    <Button className='button' variant="contained" onClick={()=>changeString('/')} >/</Button>
                    <Button className='button' variant="contained" onClick={()=>changeString('7')} >7</Button>
                    <Button className='button' variant="contained" onClick={()=>changeString('8')} >8</Button>
                    <Button className='button' variant="contained" onClick={()=>changeString('9')} >9</Button>
                    <Button className='button' variant="contained" onClick={()=>changeString('x')} >x</Button>
                    <Button className='button' variant="contained" onClick={()=>changeString('4')} >4</Button>
                    <Button className='button' variant="contained" onClick={()=>changeString('5')} >5</Button>
                    <Button className='button' variant="contained" onClick={()=>changeString('6')} >6</Button>
                    <Button className='button' variant="contained" onClick={()=>changeString('-')} >-</Button>
                    <Button className='button' variant="contained" onClick={()=>changeString('3')} >3</Button>
                    <Button className='button' variant="contained" onClick={()=>changeString('2')} >2</Button>
                    <Button className='button' variant="contained" onClick={()=>changeString('1')} >1</Button>
                    <Button className='button' variant="contained" onClick={()=>changeString('+')} >+</Button>
                </div>
                <div className="lowerButtons">
                    <Button onClick={()=>changeString('0')} className='button zeroButton' variant="contained" >0</Button>
                    <Button onClick={()=>changeString('.')} className='button' variant="contained" >.</Button>
                    <Button onClick={()=>changeString('=')} className='button' variant="contained" >=</Button>
                </div>
            </div>

        </div>

    </div>;


}


export default App;