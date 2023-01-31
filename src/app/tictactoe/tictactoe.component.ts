import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css'],
})
export class TictactoeComponent implements OnInit {
  board: string[][] = [
    ['X', 'X', 'X'],
    ['X', 'X', 'X'],
    ['X', 'X', 'X'],
  ];
  currentPlayer: string = 'X';
  numberOfSquareSelected: number = 0;
  winner: string = '';
  winX: number = 0;
  winO: number = 0;
  prevWinner: string = 'X';

  constructor() {}

  ngOnInit(): void {
    this.resetBoard();
  }

  resetBoard(): void {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.numberOfSquareSelected = 0;
    this.currentPlayer = 'X';
    this.winner = '';
    this.winO = 0;
    this.winX = 0;
  }

  move(x: number, y: number): void {
    if (this.clickable(x, y) && this.winner == '') {
      this.numberOfSquareSelected++;
      this.board[x][y] = this.currentPlayer;
      this.checkForWin();
      this.increaseWinCount();
      this.changeCurrentPlayer();
    }
  }
  increaseWinCount() {
    if (this.winner == 'X') {
      this.winX++;
    } else if (this.winner == 'O') {
      this.winO++;
    }
  }

  checkForWin() {
    //row check
    for (let row = 0; row < 3; row++) {
      if (
        this.board[row][0] &&
        this.board[row][1] &&
        this.board[row][2] &&
        this.board[row][0] == this.board[row][1] &&
        this.board[row][1] == this.board[row][2]
      ) {
        this.winner = this.currentPlayer;
        return;
      }
    }
    //column check
    for (let col = 0; col < 3; col++) {
      if (
        this.board[0][col] &&
        this.board[1][col] &&
        this.board[2][col] &&
        this.board[0][col] == this.board[1][col] &&
        this.board[1][col] == this.board[2][col]
      ) {
        this.winner = this.currentPlayer;
        return;
      }
    }
    //diag check
    if (
      this.board[0][0] &&
      this.board[1][1] &&
      this.board[2][2] &&
      this.board[0][0] == this.board[1][1] &&
      this.board[2][2] == this.board[1][1]
    ) {
      this.winner = this.currentPlayer;
      return;
    }
    if (
      this.board[0][2] &&
      this.board[1][1] &&
      this.board[2][0] &&
      this.board[0][2] == this.board[1][1] &&
      this.board[1][1] == this.board[2][0]
    ) {
      this.winner = this.currentPlayer;
      return;
    }
  }

  changeCurrentPlayer() {
    if (this.currentPlayer == 'X' && this.winner == '') this.currentPlayer = 'O';
    else if (this.currentPlayer == 'O' && this.winner == '') this.currentPlayer = 'X';
  }

  clickable(x: number, y: number): boolean {
    if (this.board[x][y] == 'X' || this.board[x][y] == 'O') {
      return false;
    }
    return true;
  }

  getImage(x: number, y: number): string {
    if (this.board[x][y] == 'O') return './assets/circle.png';
    else if (this.board[x][y] == 'X') return './assets/cross.png';
    return '';
  }

  nextRound(): void {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.numberOfSquareSelected = 0;
    if (this.winner != '') {
      this.currentPlayer = this.winner;
      this.prevWinner = this.winner;
    } else if (this.winner == '') {
      this.currentPlayer = this.prevWinner;
    }
    this.winner = '';
  }

  getActiveStyle(player: string): string {
    if (this.currentPlayer == player && player == 'X')
      return ' border-b-4 border-b-rose-500 rounded-md';
    else if (this.currentPlayer == player && player == 'O') {
      return ' border-b-4 border-b-green-500 rounded-md';
    } else return '';
  }

  getTextStyle(x: number, y: number): string{
    if (this.board[x][y] == 'X')
      return ' text-rose-500';
    else if (this.board[x][y] == 'O') {
      return ' text-green-500';
    } else return '';
  }
}
