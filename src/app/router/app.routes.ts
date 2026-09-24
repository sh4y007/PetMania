import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { Home } from "../page/home/home";
import { Login } from "./../page/login/login";
import { Logout } from "./../page/logout/logout";


export const routes: Routes = [

{
  path: "home",
  component: Home
},

// http://localhost:4200/home


{
  path: "login",
  component: Login,
},

  // http://localhost:4200/login

{
  path: "logout",
  component: Logout,
},

  //http://localhost:4200/logout


];



