import { Component, OnInit } from '@angular/core';
import { OwnerService } from './owner.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Tipicode } from './tipicode';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.sass']
})
export class ListPetsComponent implements OnInit {

  posts;
  postok;
  putok;
  deleteok;
  posty;

  genericForm: FormGroup;

  constructor(
    private ownerService: OwnerService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {

    this.genericForm = this.formBuilder.group({
      userId: ['', Validators.required],
      id: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', [Validators.required, Validators.minLength(6)]],

    })

    this.ownerService.getPosts().subscribe(data => {
      this.posts = data;
    },
    error => {
      console.log('error: ', error.message);
    }
    );
    
  }

  doPost(){
    this.ownerService.postPost({
      "userId": this.genericForm.get('userId').value,
      "title": this.genericForm.get('title').value,
      "body": this.genericForm.get('body').value
    }).subscribe(data => {
      this.postok = data;
      console.log(this.postok);
    },
    error => {
      console.log('error: ', error.message);
    }
    );
  }

  doPut(){
    if(this.genericForm.value as Tipicode)
    this.ownerService.putPost({
      "userId": this.genericForm.get('userId').value,
      "id": this.genericForm.get('id').value,
      "title": this.genericForm.get('title').value,
      "body": this.genericForm.get('body').value
    }).subscribe(data => {
      this.putok = data;
      console.log(this.putok);
    },
    error => {
      console.log('error: ', error.message);
    }
    );
  }

  doDelete(){
    this.ownerService.deletePost(this.genericForm.get('id').value).subscribe(data => {
      this.deleteok = data;
      console.log(this.deleteok);
    },
    error => {
      console.log('error: ', error.message);
    }
    );
  }

  fillForm(post){
    this.genericForm.get('userId').setValue(post.userId);
    this.genericForm.get('id').setValue(post.id);
    this.genericForm.get('title').setValue(post.title);
    this.genericForm.get('body').setValue(post.body);
    this.router.navigateByUrl('/user/' + post.id)
  }


}
