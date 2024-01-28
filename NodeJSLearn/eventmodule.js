import EventEmitter from 'events';
class MyEmitter extends EventEmitter{}

const myEmitter=new MyEmitter();
myEmitter.on('WaterFull',()=>{
    console.log('please tirn of the moter');
    setTimeout(()=>{
        console.log('Please turn off the moter! its  a gentle remainder');
    },3000)
});
console.log('the script is still running');
myEmitter.emit('WaterFull');