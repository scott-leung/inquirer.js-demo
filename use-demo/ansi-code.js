console.log('abc\n123\n666\nXXX');

setTimeout(() => {
  console.log('\u001B[2K\u001B[1A\u001B[2K\u001B[1A\u001B[2K\u001B[1A\u001B[2Kcontent');
}, 1000);
