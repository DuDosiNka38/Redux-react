import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { AddCommentAction, DeleteCommentAction, AsycFetchComments} from './store/commentReducer';



function App() {

const dispacher = useDispatch();

const cash = useSelector(state => state.cash.cash)
const comment = useSelector(state => state.comment.comment)
console.log(cash)

const add_cash = (cash) => {
  dispacher({type:"ADD_CASH", payload: cash})
}
const get_cash = (cash) => {
  dispacher({type:"GET_CASH", payload: cash})
}


const [addcoment, Setaddcomment] = useState('')
const [addname, Setaddname] = useState('')

const add_comment = () => {
  dispacher(AddCommentAction(comment.length, addname, addcoment))
  Setaddcomment('')
  Setaddname('')
}
const add_many_comment = () => {
  dispacher(AsycFetchComments())
}
const delete_comment = (id) => {
  dispacher(DeleteCommentAction(id))
 
}
  
  return (
    <div className="App">
       <div style={{margin: '5%',  fondSize: '2em'}}>
        <h1>{cash}</h1>
        <button onClick={() => add_cash(Number(prompt()))}> Add</button>
        <button onClick={() => get_cash(Number(prompt()))}>Get</button>
        </div>
       <div style={{margin: '5%',  fondSize: '2em'}}>
       <input placeholder='Ваше имя' value={addname} onChange={event => Setaddname(event.target.value)}></input>
        <input placeholder='Комметарий'  value={addcoment} onChange={event => Setaddcomment(event.target.value)}></input>
         <button onClick={() => add_comment()}>Add comment</button>
         <button onClick={() => add_many_comment()}>Add comment from data base</button>
         
           {comment.length > 0 ? 
                  comment.map((comment, index) => 
                   <div> 
                    <h1>{index + 1}.  {comment.name}</h1>
                    <h2>{comment.body}</h2>
                    <button onClick={() => delete_comment(comment.id)}>Delete comment</button>
                    </div> 
                   )
                  : 
                  <h1>Комменты отстутствуют!</h1>
          }


       </div>
    </div>
  );
}

export default App;
