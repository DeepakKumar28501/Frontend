var express= require('express');
var cors=require('cors');
var app=express();


const socket = io('http://localhost:8000');

const form = document.getElementById('send-continer');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");
const uname = prompt("Enter your name to join...");
alert(uname);

socket.emit('new-user-joined',uname);






