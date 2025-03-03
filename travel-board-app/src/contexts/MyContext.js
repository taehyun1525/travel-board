import React, { createContext, useState } from 'react';

// Context 생성
const MyContext = createContext();

// Provider 컴포넌트
export const MyProvider = ({ children }) => {
  const [data, setData] = useState([
    { id: 1, title: '게시글 1', content: '첫 번째 게시글 내용' },
    { id: 2, title: '게시글 2', content: '두 번째 게시글 내용' },
    { id: 3, title: '게시글 3', content: '세 번째 게시글 내용' }
  ]);

  const addData = (title, content) => {
    setData([...data, { id: data.length + 1, title, content }]);
  };

  return (
    <MyContext.Provider value={{ data, addData }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
