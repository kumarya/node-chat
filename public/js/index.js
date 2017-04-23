                var socket = io()
                socket.on('connect', function(){
                    console.log('connected to server')
                    socket.emit('createEmail', {
                        to:'pora@gmail.com',
                        text:"pora rey!"
                    })
                    
                    socket.emit('newMessage', {
                        from:'xy',
                        message:'hir rey'
                    })
                })
                
                socket.on('disconnect', function(){
                    console.log("Disconnected from server")
                })
                
                socket.on('newEmail', function(email){
                    console.log('New Email', email)
                })
                socket.on('newMessage', function(newMessage) {
                    console.log('newMessage', newMessage)
                    
                })