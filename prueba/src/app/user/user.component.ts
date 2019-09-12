import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { OwnerService } from '../list-pets/owner.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  posty;
  message;
  message2;

  constructor(private ownerService: OwnerService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id')

    this.ownerService.getPost(id).subscribe(data => {
      this.posty = data;
    },
    error => {
      console.log('error: ', error.message);
    }
    );
  }

  sendToChild(event){
    this.message = event;
  }

  sendToOtherChild(event){
    this.message2 = event;
  }

}
