import React, {useEffect, useState} from "react";
import {getList} from "../service/api";
import {useHistory} from "react-router";

function VariableDetails () {
    const [variable, setVariable] = useState([]);
    const { location } = useHistory();

    useEffect( () => {
        req();
    }, [])

    const req = async () => {
        const {Results} = await getList();
        const v = Results.filter((i) => i.ID === location.id)
        setVariable(v)
    }

    return (
        <>
            {variable.map((v) => (
                <React.Fragment key={v.ID}>
                    <div>
                        {v.Name}
                    </div>
                    <div dangerouslySetInnerHTML={{__html: v.Description}} />
                </React.Fragment>
            ))}
        </>
    )
}

export default VariableDetails