import React, { useEffect, useState } from "react";

function Posts(){
    const [posts, setPosts] = useState([]);

    useEffect(()=>{             //  실행시에 게시물 긁어와서 posts 에 저장
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json));
    },[]);

    const updatePost = (index, content) => {
        // 수정 버튼 클릭 시 실행되는 함수
        setPosts((prevPosts) => {
          const updatedPosts = [...prevPosts];
          updatedPosts[index].body = content;
          return updatedPosts;
        });
    };

    const deletePost = (index) => {
        // 삭제 버튼 클릭 시 실행되는 함수
        setPosts((prevPosts) => {
          const updatedPost = [...prevPosts];
          updatedPost.splice(index, 1); // 해당 인덱스의 todo를 삭제
          return updatedPost;
        });
    };

    return (
        <div>
            <h1 style={{margin : '40px'}}>게시글</h1>
            <button>게시글 작성</button>
            <ul style={{listStyleType: "none"}}>
                {posts.map((post, index) =>(
                    <li key={post.id} style={{padding :'10px',margin:'10px', border : '3px solid black'}}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <button onClick={() => updatePost(index, prompt("수정할 내용을 입력하세요"))}>수정</button>
                        <button onClick={()=> deletePost(index)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Posts;
