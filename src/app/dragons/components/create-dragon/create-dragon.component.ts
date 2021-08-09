import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { Dragon } from '../../models/dragon';
import { DragonService } from '../../services/dragon.service';

@Component({
  selector: 'app-create-dragon',
  templateUrl: './create-dragon.component.html',
  styleUrls: ['./create-dragon.component.scss']
})
export class CreateDragonComponent implements OnInit {

  isSubmitted: boolean = false;
  createDragonForm!: FormGroup;
  createDragonErrorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private spinnerService: SpinnerService,
    private dragonService: DragonService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createNewDragonForm(new Dragon({}));
  }

  createNewDragonForm(dragon: Dragon) {
    this.createDragonForm = this.formBuilder.group({
      name: [dragon.name, Validators.required],
      type: [dragon.name, Validators.required],
      createdAt: [dragon.createdAt],
    });
  }

  submitCreateDragon() {

    this.isSubmitted = true;

    if (this.createDragonForm.invalid) {
      return;
    }
    this.spinnerService.setLoadingStatus(true);

    //set createdAt in dragon in the form
    this.createDragonForm.controls.createdAt.setValue((new Date()).toISOString())

    this.dragonService.createDragon(this.createDragonForm.value)
      .pipe(
        finalize(() => {
          this.spinnerService.setLoadingStatus(false);
        })
      )
      .subscribe({
        next: event => {
          this.router.navigateByUrl('/dragons');
        },
        error: error => {
          console.log('error', error)
          this.createDragonErrorMessage = (error && error.message)? error.message : 'Ocorreu um erro ao tentar cadastrar o dragão';
        },
      });

  }

}
