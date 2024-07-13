type Employee = {
    name: string,
    startDate: Date
}
type Admin = {
    name: string,
    privileges: string[]
}

/**
 * 要求 ElevatedEmployee 的变量对象要既符合 Admin 也符合 Employee
 * type 也可以用 interface 替换 
 * 这里的 & 就像是定义一个  ElevatedEmployee 接口
 * 继承了 Admin 和 Employee
 */
type ElevatedEmployee = Admin & Employee;

/**
 * 如果用 | 
 * 要求 ElevatedEmployee 的变量对象要既符合 Admin 或者 Employee 或者都符合
 */
// type ElevatedEmployee = Admin | Employee;

const e: ElevatedEmployee = {
    name: 'Max',
    privileges: ['1'],
    startDate: new Date()
}



type Combinable = string | number;
type Numberic = number | boolean;
type Universal = Combinable | Numberic;