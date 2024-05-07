import { Component, OnInit } from '@angular/core';
import { DemoControllerService } from '../../services/services';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.scss'
})
export class HelloWorldComponent implements OnInit {
  
  mensagem: string = ''; 
  
  
  
  constructor(
    private demoService: DemoControllerService
  ){}

  ngOnInit(): void {
    this.getMessage();
  }
  getMessage():void {
    this.demoService.helloWorld().subscribe(
      (res) => {
        // Armazenando a mensagem da resposta na variável mensagem
        this.mensagem = res.message as string;
      },
      (error) => {
        // Lidando com erros, se houver
        console.error('Erro:', error);
      }
    );
  }

  

}
