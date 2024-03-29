import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Dragon } from '../../models/dragon';

import { DragonDetailsComponent } from './dragon-details.component';



describe('DragonDetailsComponent', () => {
  let component: DragonDetailsComponent;
  let fixture: ComponentFixture<DragonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers:[],
      declarations: [ DragonDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.dragon).toEqual(new Dragon());
  });

  it('constructor - need to have correct values', () => {
    expect(component['activatedRoute'] instanceof ActivatedRoute).toBeTruthy();
  });

  it('onInit - need to get correct value', () => {
    let _dataMock = {
      dragon: {
        id: '1',
        name: 'dragon of fire',
        type: 'fire',
        createdAt: '2021-01-01',
      }
    }

    //Forcing return
    component['activatedRoute'].data = of(_dataMock);

    component.ngOnInit();
    expect(component.dragon).toEqual(new Dragon(_dataMock.dragon));
  });
});
