const persion: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'L_MAFIA',
    age: 30,
    hobbies: ['Cooking', 'Reading'],
    role: [2, 'user']
};


console.log(persion.role);



for (const hobby of persion.hobbies) {
    console.log(hobby);
}

persion.hobbies.forEach(e =>
    console.log(e.toUpperCase()));
