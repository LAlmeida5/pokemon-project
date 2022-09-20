import {useState} from "react";

function FetchPokemonList() {

    const [data, setData] = useState();
    const getList = () => {
        fetch('http://interview-server.useabacus.io/test-data?project_code=luis-abacus-project')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }

        return (
            <div>
                Click to view Pokemon!<br/>

                <button onClick={getList}>Fetch List</button>
                <br />
                {JSON.stringify(data)}
            </div>
        )
}
export default FetchPokemonList;