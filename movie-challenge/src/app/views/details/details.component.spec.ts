import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';


import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      providers: [ HttpClient, HttpHandler,
        {
          provide: ActivatedRoute,
          useValue: {
              paramMap: of({ id: 1232 }) // Provide a sample paramMap with an 'id'
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
