import React, {useEffect, useState} from 'react';
import {getList} from "../service/api";
import { Link } from 'react-router-dom';
import './variableList.css';


function VariablesList () {
    const [variables, setVariables] = useState([]);

    useEffect( () => {
        req();
    }, [])

    const req = async () => {
        const {Results} = await getList();
        setVariables(Results)
    }

    return (
        <div>
            <div className="wrapper">
            {variables.map((i) => (
                <div className="box" key={i.ID}>
                    <Link className="variableName" to={{
                        pathname: `/variables/${i.ID}`,
                        id: i.ID
                    }}>
                        <div>
                            {i.Name}
                        </div>
                    </Link>
                    <div dangerouslySetInnerHTML={{__html: i.Description}} />
                </div>
            ))}
            </div>
        </div>
    )
}

export default VariablesList;