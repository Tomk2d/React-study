import React, { useState } from 'react';

const TagList = () => {
  const [inputText, setInputText] = useState(''); // 입력창에 입력한 텍스트를 저장하는 상태
  const [tags, setTags] = useState([]); // 생성된 태그를 저장하는 상태

  const getRandomColor = () => {
    // 랜덤한 색상을 생성하는 함수
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddTag = () => {
    if (inputText.trim() === '') {
      return; // 입력이 비어있으면 아무것도 하지 않음
    }

    // 새로운 태그를 배열에 추가하고 입력창을 비움
    setTags((prevTags) => [
      ...prevTags,
      {
        text: inputText,
        color: getRandomColor(),
      },
    ]);
    setInputText('');
  };

  return (
    <div style={{backgroundColor : 'pink', margin: '20px'}}>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="일정을 입력하세요"
        style={{ color: 'black', marginTop: '100px', marginBottom: '80px' }}
      />
      <button onClick={handleAddTag}>일정 추가</button>
      <div>
        {tags.map((tag, index) => (
          <div
            key={index}
            className="tag"
            style={{ backgroundColor: tag.color, margin : '10px 150px', fontSize: '20px' }}
          >
            {tag.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagList;
