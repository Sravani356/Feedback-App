import React from 'react'

const App = () => {
  const title = 'Blog Post';
  const body = 'This is my blog post!';
  const comments = [
    {id:1, text:'Comment one'},
    {id:2, text:'Comment two'},
    {id:3, text:'Comment three'},
    {id:4, text:'Comment four'}
  ];

  const loading = false;
  const showComments = true;
  const commentBlock = 
  <div className="comments">
      <h3>comments ({comments.length})</h3>
      <ul>
        {comments.map((item) => (
            <li key={item.id}>{item.text}</li>      
        ) )}
      </ul>
    </div>

  if(loading) return <h1>Loading...</h1>
  return (
    <div className='container'>
    <h1>{title.toUpperCase()}</h1>
    <p>{body}</p>
    {
      //we can replace ? with && to get rid of else part while rendering
      showComments &&  commentBlock} 
    </div>
  )
}

export default App 
