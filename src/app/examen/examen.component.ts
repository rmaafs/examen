import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css'],
})
export class ExamenComponent implements OnInit {
  data = {
    nombre: '',
    apellidos: '',
    correo: '',
    password: '',
    password2: '',
    politicas: false,
  };

  //Respuestas que el usuario contestó
  examen: Array<any> = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('data') || '{}');
  }

  onSubmit(value: any) {
    //Función que manda un popup de mensaje de error.
    function error(msg: string) {
      Swal.fire('Ooops!', msg, 'error');
    }

    //Función que revisa qué tipo de objeto es el que se le manda por parámetro
    function getType(p: any) {
      if (Array.isArray(p)) return 'array';
      else if (typeof p == 'string') return 'string';
      else if (p != null && typeof p == 'object') return 'object';
      else return 'other';
    }

    //Verificamos si respondió todas las preguntas
    let json: any = JSON.parse(JSON.stringify(value));
    this.examen = [];
    for (let type in json) {
      let item: any = {};
      item.key = type;
      item.value = json[type];
      this.examen.push(item);

      if (getType(item.value) == 'other') {
        error('Por favor, responde la pregunta ' + item.key);
        return;
      }
    }

    //Verificamos si cuantas contestó bien
    let bien: number = 0;
    for (let i = 0; i < this.examen.length; i++) {
      if (this.preguntas[i].correcta == this.examen[i].value) {
        bien++;
      }
    }
    //Sacamos su calificación
    let calif: any = (bien / this.preguntas.length) * 10;

    //Guardamos los resultados en memoria local
    let item: any = {};
    item.numPreguntas = this.preguntas.length;
    item.bien = bien;
    item.calif = calif;
    localStorage.setItem('resultados', JSON.stringify(item));
    //Redireccionamos para mostrar los resultados
    this.router.navigate(['resultados']);
  }

  preguntas = [
    {
      id: 1,
      pregunta: '¿Pregunta 1?',
      respuestas: [
        {
          id: 1,
          respuesta: 'Respuesta 1',
        },
        {
          id: 2,
          respuesta: 'Respuesta 2',
        },
        {
          id: 3,
          respuesta: 'Respuesta 3',
        },
        {
          id: 4,
          respuesta: 'Respuesta 4',
        },
      ],
      correcta: 1,
    },
    {
      id: 2,
      pregunta: '¿Pregunta 2?',
      respuestas: [
        {
          id: 1,
          respuesta: 'Respuesta 1',
        },
        {
          id: 2,
          respuesta: 'Respuesta 2',
        },
        {
          id: 3,
          respuesta: 'Respuesta 3',
        },
        {
          id: 4,
          respuesta: 'Respuesta 4',
        },
      ],
      correcta: 1,
    },
    {
      id: 3,
      pregunta: '¿Pregunta 3?',
      respuestas: [
        {
          id: 1,
          respuesta: 'Respuesta 1',
        },
        {
          id: 2,
          respuesta: 'Respuesta 2',
        },
        {
          id: 3,
          respuesta: 'Respuesta 3',
        },
        {
          id: 4,
          respuesta: 'Respuesta 4',
        },
      ],
      correcta: 1,
    },
    {
      id: 4,
      pregunta: '¿Pregunta 4?',
      respuestas: [
        {
          id: 1,
          respuesta: 'Respuesta 1',
        },
        {
          id: 2,
          respuesta: 'Respuesta 2',
        },
        {
          id: 3,
          respuesta: 'Respuesta 3',
        },
        {
          id: 4,
          respuesta: 'Respuesta 4',
        },
      ],
      correcta: 1,
    },
    {
      id: 5,
      pregunta: '¿Pregunta 5?',
      respuestas: [
        {
          id: 1,
          respuesta: 'Respuesta 1',
        },
        {
          id: 2,
          respuesta: 'Respuesta 2',
        },
        {
          id: 3,
          respuesta: 'Respuesta 3',
        },
        {
          id: 4,
          respuesta: 'Respuesta 4',
        },
      ],
      correcta: 1,
    },
    {
      id: 6,
      pregunta: '¿Pregunta 6?',
      respuestas: [
        {
          id: 1,
          respuesta: 'Respuesta 1',
        },
        {
          id: 2,
          respuesta: 'Respuesta 2',
        },
        {
          id: 3,
          respuesta: 'Respuesta 3',
        },
        {
          id: 4,
          respuesta: 'Respuesta 4',
        },
      ],
      correcta: 1,
    },
    {
      id: 7,
      pregunta: '¿Pregunta 7?',
      respuestas: [
        {
          id: 1,
          respuesta: 'Respuesta 1',
        },
        {
          id: 2,
          respuesta: 'Respuesta 2',
        },
        {
          id: 3,
          respuesta: 'Respuesta 3',
        },
        {
          id: 4,
          respuesta: 'Respuesta 4',
        },
      ],
      correcta: 1,
    },
    {
      id: 8,
      pregunta: '¿Pregunta 8?',
      respuestas: [
        {
          id: 1,
          respuesta: 'Respuesta 1',
        },
        {
          id: 2,
          respuesta: 'Respuesta 2',
        },
        {
          id: 3,
          respuesta: 'Respuesta 3',
        },
        {
          id: 4,
          respuesta: 'Respuesta 4',
        },
      ],
      correcta: 1,
    },
    {
      id: 9,
      pregunta: '¿Pregunta 9?',
      respuestas: [
        {
          id: 1,
          respuesta: 'Respuesta 1',
        },
        {
          id: 2,
          respuesta: 'Respuesta 2',
        },
        {
          id: 3,
          respuesta: 'Respuesta 3',
        },
        {
          id: 4,
          respuesta: 'Respuesta 4',
        },
      ],
      correcta: 1,
    },
    {
      id: 10,
      pregunta: '¿Pregunta 10?',
      respuestas: [
        {
          id: 1,
          respuesta: 'Respuesta 1',
        },
        {
          id: 2,
          respuesta: 'Respuesta 2',
        },
        {
          id: 3,
          respuesta: 'Respuesta 3',
        },
        {
          id: 4,
          respuesta: 'Respuesta 4',
        },
      ],
      correcta: 1,
    },
  ];
}
