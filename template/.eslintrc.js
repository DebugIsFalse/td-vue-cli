module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    plugins: ['vue'], // enable vue plugin
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        //必须使用全等
        'eqeqeq' : 0,
        //缩进风格
        "indent": [2, 4],
        //禁用var，用let和const代替
        "no-var": 0,
        //声明时必须赋初值
        "init-declarations": 0,
        //嵌套块深度
        "max-depth": [0, 4],
        //函数最多只能有3个参数
        "max-params": [0, 3],
        //使用严格模式
        "strict": 2,
        //禁止比较时使用NaN，只能用isNaN()
        "use-isnan": 2,
        //jsdoc规则
        "valid-jsdoc": 0
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}