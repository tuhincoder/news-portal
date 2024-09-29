import React from 'react';

const DynamicPage = ({ params, searchParams }) => {
    return (
        <div>
            <h1>Dynamic page : {searchParams.category}</h1>
        </div>
    );
};

export default DynamicPage;