import { HttpClient } from '@angular/common/http';
import { Component,OnInit  } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {'class': 'root'}
})

 /**
  * Lifecycle Hooks
  * 
  * OnInit
  * OnDestroy
  * OnChanges
  * 
  *  */

export class AppComponent implements OnInit {
  columnDefs = [
    {field: 'make', sortable: true, filter: true},
    {field: 'model', sortable: true, filter: true},
    {field: 'price', sortable: true, filter: true},
  ]

  rowData!: Observable<any[]>;

  /**
   * Constructor
   * @param http communicate w/ backend services using HTTP
   * 
   * Declare providers inside the constructor for Angular to resolbe through Dependency Injection.
   * 
   * Dependency Injection: Technique whereby one object OR static method supplies the dependencies of another object. A dependency is an object that can be used (a service). Transferring the task of creating the object to someone else and directly using the dependency is called dependency injection.
   * 
   * When to use DI?
   * 
   * e.g. Let's say we have a car class that contains various objects such as wheels, engine, etc.
   * The car class is responsible for creating all the dependency objects. Now, what if we decide to ditch MRFWheels in the future and use Yokohama wheels?
   * 
   *  We will need to recreate the car object with a new Yokohama dependency. But when sing dependency injection, we can change the Wheels at runtime (because dependencies can be injected at runtime rather than at compile time).
   * 
   * You can think of DI as the middleman in the code that does all the work of creating the preferred wheels object and providing it to the Car class. It makes the Car class independent from creating the objects of Wheels, Battery, etc.
   */
  constructor(private http: HttpClient ) {}

  /**
   * OnInit 
   * 
   * lifecycle hook called after initialization of all data-bound properties.
   * Define an `ngOnInit()` method to handle any additional initialization tasks.
   * 
   * interface OnInit { 
   *   ngOnInit(): void 
   * }
   */
  ngOnInit(): void {
    this.rowData = this.http.get<any[]>('https://www.ag-grid.com/example-assets/small-row-data.json')
  }

}
