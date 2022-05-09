import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-2xl'>Difference between javascript and nodejs</h1>
            <h1 className='text-xl'>Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.</h1>
            <h1 className='text-2xl'>When should you use nodejs and when should you use mongodb</h1>
            <h1 className='text-xl'>MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias..</h1>
            <h1 className='text-2xl'>Differences between sql and nosql databases.</h1>
            <h1 className='text-xl'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON...</h1>
            <h1 className='text-2xl'>What is the purpose of jwt and how does it work.</h1>
            <h1 className='text-xl'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed..</h1>
        </div>
    );
};

export default Blog;