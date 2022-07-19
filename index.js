//const Users=[{email:"",user:"",password:""}];
//localStorage.setItem("UsersList",JSON.stringify(Users));

const {app, BrowserWindow}= require('electron');

app.on('ready', () =>{
    let win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
        nodeIntegration: true,
        contextIsolation: false}
    });

    win.loadFile('Proyecto-Integrador-master/src/html/index.html')
    win.on('closed',() =>{
        win=null;
        app.quit();
    })
})

