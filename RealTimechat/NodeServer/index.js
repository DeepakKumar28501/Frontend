const io=require('socket.io')(8000); // choose any port ensure that are free port
// it is a server that attached to http server
console.log("Hello");

// io is listen incoming events 
io.on('connection', socket=>{// it is instance that listhen multiple socket connections
    socket.on('new-user-joined',name=>{//it is handle a particular connection 
        
        console.log("new user joined",name)
        user[socket.id]=name;//ity provide particuler id
        socket.broadcast.emit('user-joined', name) //it emit a user that want to joined and inform and connect with rest users
    });
    //it send received message to other users
    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message,name:user[socket.id]})
    });
})