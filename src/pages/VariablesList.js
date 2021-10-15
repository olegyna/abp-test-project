import React, {useEffect, useState} from 'react';
import {getList} from "../service/api";
import { Link } from 'react-router-dom';


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
            {variables.map((i) => (
                <React.Fragment key={i.ID}>
                    <Link to={{
                        pathname: `/variables/${i.ID}`,
                        id: i.ID
                    }}>
                        <div>
                            {i.Name}
                        </div>
                    </Link>
                    <div dangerouslySetInnerHTML={{__html: i.Description}} />
                </React.Fragment>
            ))}
        </div>
    )
}

export default VariablesList;