import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-center text-3xl font-bold bg-base-200 pb-5 pt-5'>Blog</h2>

            <div className='pt-5 mt-2'>
                <h2 className='text-3xl font-bold'>When should you use context API? </h2>
                <p className='pt-2'>The Context API in React allows you to share data between components without the need for props drilling. It's useful when you have data that needs to be accessed by many components at different levels, or when you want to provide a theme or global state that affects the styling or behavior of many components. However, it's important to use it judiciously and avoid overusing it to keep your code easy to understand and maintain.</p>
                
                <h2 className='text-3xl font-bold pt-3'> What is a custom hook? </h2>
                <p className='pt-2'>A custom hook is a reusable function in React that allows you to share logic between components. It enables you to extract and reuse stateful logic from a component so that you can share it across multiple components in your application. Custom hooks are created using the "use" keyword and follow the same rules as other hooks. By creating a custom hook, you can make your code more modular and easier to maintain.</p>


                <h2 className='text-3xl font-bold pt-3'>What is useRef?</h2>
                <p className='pt-2'>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref).useRef is a hook in React that provides a way to store a mutable value that persists across re-renders of a component. It returns a mutable ref object that can be used to store any value, such as a reference to a DOM node or a mutable value like a counter or a flag. useRef is often used to access DOM nodes of a component or to store mutable values that don't trigger a re-render when changed.</p>

                <h2 className='text-3xl font-bold pt-3'>What is useMemo? </h2>
                <p className='pt-2'> useMemo is a hook in React that helps optimize the performance of your application by memoizing a function and caching its result. This means that if the function is called again with the same input, the cached result is returned instead of re-computing the result. useMemo takes two arguments: a function and an array of dependencies. The function is the one that is memoized and the array of dependencies are used to determine when to recompute the memoized value. It is important to use useMemo only when necessary and for functions that are expensive to compute and are called frequently.</p>

            </div>
        </div>
    );
};

export default Blog;