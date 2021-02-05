function bubbleSort(num) {
  let str = `${num}`;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str.charAt(j) > str.charAt(j + 1)) {
        let tempMemo1 = str.charAt(j);
        let tempMemo2 = str.charAt(j + 1);
        let tempStr1 = str.slice(0, j);
        let tempStr2 = str.slice(j + 2);
        str = tempStr1 + tempMemo2 + tempMemo1 + tempStr2;
      }
    }
  }
  window.alert(`reorganized: ${str}`);
}

bubbleSort(642531);
