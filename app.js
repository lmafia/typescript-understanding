var persion = {
    name: 'L_MAFIA',
    age: 30,
    hobbies: ['Cooking', 'Reading'],
    role: [2, 'user']
};
// 下面让他赋值一个 3 个元素的数组会报错
persion.role = [1, '23', 1];
// 添加一个 boolean 元素也会报错
persion.role.push(true);
/**
 * 但是,
 * 要是按照 tuple 的语法，push 应该要报错，
 * 难道因为这是用数组来定义, 所以实际是数组罢了
 */
persion.role.push('123');
console.log(persion.role);
for (var _i = 0, _a = persion.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
persion.hobbies.forEach(function (e) {
    return console.log(e.toUpperCase());
});
