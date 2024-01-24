import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';

export default function TodoItems(props){
    return(
        <div>
            <button value='blue' onClick={props.addColor} style={{marginRight : '6px'}}>blue</button>
            <button value='skyblue' onClick={props.addColor} style={{marginRight : '6px'}}>skyblue</button>
            <button value='pink' onClick={props.addColor} style={{marginRight : '6px'}}>pink</button>
            <button value='white' onClick={props.addColor}>white</button>

            <div style={{display : "flex", flexDirection:'column', alignItems : 'center', marginTop : '30px', }}>
                <Form.Label htmlFor="exampleColorInput" style={{fontSize : '30px'}}>Color picker</Form.Label>
                <Form.Control
                    type="color"
                    id="exampleColorInput"
                    defaultValue="#563d7c"
                    title="Choose your color"
                    onClick={props.addColor}
                    size = "20px"
                />
            </div>


            <h1 style={{marginTop : '80px', marginBottom : '40px'}}>Todo List</h1>
            {props.todo.map((t, index) => (
                <div
                    key={index}
                    className="todo-item"
                    style={{ backgroundColor : t.backcolor, margin : '10px 150px', fontSize: '20px' ,borderRadius: '10px'}}
                >
                    <div>{index+1}. {t.content}</div>
                    <div>
                        <button onClick={() => props.updateTodo(index, prompt("수정할 내용을 입력하세요"))}>수정</button>
                        <button onClick={() => props.deleteTodo(index)}>삭제</button>
                    </div>
                </div>
            ))}
        </div>
    )
}