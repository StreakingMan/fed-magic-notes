import { SimpleMindProps } from 'react-simple-mind/dist/types/SimpleMind/interface';

export const fedRoad: SimpleMindProps['data'] = {
    title: '大前端',
    children: [
        {
            title: 'HTML/CSS',
            children: [
                { title: '语义化' },
                { title: 'SEO' },
                { title: 'Canvas' },
                { title: 'Svg' },
                { title: 'CSS选择器' },
                { title: '权重、继承和层叠' },
                { title: '媒体查询' },
                { title: '盒模型' },
                { title: '横向/纵向格式化' },
                { title: '浮动和块级格式化上下文-BFC' },
                { title: '定位和层叠上下文' },
                { title: 'Flex布局' },
                { title: 'Grid布局' },
                { title: '变换、过渡和动画' },
                { title: 'CSS模块化' },
            ],
        },
        {
            title: 'JavaScript',
            children: [
                {
                    title: '基础',
                    children: [
                        { title: '对象' },
                        { title: '函数' },
                        { title: '执行上下文、作用域和作用域链' },
                        { title: '闭包' },
                        { title: '原型、原型链和继承' },
                        { title: '事件循环和任务队列' },
                        { title: '正则' },
                    ],
                },
                {
                    title: 'ES6及之后的新特性',
                    children: [
                        {
                            title: 'ES6(2015)',
                            children: [
                                {
                                    title: 'let const 和块级作用域',
                                },
                                {
                                    title: '结构赋值',
                                },
                                {
                                    title: '字符串、正则、数值的拓展',
                                },
                                {
                                    title: '函数的拓展',
                                    children: [
                                        {
                                            title: '默认值',
                                        },
                                        {
                                            title: 'Rest参数',
                                        },
                                        {
                                            title: '箭头函数',
                                        },
                                        {
                                            title: '绑定this',
                                        },
                                        {
                                            title: '尾调用优化',
                                        },
                                    ],
                                },
                                {
                                    title: '数组的拓展',
                                    children: [
                                        {
                                            title: '拓展运算符',
                                        },
                                    ],
                                },
                                {
                                    title: '对象的拓展',
                                },
                                {
                                    title: 'Symbol',
                                },
                                {
                                    title: 'Set和Map',
                                },
                                {
                                    title: 'Proxy和Reflect',
                                },
                                {
                                    title: 'Promise',
                                },
                                {
                                    title: 'Iterator和Generator',
                                },
                                {
                                    title: 'Class',
                                },
                                {
                                    title: 'Module',
                                },
                                {
                                    title: 'ArrayBuffer和TypedArray',
                                },
                            ],
                        },
                        {
                            title: 'ES7(2016)',
                            children: [
                                { title: 'Array.prototype.includes()' },
                                { title: '指数操作符 ** （即 Math.power() ）' },
                            ],
                        },
                        {
                            title: 'ES8(2017)',
                            children: [
                                {
                                    title: 'async/await',
                                },
                                {
                                    title: 'Object.values()、Object.entries()和Object.getOwnPropertyDescriptors()',
                                },
                                { title: '对象的拓展运算符' },
                                { title: 'String.prototype.padStart和padEnd' },
                                { title: '函数参数列表允许逗号结尾' },
                                { title: 'SharedArrayBuffer和Atomics' },
                            ],
                        },
                        {
                            title: 'ES9(2018)',
                            children: [
                                {
                                    title: '异步迭代 for await...of',
                                },
                                {
                                    title: 'Promise.finally()',
                                },
                                {
                                    title: '展开操作符',
                                },
                                { title: '正则拓展' },
                            ],
                        },
                        {
                            title: 'ES10(2019)',
                            children: [
                                { title: 'BigInt' },
                                { title: 'Array.flat()和flatMap()' },
                                { title: 'String.trimStart()和trimEnd()' },
                                { title: 'Object.formEntries()' },
                                { title: '...' },
                            ],
                        },
                        {
                            title: 'ES11(2020)',
                            children: [
                                {
                                    title: '可选链操作符?. 空值合并操作符??',
                                },
                                { title: '...' },
                            ],
                        },
                        {
                            title: 'ES12(2021)',
                            children: [
                                { title: 'String.prototype.replaceAll' },
                                { title: 'Promise.any' },
                                { title: 'WeakRefs' },
                                { title: '逻辑运算赋值表达式 &&= ||= ??=' },
                                { title: '数字分隔符' },
                            ],
                        },
                    ],
                },
                { title: '模块化' },
                { title: 'DOM' },
                { title: 'BOM' },
            ],
        },
        { title: 'Typescript' },
        {
            title: '框架',
            children: [
                { title: 'MVVM' },
                { title: '虚拟DOM' },
                { title: 'Diff算法' },
                { title: '响应式' },
                { title: '服务端渲染' },
                { title: 'VUE' },
                {
                    title: 'REACT',
                    children: [
                        {
                            title: '【文章】React 运行时优化方案的演进',
                            url: 'https://juejin.cn/post/7010539227284766751',
                        },
                        {
                            title: '【文章】React 设计思想',
                            url: 'https://juejin.cn/post/7010539227284766751',
                        },
                        {
                            title: '【站点】React 技术揭秘',
                            url: 'https://react.iamkasong.com',
                        },
                    ],
                },
                { title: 'NODE' },
            ],
        },
        {
            title: '浏览器',
            children: [
                { title: '渲染原理' },
                { title: '跨域机制和解决方案' },
                { title: '垃圾回收机制' },
            ],
        },
        {
            title: '软件工程',
            children: [
                {
                    title: '打包&构建',
                    children: [
                        { title: 'Webpack' },
                        { title: 'Rollup' },
                        { title: 'Vite' },
                    ],
                },
                { title: '测试' },
            ],
        },
        {
            title: '数据结构&算法',
            children: [
                { title: '复杂度' },
                { title: '排序' },
                { title: '搜索' },
                { title: '深度/广度优先' },
                {
                    title: '算法技巧',
                    children: [
                        { title: '分治' },
                        { title: '动态规划' },
                        { title: '贪心' },
                        { title: '回溯' },
                    ],
                },
            ],
        },
        { title: '计算机基础' },
        {
            title: '计算机网络',
            children: [
                { title: '网络模型' },
                { title: 'DNS解析' },
                { title: 'TCP三次握手、四次挥手' },
                { title: 'HTTP和HTTPS' },
                { title: 'HTTP2' },
                { title: 'CND加速' },
            ],
        },
    ],
};
