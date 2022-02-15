import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: Title
  ) { }


  ngOnInit(): void {

    this.titleService.setTitle('HUMAN\'Sup: School Of Humanitarian Sciences');
    this.meta.addTag({
      name: 'Humansup',
      content: 'Humansup'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'The school intends to train the next generation of humanitarians in the Global South with a view to changing the operational landscape in humanitarian contexts.' 
          
      });

  }

}
