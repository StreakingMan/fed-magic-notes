import { SimpleMindProps } from 'react-simple-mind/dist/types/SimpleMind/interface';

export const fedRoad: SimpleMindProps['data'] = {
    title: '大前端',
    children: [
        {
            title: 'HTML/CSS',
        },
        {
            title: 'JavaScript',
            children: [
                { title: '基础' },
                { title: 'ES6及之后的新特性' },
                { title: '数据结构&算法' },
            ],
        },
        {
            title: '框架',
            children: [
                { title: 'MVVM' },
                { title: '虚拟DOM&diff算法' },
                { title: 'VUE' },
                { title: 'REACT' },
                { title: 'NODE' },
            ],
        },
        {
            title: '软件工程',
            children: [
                {
                    title: '打包&构建',
                    children: [{ title: 'WEBPACK' }, { title: 'ROLLUP' }],
                },
                { title: '测试' },
            ],
        },
    ],
};
