const persion = {
    name: 'L_MAFIA',
    age: 30,
    hobbies: ['Cooking', 'Reading']
};

console.log(persion.name);

for (const hobby of persion.hobbies) {
    console.log(hobby);
}

persion.hobbies.forEach(e => console.log(e.toUpperCase()));
