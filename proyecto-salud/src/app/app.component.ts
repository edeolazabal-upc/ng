import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

export interface Paciente {
  id: number;
  nombre: string;
  edad: number | null;
  sexo: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    protected title = 'proy-s';
    pacientes: Paciente[] = [];
    nuevoPaciente: Paciente = { id: 0, nombre: '', edad: null, sexo: '' };

  agregarPaciente() {
      // Implementation for adding a patient
      if (this.nuevoPaciente.nombre && this.nuevoPaciente.edad !== null &&   this.nuevoPaciente.sexo) 
        {
        this.nuevoPaciente.id = this.pacientes.length + 1; // Simple ID generation
        this.pacientes.push({ ...this.nuevoPaciente });
        this.nuevoPaciente = { id: 0, nombre: '', edad: null, sexo: '' };  // Reset form
    } 
    else 
      {
      alert('Por favor, complete todos los campos.');
      }
}
eliminarPaciente(id: any) {
    this.pacientes = this.pacientes.filter(p => p.id !== id);
    }
}