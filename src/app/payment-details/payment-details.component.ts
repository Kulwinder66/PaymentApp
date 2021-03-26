import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service :PaymentDetailService, private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: any) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(Id:number) {
  
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deletePaymentDetail(Id)
        .subscribe(res => {
          this.service.refreshList();
          this.toastr.error("Deleted successfully",'Payment Detail Register');
        },
        err => { console.log(err); })
    }
  }

}
