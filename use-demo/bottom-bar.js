const inquirer = require('inquirer');
const BottomBar = inquirer.ui.BottomBar;

const loader = ['/ 正在安装', '| 正在安装', '\\ 正在安装', '- 正在安装'];
let i = 0;
const ui = new BottomBar({bottomBar: loader[i % 4]});

setInterval(() => {
  ui.updateBottomBar(`${loader[i++ % 4]} - ${i * 2}%`);
  if (i >= 50) {
    ui.writeLog('安装成功');
    ui.updateBottomBar('退出');
    process.exit();
  }
}, 100);

