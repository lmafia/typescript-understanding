// enum
enum Role {
    // 0
    ADMIN,
    // 1
    USER,

    // 还能自定义指定 value
    CUSTOMSIZE = 2,
    // value 没有规定一定为数字, 而且可以 mix
    STRING_USER = 'string_user'
}

const persion: {
    name: string;
    age: number;
    hobbies: string[];
    role: Role;
} = {
    name: 'L_MAFIA',
    age: 30,
    hobbies: ['Cooking', 'Reading'],
    role: Role.ADMIN
};


console.log(persion.role);



for (const hobby of persion.hobbies) {
    console.log(hobby);
}

persion.hobbies.forEach(e =>
    console.log(e.toUpperCase()));
