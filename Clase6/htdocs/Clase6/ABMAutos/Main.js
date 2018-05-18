"use strict";
/// <reference path="Auto.ts"/>
var auto1 = new Clases.Auto("AS123SA", "Toyota", 250000);
var jsonObj = auto1.ToJson();
console.log(JSON.stringify(jsonObj));
