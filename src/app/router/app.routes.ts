import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { Home } from "../page/home/home";
import { Login } from "./../page/login/login";

export const routes: Routes = [

{
  path: "",
  component: Home
},

{
  path: "login",
  component: Login,
},

  // http://localhost:4200/login

];
