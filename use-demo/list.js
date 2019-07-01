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
        new inquirer.Separator(),
        {
          name: '叫个小姐姐上门',
          disabled: '大胆!天朝内你居然敢做这种事!'
        },
        '上厕所',
      ]
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
