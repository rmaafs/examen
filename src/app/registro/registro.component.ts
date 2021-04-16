import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  data = {
    nombre: '',
    apellidos: '',
    correo: '',
    password: '',
    password2: '',
    politicas: false,
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    //Función que manda un popup de mensaje de error.
    function error(msg: string) {
      Swal.fire('Ooops!', msg, 'error');
    }

    //Función que valida si el correo está escrito correctamente
    function validateEmail(email: string) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    if (this.data.nombre == '') {
      error('El nombre no puede estar vacío');
    } else if (this.data.apellidos == '') {
      error('Los apellidos no pueden estar vacíos');
    } else if (this.data.correo == '') {
      error('El correo no puede estar vacío');
    } else if (this.data.password == '') {
      error('La contraseña no puede estar vacía');
    } else if (this.data.password2 == '') {
      error('Confirma la contraseña');
    } else if (this.data.password2 != this.data.password) {
      error('Las contraseñas no coinciden');
    } else if (!this.data.politicas) {
      error('Acepta las políticas');
    } else if (!validateEmail(this.data.correo)) {
      error('El correo no es válido');
    } else {
    }
  }
}
