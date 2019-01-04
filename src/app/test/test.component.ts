import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})

export class TestComponent implements OnInit {

  constructor() { 
     this.loadScripts();
  }

  ngOnInit() {
  }
  

  loadScripts() {
    const dynamicScripts= [
      'http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js',
     '../../../assets/js/jquery.easing.1.3.js',
     '../../../assets/js/jquery.mobile.customized.min.js',
     '../../../assets/js/camera.js',
     '../../../assets/js/bootstrap.js',
     '../../../assets/js/superfish.js',
     '../../../assets/js/jquery.prettyPhoto.js',
     '../../../assets/js/jquery.jcarousel.js',
     '../../../assets/js/jquery.tweet.js',
     '../../../assets/js/myscript.js',
     '../../../assets/js/corousalcode.js'
    ];
    for (let i = 0; i < 11; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

}
declare var $:any;
declare var jQuery:any;
declare var open: any;
