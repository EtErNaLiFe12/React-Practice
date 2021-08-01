/* esLint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { func } from 'prop-types';
import Hello from './hello';

function App() {
  
  // let [c,d] = [10, 100]; ES6 Destructuring 문법 let c = 10 / let d = 100

  let [좋아요, 좋아요변경] = useState(0); // 앞에는 변수 , 뒤는 변경함수
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 강의']); //[a,b]
  // 자주 변경되거나 서버에서 가져오는 데이터들은 useState을 사용하여 html이 재렌더링을 하여 새로고침 없이 랜더링 될수있게 함.
  // 그렇지 않는 부분들은 변수로 사용해서 사용하던 혹은 하드코딩을 할 것.
  // let posts = '강남 고기 맛집'; // 변수에 데이터를 보관하거나 state에 보관 할 것.
  function titleChg() {
    let newArray = [...글제목]; // spread operator - 별개의 array를 만들고 deep copy를 뜻함
    newArray.sort();
    글제목변경(newArray);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div style={ { color : '#fb5849', fontSize : '20px' } }>개발 Blog</div>
      </div>
      <button onClick={ titleChg }>버튼</button>

      <Modal />
      <Hello />

      <div className="list">
        <h3> { 글제목[0] } <span onClick={ () => { 좋아요변경(좋아요 + 1) }}>👍</span>{ 좋아요 }</h3>
        <p>7월 31일 발행</p>
        <hr/>
      </div>  
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>7월 31일 발행</p>
        <hr/>
      </div> 
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p>7월 31일 발행</p>
        <hr/>
      </div> 

      

    </div>
  );
}

function Modal() { // return() 안에는 html 태그 하나로 묶어야함
  return (
    //div 대신에 fragment를 사용해도 됨 <> </>
    <> 
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      </>
  )
}

export default App;
