import React, {useState} from 'react';
import {getVin} from "../service/api";
import {filter} from "../utils/filter";
import {Link} from "react-router-dom";

function MainPage() {
    const [vin, setVin] = useState('');
    const [decode, setDecode] = useState([]);
    const [history, setHistory] = useState([])

   const onchange = (e) => {
        const { value } = e.target;
        setVin(value)
    }

    const getInformation = async () => {
           const { Results } = await getVin(vin)
           const cache = filter(Results)
           setDecode(cache)
            if (history.length === 5){
                history.shift();
                setHistory(history.concat(vin))
            }else {
                setHistory(history.concat(vin))
            }
    }

    const onClick = async (value) => {
        setVin(value)
        const { Results } = await getVin(vin)
        const cache = filter(Results)
        setDecode(cache)
    }

    return (
        <div>
            <h1>Vin decoder</h1>
            <input
                maxLength={17}
                onChange={(e) => onchange(e)}
                value={vin} />
            <button onClick={getInformation}>Decode Vin</button>
            <Link to={'/variables'}>
                Variables
            </Link>
            <div>History of search</div>
            <ul>
                {history.map((value, index) => (
                    <li key={index}>
                        <button onClick={() => onClick(value)}>
                            {value}
                        </button>
                    </li>
                ))}
            </ul>
            <div>
                {decode.map((i) => (
                    <div key={i.VariableId}>
                        <div>
                            {i.Variable}
                        </div>
                        <div>
                            {i.Value}
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    )
}

export default MainPage;