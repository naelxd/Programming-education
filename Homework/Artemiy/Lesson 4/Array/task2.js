let styles = ['Джаз', 'Блюз'];
console.log(String(styles));
styles.push('Рок-н-ролл');
console.log(String(styles));
styles[Math.floor(styles.length / 2)] = 'Классика';
console.log(String(styles));
let firstWord = styles.shift();
console.log(String(styles));
styles.unshift('Рэп', 'Регги');
console.log(String(styles));
