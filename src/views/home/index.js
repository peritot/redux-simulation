import React from 'react';
import { Typography, Divider } from 'antd';
import './index.less';

const { Title, Paragraph, Link } = Typography;

function App() {
  return (
    <section className="app-home">
      <Typography>
        <Title>Introduction</Title>
        <Paragraph>A Create React App Template With Ant Design.</Paragraph>
        <Paragraph>A React app with antd.</Paragraph>
        <Divider />
        <Title level={4}>Dependencies</Title>
        <Paragraph>
          <ul>
            <li>
              <Link href="https://github.com/ant-design/ant-design" target="_blank">
                Ant Design
              </Link>
            </li>
            <li>
              <Link href="https://github.com/axios/axios" target="_blank">
                axios
              </Link>
            </li>
            <li>
              <Link href="https://github.com/gsoft-inc/craco" target="_blank">
                craco
              </Link>
            </li>
            <li>
              <Link href="https://github.com/moment/moment" target="_blank">
                Moment.js
              </Link>
            </li>
            <li>
              <Link href="https://github.com/facebook/prop-types" target="_blank">
                prop-types
              </Link>
            </li>
            <li>
              <Link href="https://github.com/ReactTraining/react-router" target="_blank">
                React Router
              </Link>
            </li>
            <li>
              <Link href="https://github.com/reduxjs/react-redux" target="_blank">
                React Redux
              </Link>
            </li>
            <li>
              <Link href="https://github.com/reduxjs/redux-toolkit" target="_blank">
                Redux Toolkit
              </Link>
            </li>
          </ul>
        </Paragraph>
        <Divider />
        <Title level={4}>Develop Dependencies</Title>
        <Paragraph>
          <ul>
            <li>
              <Link href="https://github.com/eslint/eslint" target="_blank">
                ESLint
              </Link>
            </li>
            <li>
              <Link href="https://github.com/prettier/prettier" target="_blank">
                Prettier
              </Link>
            </li>
            <li>
              <Link href="https://github.com/typicode/husky" target="_blank">
                husky
              </Link>
            </li>
            <li>
              <Link href="https://github.com/okonet/lint-staged" target="_blank">
                lint-staged
              </Link>
            </li>
          </ul>
        </Paragraph>
      </Typography>
    </section>
  );
}

export default App;
