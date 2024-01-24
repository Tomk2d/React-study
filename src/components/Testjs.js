import React, {useState} from "react";
import TodoItems from "./TodoTest";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';



function Test(){

    const [text, setText] = useState('');
    const [todo, setTodo] = useState([]);
    const [color, setColor] = useState('')

    const saveText = (e)=>{         // 이벤트 발생시
        setText(e.target.value);    // setter 로 지정된 setText는 자동으로 text에 값을 주입. 이벤트를 타깃으로 하여 그 밸류값을 세팅.
    }

    const addTodo = ()=>{        // todo 리스트 만들기
        setTodo((prevTodo)=>[
            ...prevTodo,            // 기존의 todo를 복사하고, 뒤에 저거 요소로 추가
            {
                content : text,
                backcolor : color
            },
        ]);
        setText('');                //  텍스트 비우기
    }

    const updateTodo = (index, updatedContent) => {
        // 수정 버튼 클릭 시 실행되는 함수
        setTodo((prevTodo) => {
          const updatedTodo = [...prevTodo];
          updatedTodo[index].content = updatedContent;
          return updatedTodo;
        });
      };
    
    const deleteTodo = (index) => {
        // 삭제 버튼 클릭 시 실행되는 함수
        setTodo((prevTodo) => {
          const updatedTodo = [...prevTodo];
          updatedTodo.splice(index, 1); // 해당 인덱스의 todo를 삭제
          return updatedTodo;
        });
    };

    const addColor = (e)=>{
        setColor(e.target.value);
    }

    return (
        <div>
            <div>
                <h1>Todo App</h1>
                <input 
                    type="text" 
                    placeholder="일정을 입력하세요"
                    value={text}
                    onChange={saveText}
                    style={{
                        color: 'black', marginTop: '100px', marginBottom: '10px'
                    }}
                    />
                <button onClick={addTodo}>일정 추가</button>
            </div>
            
            <TodoItems addColor = {addColor} todo = {todo} updateTodo = {updateTodo} deleteTodo = {deleteTodo} />
        </div>
    )
}

export default Test;