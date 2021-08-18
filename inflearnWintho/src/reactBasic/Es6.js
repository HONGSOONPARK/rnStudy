
export default function funCheck() {

    // global
  
    const hello = 'world';
  
    // let -> 블록에서 유효
  
    // const -> 상수, 변하지 않는 값
  
    // function test() {
  
    if (true) {
  
      // local
  
      const hello = 'korea';
  
      console.log(hello);
  
    }
  
    // test();
  
    console.log(hello);
  
    // const num = 5;
  
    // num = 6;
  
    // console.log(num);
  
    const drinks = {};
  
    drinks.caffe = 'latte';
  
    drinks.lemon = 'ade';
  
    console.log(drinks);
  
    const arr = [1, 2, 3, 4, 5];
  
    arr[0] = 100;
  
    arr[4] = 500;
  
    console.log(arr);
  
    // string literal
  
    const val01 = 'hello';
  
    const val02 = 'world';
  
    const val03 = val01 + ' ' + val02;
  
    console.log(val03);
  
    console.log(`${val01} ${val02} !!!`);
  
    // for ... of..
  
    let array = [10, 20, 30, 40];
  
    for (let val in array) {
  
      // console.log(val);
  
      console.log(array[val]);
  
    }
  
    for (let val of array) {
  
      console.log(val);
  
    }
  
    let obj = {
  
      a: 1,
  
      b: 2,
  
      c: 3
  
    }
  
    for (let val in obj) {
  
      console.log(val);
  
    }
  
    // Rest operator
  
    // ... 의 인자를 배열로 받는다.
  
    function printNums(num1, ...num2) {
  
      // console.log(arguments);
  
      console.log(num1, num2);
  
    }
  
    printNums(1, 2, 3, 4, 5);
  
    // Spread Operator
  
    function sum(x, y, z) {
  
      return x + y + z;
  
    }
  
    console.log(sum(1, 2, 3));
  
    let arrr = [10, 20, 30];
  
    console.log(sum.apply(null, arrr));
  
    console.log(sum(...arrr));
  
    function summ(a, b, c, d, e) {
  
      return a + b + c + d + e;
  
    }
  
    let ard = [20, 30];
  
    console.log(
  
      summ(10, ...ard, 40, 50)
  
    )
  
    let face = ['eyes', 'nose', 'mouth'];
  
    let head = ['hair', ...face, 'ears'];
  
    console.log(head);
  
    let ars = [1, 2, 3];
  
    let ars_copy = [...arr];
  
    console.log(ars_copy);
  
    let drinkss = {
  
      caffe: 'latte',
  
      coca: 'cola',
  
    }
  
    let newDrinks = {
  
      lemon: 'tea',
  
      orange: 'juice',
  
      ...drinkss
  
    }
  
    console.log(newDrinks);
  
    let arx = [1, 2, 3, 4, 5];
  
    let twice = arx.map(function (val) {
  
      return val * 2;
  
    });
  
    console.log(twice);
  
    let twiceArrow = arx.map(v => {
  
      if (v % 2 === 0) {
  
        console.log('even number');
  
      } else {
  
        console.log('odd number');
  
      }
  
    });
  
    console.log(twiceArrow);
  
    let twiceArrowMap = arx.map((v, i) => {
  
      console.log(`i: ${i}, v: ${v}`);
  
    });
  
    class Person {
  
      constructor(region_, gender_) {
  
        this.region = region_;
  
        this.gender = gender_;
  
      }
  
      greetings(val = 'an-nyeng') {
  
        console.log(val);
  
      }
  
    }
  
    let korean = new Person('Korea', 'male');
  
    console.log(korean);
  
    korean.gender = 'femail';
  
    console.log(korean);
  
    korean.greetings();
  
    class Amerian extends Person {
  
      constructor(region_, gender_, language_) {
  
        super(region_, gender_);
  
        this.language = language_;
  
      }
  
      greetings(val = 'hello') {
  
        console.log(val);
  
      }
  
    }
  
    let american = new Amerian('USA', 'femail', 'English');
  
    console.log(american);
  
    american.greetings();
  
}