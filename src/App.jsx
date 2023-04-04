import React from 'react'

const App = () => {
  const title = 'Blog Post';
  const body = 'This is my blog post!';
  const comments = [
    {id:1, text:'Comment one'},
    {id:2, text:'Comment two'},
    {id:3, text:'Comment three'},
    {id:4, text:'Comment four'}
  ]
  return (
    <div className='container'>
    <h1>{title.toUpperCase()}</h1>
    <p>{body}</p>
    {Math.random() * 5 * 5}
    </div>
  )
}

export default App 
