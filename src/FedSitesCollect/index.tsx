import React, { FC } from 'react';
import classnames from 'classnames';
import style from './index.module.scss';
import { FedSitesCollectProps } from './interface';
import { Avatar, Chip } from '@mui/material';

const FedSitesCollect: FC<FedSitesCollectProps> = () => {
    return (
        <div className={classnames(style.fedSitesCollect)}>
            <Chip
                avatar={<Avatar alt="" src="https://pomb.us/favicon.ico" />}
                label="Build your own react!"
                variant="outlined"
                clickable
                onClick={() =>
                    window.open(
                        'https://pomb.us/build-your-own-react/',
                        '_blank'
                    )
                }
            />
            <Chip
                avatar={
                    <Avatar
                        alt=""
                        src="https://blog.streakingman.com/assets/favicon.ico"
                    />
                }
                label="Streakingman's Blog"
                variant="outlined"
                clickable
                onClick={() =>
                    window.open('https://blog.streakingman.com', '_blank')
                }
            />
        </div>
    );
};

export default FedSitesCollect;
