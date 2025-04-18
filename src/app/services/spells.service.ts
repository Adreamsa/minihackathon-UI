// src/app/services/spell.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Spell } from '../models/spell';
import { environment } from '../../enviroments/enviroments';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpellService {
  private baseUrl = `${environment.apiUrl}/spells`;

  constructor(private http: HttpClient) {}

  list(): Observable<Spell[]> {
    return this.http.get<Spell[]>(this.baseUrl);
  }

  get(id: number): Observable<Spell> {
    return this.http.get<Spell>(`${this.baseUrl}/${id}`);
  }

  create(spell: Spell): Observable<Spell> {
    return this.http.post<Spell>(this.baseUrl, spell);
  }

  update(id: number, spell: Spell): Observable<Spell> {
    return this.http.put<Spell>(`${this.baseUrl}/${id}`, spell);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
