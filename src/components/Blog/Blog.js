import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className="w-10/12 bg-slate-400 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 p-5 mt-10 rounded-2xl">
        {/* -------- */}
        <div
          tabIndex={0}
          className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl text-white font-medium">
          Q: What is The purpose of React Route?
          </div>
          <div className="collapse-content">
            <p className='text-justify'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL.React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. Make the URL your first thought, not an after-thought.</p>
          </div>
        </div>

        {/* -------- */}

        <div
          tabIndex={0}
          className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl text-white font-medium">
          Q: How does Context API work?
          </div>
          <div className="collapse-content">
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
            Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
            React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
            </p>
          </div>
        </div>

        {/* -------- */}

        <div
          tabIndex={0}
          className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl text-white font-medium">
          Q: What is useRef hook?
          </div>
          <div className="collapse-content">
            <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
            The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
            The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
