module.exports = [
    {
      label:'Electron',
      submenu:[
        {label:'Item 1'},
        {label:'Item 2',submenu:[{label:"Sub Item 1"}]},
        {label:'Item 3'},
        {label:'Item 4'},
      ]
    },
    {
        role:'editMenu'
    },
    {
      label: 'Actions',
      submenu:[
        {
            label: 'DevTools',
            role: 'toggleDevTools'
        },
        {
            label: 'Action 2',
            enabled: false
        },
        {
            label: 'Greet',
            click: () => {console.log('Hello from Main Menu')},
            accelerator:'Shift+Alt+G'
        },
      ]
    }
  ]