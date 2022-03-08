import { DataSource } from '@angular/cdk/collections';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

export interface data {
  title: string;
  subtitle: string;
}

const cardData: data[] = [
  { title: 'Title 1', subtitle: 'subtitle 1' },
  { title: 'Title 2', subtitle: 'subtitle 2' },
  { title: 'Title 3', subtitle: 'subtitle 3' },
  { title: 'Title 4', subtitle: 'subtitle 4' },
  { title: 'Title 5', subtitle: 'subtitle 5' },
  { title: 'Title 6', subtitle: 'subtitle 6' },
  { title: 'Title 7', subtitle: 'subtitle 7' },
  { title: 'Title 8', subtitle: 'subtitle 8' },
  { title: 'Title 9', subtitle: 'subtitle 9' },
  { title: 'Title 10', subtitle: 'subtitle 10' },
  { title: 'Title 11', subtitle: 'subtitle 11' },
  { title: 'Title 12', subtitle: 'subtitle 12' },
  { title: 'Title 13', subtitle: 'subtitle 13' },
  { title: 'Title 14', subtitle: 'subtitle 14' },
  { title: 'Title 15', subtitle: 'subtitle 15' },
  { title: 'Title 16', subtitle: 'subtitle 16' },
  { title: 'Title 17', subtitle: 'subtitle 17' },
  { title: 'Title 18', subtitle: 'subtitle 18' },
  { title: 'Title 19', subtitle: 'subtitle 19' },
  { title: 'Title 20', subtitle: 'subtitle 20' },
  { title: 'Title 21', subtitle: 'subtitle 21' },
  { title: 'Title 22', subtitle: 'subtitle 22' },
  { title: 'Title 23', subtitle: 'subtitle 23' },
  { title: 'Title 24', subtitle: 'subtitle 24' },
  { title: 'Title 25', subtitle: 'subtitle 25' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  obs!: Observable<any>;
  dataSource: MatTableDataSource<data> = new MatTableDataSource(cardData);

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }
}
