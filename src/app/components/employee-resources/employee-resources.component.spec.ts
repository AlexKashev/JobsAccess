import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeResourcesComponent } from './employee-resources.component';

describe( 'EmployeeResourcesComponent', () => {
  let component: EmployeeResourcesComponent;
  let fixture: ComponentFixture<EmployeeResourcesComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [EmployeeResourcesComponent]
    } )
      .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( EmployeeResourcesComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
