import * as React from 'react';
// import Button  from '@mui/material/Button';

// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import { Observer } from 'mobx-react';

// import { CheckLogin } from '../../data/Server';
// import dataStore from '../../data/DataStore';


// const Login=(Observer(()=> {
//   const [name,setName]=React.useState('');
//   const [password,setPassword]=React.useState(0);

//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//        Login
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           component: 'form',
//           onSubmit: (event) => {
//             event.preventDefault();
//             CheckLogin("admin","123456");
//             handleClose();
//             // dataStore.setIsLogin(true);

//           },
//         }}
//       >
//         <DialogTitle>Login</DialogTitle>
//         <DialogContent>
//           <Input type='text'placeholder='name*'onChange={(event)=>setName(event.target.value)}></Input>
//           <br/>
//           <Input type='password'placeholder='password*'onChange={(event)=>setPassword(event.target.value)}></Input>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button type="submit">send</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }))
// export default Login

import { observer } from "mobx-react"
import { CheckLogin } from '../../data/Server';
import Dialog from '@mui/material/Dialog';
import { DialogContent, DialogTitle, Input ,Button } from '@mui/material';

const Login = (observer(() => {
  const [name,setName]=React.useState('');
  const [password,setPassword]=React.useState(0);
    //const name and password from inputs

    return (
        <>
        <Dialog  open={true}>      
        <DialogTitle> Login</DialogTitle>
        <DialogContent><Input type='text'placeholder='name*'onChange={(event)=>setName(event.target.value)}></Input>
        <br/>
           <Input type='password'placeholder='password*'onChange={(event)=>setPassword(event.target.value)}></Input>
            <Button onClick={() => CheckLogin(name, password)}>to login</Button></DialogContent>
        </Dialog>
        </>
    )
}))

export default Login

