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
  const showComments = false;

  if(loading) return <h1>Loading...</h1>
  return (
    <div className='container'>
    <h1>{title.toUpperCase()}</h1>
    <p>{body}</p>
    {
      showComments ? 'yes' : 'no';
    }
    <div className="comments">
      <h3>comments ({comments.length})</h3>
      <ul>
        {comments.map((item) => {
          return (
            <li key={item.id}>{item.text}</li>
          )
        })}
      </ul>
    </div>
    </div>
  )
}

export default App 
