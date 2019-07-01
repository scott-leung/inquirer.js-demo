'use strict';
let inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'action',
      message: '你现在想干嘛',
      choices: [
        '打代码',
        new inquirer.Separator('------我是分割线------'),
        {
          name: '叫个小姐姐上门',
          disabled: '大胆!天朝内你居然敢做这种事!'
        },
        new inquirer.Separator('------我是分割线------'),
        '上厕所',
      ]
    },
    {
      type: 'checkbox',
      message: '选择你梦想',
      name: 'toppings',
      choices: [
        {
          name: '成为亿万富翁'
        },
        {
          name: '成为一名出色的舞蹈家'
        },
        {
          name: '成为万千少女的偶像'
        },
      ],
      validate: function(answer) {
        if (answer.length < 1) {
          return '人如果没有梦想,那跟咸鱼有什么区别呢?';
        }
      
        return true;
      }
    },
    {
      type: 'list',
      name: 'os',
      message: '你打代码的系统是啥',
      choices: ['macOS', 'Windows', 'Centos', 'Ubuntu', 'FreeBSD', 'Others'],
      filter: function(val) {
        return val.toLowerCase();
      }
    }
  ])
  .then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
  });
