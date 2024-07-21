const paragraph = document.getElementById('message-output');

// ! 作用: 告诉 ts 这不会为 null; 使用 <> 进行类型转换, 因为 React 的 JSX 里也有使用 <> 
// 所以 ts 推荐使用另外一种语法: as
// const userInputEelemnt = <HTMLInputElement>document.getElementById('user-input')!;
const userInputEelement = document.getElementById('user-input') as HTMLInputElement;

userInputEelement.value = 'Hi there!'

// 手动进行判空
const rawInputElement = document.getElementById('user-input');
if (rawInputElement) {
    (rawInputElement as HTMLInputElement).value = 'Hi';
}