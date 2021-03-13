module.exports = function check(str, bracketsConfig) {
  let bracketsClose = bracketsConfig.reduce((acc, val) => acc.concat(val), []).filter((item, index) => (index%2 == 1));
  let bracketsOpen = bracketsConfig.reduce((acc, val) => acc.concat(val), []).filter((item, index) => (index%2 == 0));
  let arr_str = str.split('');
  for (let i = 0; i < arr_str.length; i++){
      if (bracketsClose.includes(arr_str[i])){
          let j = bracketsClose.indexOf(arr_str[i]);
          if (arr_str[i-1] == bracketsOpen[j]){
              arr_str.splice(i-1, 2);
              i -= 2;
          }
      }
  }
  return arr_str.length > 0 ? false : true;
}