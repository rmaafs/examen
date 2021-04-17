import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
})
export class ResultadosComponent implements OnInit {
  resultados: any = {};
  usuario: any = {};
  date = new Date();

  constructor() {}

  ngOnInit(): void {
    this.resultados = JSON.parse(localStorage.getItem('resultados') || '{}');
    this.usuario = JSON.parse(localStorage.getItem('data') || '{}');
  }
}
