import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  imports: [CommonModule, HttpClientModule],
})
export class ListComponent implements OnInit {
  type: string = '';
  items: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type') ?? '';
    this.fetchItems();
  }

  fetchItems() {
    this.http.get(`http://localhost:8080/api/${this.type}`).subscribe((data: any) => {
      this.items = data;
    });
  }

  viewItem(itemId: number) {
    alert(`Ver detalles del ID: ${itemId}`);
  }

  updateItem(itemId: number) {
    alert(`Actualizar el ID: ${itemId}`);
  }

  deleteItem(itemId: number) {
    alert(`Eliminar el ID: ${itemId}`);
  }
}
