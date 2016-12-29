import Row from './row';

Row.work();

class Tetris {
  static work() {
    console.log('work Tetris');
  }

  constructor() {
    this.DOMroot = document.createElement('div');
    //document.querySelector('body').appendChild(this.DOMroot);
    document.getElementById('app').appendChild(this.DOMroot);

    // TODO наполнить DOMroot блоками используя класс Row и Cell
    //  однако, возможно, бизнес логику наполнение самой ячейки (Row)
    //  можно вынести и в конструктор класса Row
  }
}

export default Tetris;
