import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { HotToastService} from '@ngneat/hot-toast';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  public tableData: Product[] = [];

  constructor(private service: ProductService, private toastr: HotToastService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initializeTable();
  }

  displayedColumns: String[] = ['id', 'name', 'description', 'price', 'stock', 'brand_id', 'category_id', 'edit', 'delete'];
  dataSource = new MatTableDataSource(this.tableData);

  initializeTable(): void {
    this.service.findAll().subscribe(brand => {
      this.tableData = brand;
      this.dataSource = new MatTableDataSource<Product>(this.tableData);
      this.dataSource.paginator = this.paginator;
    });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(id: number): void {
    this.service.delete(id).subscribe({
      next: response => {
        this.toastr.success("Cliente deletado com sucesso!");
        this.initializeTable();
      }
    });
  }
}
