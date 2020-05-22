import { Component, OnInit } from '@angular/core';
import * as babylon from 'babylonjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private _canvas: any;
  private _engine: babylon.Engine;

  constructor() { }

  ngOnInit(): void {
    this._canvas = document.getElementById("renderCanvas");
    this._engine = new babylon.Engine(this._canvas, true);

    let scene: babylon.Scene = this.createScene();

    this._engine.runRenderLoop(() => {
      scene.render();
    })
  }

  private createScene = (): babylon.Scene => {
    let scene: babylon.Scene = new babylon.Scene(this._engine);

    var camera: babylon.UniversalCamera = new babylon.UniversalCamera("Camera", new babylon.Vector3(-20, 20, -50), scene);
    //var camera = new babylon.ArcRotateCamera("Camera", -Math.PI / 2, 1.0, -50, babylon.Vector3.Zero(), scene);
    camera.setTarget(babylon.Vector3.Zero());
    camera.attachControl(this._canvas, true);

    let light1: babylon.HemisphericLight = new babylon.HemisphericLight("light1", new babylon.Vector3(1, 1, 0), scene);

    let cube: babylon.Mesh = babylon.MeshBuilder.CreateBox("box", { size: 5 }, scene);

    return scene;
  }

}
