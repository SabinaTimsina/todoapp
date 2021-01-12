import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';

function TodoItem({todo}) {
    const [editable, seteditable] = useState(false);
    const [name, setname] = useState(todo.name)
    const dispatch = useDispatch();
    return (
        <div>
            <div className="row mx-2">
            <div className = "col-1">
            <h4>{todo.id.length > 1 ?todo.id[2]:todo.id}</h4>
            </div>
                <div className="col-3">
                    
                    <div className = "col">
                        {editable?
                            <input
                                type = "text"
                                className="form-control"
                                value={name}
                                onChange={(e)=> setname(e.target.value)}
                            />
                            :<h4>{todo.name}</h4>}
                    </div>
                </div>
                <div className = "col-6">
                    <button 
                    onClick = {()=>{
                        dispatch(updateTodo(
                            {
                                ...todo,
                                name: name
                            }
                        ))
                        if(editable){
                            setname(todo.name);
                        }
                        
                        seteditable(!editable);
                        
                    }}
                    className="btn btn-secondary m-2"
                    >{editable? "Update" : "Edit"}</button>
                    <button
                    onClick ={() => dispatch(deleteTodo(todo.id))}
                    className="btn btn-danger m-2"
                    >Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem
