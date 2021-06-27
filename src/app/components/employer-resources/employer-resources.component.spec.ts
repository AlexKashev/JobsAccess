import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerResourcesComponent } from './employer-resources.component';

describe( 'EmployerResourcesComponent', () => {
  let component: EmployerResourcesComponent;
  let fixture: ComponentFixture<EmployerResourcesComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [EmployerResourcesComponent]
    } )
      .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( EmployerResourcesComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
