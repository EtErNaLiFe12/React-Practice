import React from 'react';

/* function Hello(props) {
  return <div style={{
    color: props.color
  }}>안녕하세요 {props.name}</div>;
} */

 function Hello({color, name, isSpecial }) {
  return (
    <div style={{
      color
    }}>
      {isSpecial && <b>*</b>} {/*보여주고 빼고 할시에는 && / 값이 바뀌어야할때는 삼항 연산자 사용 isSpecial ? true : false */}
      안녕하세요 {name}
      </div>
  );
}

Hello.defaultProps = { // 지정된 값이 없을시 지정해놓는 디폴트 값 속성으로 defaultProps를 사용가능
  name: "이름없음"
};

export default Hello;