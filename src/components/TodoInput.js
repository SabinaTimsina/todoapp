import React, {useState} from 'react';
import { addTodo } from '../redux/actions';
import { v1 as uuid} from 'uuid';
import {useDispatch} from 'react-redux';

export default function TodoInput() {
    let [name, setName] = useState();
    let dispatch = useDispatch();
    return (

           <div className="row m-2">
            
                <input 
                    onChange = {(e)=>setName(e.target.value)}
                    value = {name}
                    type = "text"
                    className="col-6 form-control "
                />
                <button 
                onClick={()=> {
                    dispatch(
                    addTodo(
                        {
                            id:uuid(),
                            name: name
                }
                ))
                setName('');
            }
             }
                className= " col-1 btn btn-secondary ml-4" >
                Add
                </button>

        </div>
    )
}
