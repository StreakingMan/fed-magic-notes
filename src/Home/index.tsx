import React, { FC } from 'react';
import classnames from 'classnames';
import style from './index.module.scss';
import { HomeProps } from './interface';

const Home: FC<HomeProps> = () => {
    return <div className={classnames(style.home)}>HOME!!</div>;
};

export default Home;
