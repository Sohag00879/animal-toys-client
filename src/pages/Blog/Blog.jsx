const Blog = () => {
  return (
    <div className="border-2 border-indigo-600 p-12 mt-16 mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        QUESTION AND ANSEWR
      </h2>
      <div>
        <h2 className="text-xl font-semibold mb-4 mt-4">
          1.What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h2>
        <p>
          The access token allows for access to different APIs and protected
          resources. The refresh token lets you mint new access tokens. The id
          token from OpenID Connect is used by the client to display information
          about the user. It also allows for a better balance between security
          and user experience by reducing the need for frequent
          re-authentication while maintaining controlled access to resources.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4 mt-4">
          2.Compare SQL and NoSQL databases?
        </h2>
        <p>
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable. SQL databases are table-based, while NoSQL
          databases are document, key-value, graph, or wide-column stores. SQL
          databases are better for multi-row transactions, while NoSQL is better
          for unstructured data like documents or JSON.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4 mt-4">
          3.What is express js? What is Nest JS ?
        </h2>
        <p>
          Express is a popular and minimalist web application framework for
          Node.js. It provides a set of features and utilities that simplify the
          process of building web applications and APIs.
        </p>
        <p>
          NestJS is a framework for developing modern server-side applications
          in Node. js. It is built on top of Express, a popular server framework
          for Node. js, and provides a robust set of features for building
          efficient, scalable, and enterprise-grade applications
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4 mt-4">
          4.What is MongoDB aggregate and how does it work?
        </h2>
        <p>
          MongoDB aggregation is a way of processing a large number of documents
          in a collection by means of passing them through different stages. The
          stages make up what is known as a pipeline. The stages in a pipeline
          can filter, sort, group, reshape and modify documents that pass
          through the pipeline.
        </p>
      </div>
    </div>
  );
};

export default Blog;
