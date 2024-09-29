import React from 'react';

const NewsDetailsPage = ({ params }) => {
    return (
        <div>
            {params.newsId}
        </div>
    );
};

export default NewsDetailsPage;