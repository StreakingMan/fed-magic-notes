import React, { FC } from 'react';
import classnames from 'classnames';
import style from './index.module.scss';
import { FedMindMapProps } from './interface';
import { fedRoad } from './fed-road';
import SimpleMind from 'react-simple-mind';
import 'react-simple-mind/dist/style.css';

const FedMindMap: FC<FedMindMapProps> = () => {
    return (
        <div className={classnames(style.fedMindMap)}>
            <SimpleMind
                elementClassName={style.element}
                data={fedRoad}
                gap={[64, 24]}
                lineWidth={8}
            />
        </div>
    );
};

export default FedMindMap;
