import React, {useState} from "react";

function Test(){

    const [text, setText] = useState('');
    const [todo, setTodo] = useState([]);

    const saveText = (e)=>{         // 이벤트 발생시
        setText(e.target.value);    // setter 로 지정된 setText는 자동으로 text에 값을 주입. 이벤트를 타깃으로 하여 그 밸류값을 세팅.
    }

    const updateTodo = ()=>{        // todo 리스트 만들기
        setTodo((prevTodo)=>[
            ...prevTodo,            // 기존의 todo
            {
                content : text
            },
        ]);
        setText('');                //  텍스트 비우기
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
                        color: 'black', marginTop: '100px', marginBottom: '80px'
                    }}
                    />
                <button onClick={updateTodo}>일정 추가</button>
            </div>
            
            <div>
                {todo.map((t, index) => (
                    <div
                        key={index}
                        className="todo"
                        style={{ backgroundColor : "skyblue", margin : '10px 150px', fontSize: '20px' }}
                    >
                        {t.content}
                    </div>
                    ))}
            </div>

        </div>
    )
}

export default Test;