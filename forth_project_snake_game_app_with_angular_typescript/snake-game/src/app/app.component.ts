// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   imports: [CommonModule],
// })
// export class AppComponent {
//   board: any[] = [];
//   snake: { x: number; y: number }[] = [];
//   direction = 'RIGHT';
//   gameInterval: any;
//   isGameOver = false;

//   constructor() {
//     this.initializeBoard();
//     this.initializeSnake();
//     setTimeout(() => this.startGame(), 1000); 
//   }

//   // Board initialize karna (20x20 cells)
//   initializeBoard() {
//     this.board = Array.from({ length: 20 }, (_, row) =>
//       Array.from({ length: 20 }, (_, col) => ({ x: col, y: row }))
//     );
//   }


//   // Snake ki starting position reset
//   initializeSnake() {
//     this.snake = [{ x: 10, y: 10 }]; // Center mein snake start hoga
//     this.direction = 'RIGHT';
  
//   }

//   // Game start karna
//   startGame() {
//     window.addEventListener('keydown', (e) => this.changeDirection(e));
//     if (this.gameInterval) {
//       clearInterval(this.gameInterval);
//     }
//     this.gameInterval = setInterval(() => this.moveSnake(), 200);
//   }

//   // Snake ki direction change karna
//   changeDirection(event: KeyboardEvent) {
//     switch (event.key) {
//       case 'ArrowUp':
//         if (this.direction !== 'DOWN') this.direction = 'UP';
//         break;
//       case 'ArrowDown':
//         if (this.direction !== 'UP') this.direction = 'DOWN';
//         break;
//       case 'ArrowLeft':
//         if (this.direction !== 'RIGHT') this.direction = 'LEFT';
//         break;
//       case 'ArrowRight':
//         if (this.direction !== 'LEFT') this.direction = 'RIGHT';
//         break;
//     }
//   }

//   // Snake ko move karna
//   moveSnake() {
//     if (this.isGameOver) return;
//     const head = { ...this.snake[0] };

//     switch (this.direction) {
//       case 'UP':
//         head.y -= 1;
//         break;
//       case 'DOWN':
//         head.y += 1;
//         break;
//       case 'LEFT':
//         head.x -= 1;
//         break;
//       case 'RIGHT':
//         head.x += 1;
//         break;
//     }

//     // Boundary check (Game Over if Out of Bounds)
//     if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
//       this.endGame();
//       return;
//     }


//     // ✅ Self-collision check
//     if (this.snake.some((part) => part.x === head.x && part.y === head.y)) {
//       this.endGame();
//       return;
//     }

//     this.snake.unshift(head); // New Head Add
//     this.snake.pop(); // Tail Remove
//   }


//   // ✅ Game Over logic
//   endGame() {
//     this.isGameOver = true;
//     clearInterval(this.gameInterval);
//     alert('Game Over!');
//     this.restartGame();
//   }


//   // Game ko restart karna (alert ke baad reset)
//   restartGame() {
//     this.initializeSnake();
//     setTimeout(() => this.startGame(), 1000);
//   }


//   // Cell class return karna (Snake or Empty)
//   getCellClass(cell: { x: number; y: number }): string {
//     return this.snake.some((part) => part.x === cell.x && part.y === cell.y)
//       ? 'snake'
//       : '';
//   }
// }


// app.component.ts
import { Component, HostListener}from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // ✅ Correct placement
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  board: { x: number; y: number }[] = [];
  snake: { x: number; y: number }[] = [];
  food: { x: number; y: number } = { x: 10, y: 10 };
  direction: string = 'RIGHT';
  isGameRunning: boolean = false;
  initialFoodPositions: { x: number; y: number }[] = [
    { x: 10, y: 10 },
    { x: 8, y: 12 },
    { x: 12, y: 14 },
    { x: 10, y: 16 },
  ];

  opposite: Record<string, string> = {
    UP: 'DOWN',
    DOWN: 'UP',
    LEFT: 'RIGHT',
    RIGHT: 'LEFT',
  };

  constructor() {
    console.log('✅ Constructor Called');
    this.initializeBoard();
  }

  initializeBoard() {
    console.log('✅ initializeBoard Called');
    for (let x = 0; x < 20; x++) {
      for (let y = 0; y < 20; y++) {
        this.board.push({ x, y });
      }
    }
    this.snake = [{ x: 5, y: 5 }];
    this.placeInitialFood();
  }

  getCellClass(cell: any) {
    console.log('✅ getCellClass Called');
    if (cell === 'snake') return 'snake';
    if (cell === 'food') return 'food';
    return '';
  }
  


  // placeInitialFood() {
  //   console.log('✅ placeInitialFood Called');
  //   this.food = this.initialFoodPositions.shift() ?? this.generateFood();
  // }

  placeInitialFood() {
    console.log('✅ placeInitialFood Called');
    console.log('🍎 Initial Food Positions:', this.initialFoodPositions);
  
    const nextFood = this.initialFoodPositions.shift();
    console.log('🍏 Next Food Position:', nextFood);

    this.food = nextFood ?? this.generateFood();
    console.log('🍔 Final Food Position:', this.food);
  }


  startGame() {
    console.log('✅ startGame Called');
    if (!this.isGameRunning) {
      this.isGameRunning = true;
      this.moveSnake();
      console.log('✅ moveSnake Called');
    }
  }

  moveSnake(): void {
    if (!this.isGameRunning) return;

    const head = { ...this.snake[0] };
    console.log('✅ moveSnake enter');

    switch (this.direction) {
      case 'UP':
        head.y--;
        break;
      case 'DOWN':
        head.y++;
        break;
      case 'LEFT':
        head.x--;
        break;
      case 'RIGHT':
        head.x++;
        break;
      default:
        return;
    }

    // Collision check
    if (this.checkCollision(head)) {
      alert('Game Over');
      this.resetGame();
      return;
    }

    this.snake.unshift(head);

    // Check if food is eaten
    if (head.x === this.food.x && head.y === this.food.y) {
      this.placeInitialFood();
    } else {
      this.snake.pop();
    }

    setTimeout(() => this.moveSnake(), 300);
  }

  checkCollision(head: { x: number; y: number }): boolean {
    return (
      head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20 ||
      this.snake.some(segment => segment.x === head.x && segment.y === head.y)
    );
  }

  generateFood(): { x: number; y: number } {
    let newFood: { x: number; y: number };
    do {
      newFood = {
        x: Math.floor(Math.random() * 20),
        y: Math.floor(Math.random() * 20),
      };
    } while (this.snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }

  changeDirection(newDirection: string) {
    if (newDirection !== this.opposite[this.direction]) {
      this.direction = newDirection;
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent): void {
    console.log('Key Pressed:', event.key);

    switch (event.key) {
      case 'ArrowUp':
        if (this.direction !== 'DOWN') this.direction = 'UP';
        break;
      case 'ArrowDown':
        if (this.direction !== 'UP') this.direction = 'DOWN';
        break;
      case 'ArrowLeft':
        if (this.direction !== 'RIGHT') this.direction = 'LEFT';
        break;
      case 'ArrowRight':
        if (this.direction !== 'LEFT') this.direction = 'RIGHT';
        break;
    }
  }

  resetGame() {
    this.isGameRunning = false;
    this.snake = [{ x: 5, y: 5 }];
    this.placeInitialFood();
    this.direction = 'RIGHT';
  }
}
