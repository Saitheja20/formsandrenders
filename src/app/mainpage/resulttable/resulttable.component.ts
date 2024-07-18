import { Component } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-resulttable',
  standalone: true,
  imports: [],
  templateUrl: './resulttable.component.html',
  styleUrl: './resulttable.component.css'
})
export class ResulttableComponent {
  formData: any;
  constructor(private formDataService: FormDataService) {}

  ngOnInit() {
    this.formDataService.formData$.subscribe(data => {
      this.formData = data;
    });
  }
}
