import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css'],
})
export class Contacto {

  tituloModal = '';
  mensajeModal = '';
  usuariosRegistrados: string[] = [];

  // Bloquea números mientras escribe
  soloLetras(event: any) {
    const valor = event.target.value;
    event.target.value = valor.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
  }

  procesarFormulario(form: NgForm) {

    const nombreIngresado = form.value.nombre?.trim();

    if (form.invalid) {
      this.tituloModal = 'Error';
      this.mensajeModal = 'Completa correctamente todos los campos.';
    } 
    else if (this.usuariosRegistrados.includes(nombreIngresado)) {
      this.tituloModal = 'Error';
      this.mensajeModal = 'Este nombre ya fue registrado.';
    } 
    else {
      this.usuariosRegistrados.push(nombreIngresado);
      this.tituloModal = 'Éxito';
      this.mensajeModal = 'Formulario enviado correctamente.';
      form.resetForm();
    }

    const modal = document.getElementById('modalResultado');
    if (modal) {
      new bootstrap.Modal(modal).show();
    }
  }
}
