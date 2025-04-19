import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Spell } from '../models/spell';
import { SpellService } from '../services/spells.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {
  spells: Spell[] = [];
  error: string | null = null;

  constructor(
    private spellService: SpellService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadSpells();
  }

  loadSpells(): void {
    this.spellService.list().subscribe({
      next: data => this.spells = data,
      error: err => this.error = err.message
    });
  }

  deleteSpell(id: number): void {
    if (!confirm('¿Seguro que deseas eliminar este hechizo?')) {
      return;
    }
    this.spellService.delete(id).subscribe({
      next: () => this.loadSpells(),
      error: err => this.error = err.message
    });
  }

  editSpell(id: number): void {
    this.router.navigate(['/spells', id, 'edit']);
  }

  newSpell(): void {
    this.router.navigate(['/spells', 'new']);
  }
}
