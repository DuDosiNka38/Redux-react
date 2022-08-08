
const DefultState = {
     comment: []
}

const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const ADD_MANY_COMMENT = "ADD_MANY_COMMENT";
export const Fetch_Comments = "Fetch_Comments";

export const comment = (state = DefultState, action) => {
switch(action.type){
      case ADD_MANY_COMMENT:
            return {...state, comment: state.comment.concat(action.payload)}
      case ADD_COMMENT: 
      return  {...state, comment: [...state.comment, action.payload ]}
      case DELETE_COMMENT:
       return  {...state, comment: [...state.comment.filter(event => event.id != action.payload)]};
       default: return state; 
 }
}

export const AddCommentAction = (id,addname, addcoment) => ({type:"ADD_COMMENT", payload: {id: id + 1, name: addname, body: addcoment}})
export const DeleteCommentAction = (id) => ({type:"DELETE_COMMENT", payload: id})
export const AddManyCommentAction = (payload) => ({type:"ADD_MANY_COMMENT", payload: payload})
export const AsycFetchComments = () => ({type: "Fetch_Comments"})