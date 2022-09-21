import React from 'react'


export const getList = () => {
    fetch('http://interview-server.useabacus.io/test-data?project_code=luis-abacus-project')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
}
