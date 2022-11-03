const formUser = function (userInformation) {
    userInformation.mood = 'happy';
    userInformation.hobby = 'skydiving';
    userInformation.premium = false;

    console.log('Меняю значения ключей и добавляю ключ mood');
    const keys = Object.keys(userInformation);

    for (const key of keys) {
        console.log('Ключ:', key);

        console.log('Значение:', userInformation[key]);
    }
};

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};
console.log(user);

formUser(user);
