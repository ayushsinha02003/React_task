import React,{useState} from 'react';
//Form is rendering in every type in input
let componentRender = 0;

const UserInfoComponentForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const ChangeHandler = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        if (inputName === 'name') {
            setName(inputValue);
        }else if (inputName === 'email') {
            setEmail(inputValue);
        } else if (inputName === 'password') {
            setPassword(inputValue);
        } else if (inputName === 'confirmpassword') {
            setConfirmPassword(inputValue);
        }
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log('Form Submitted');
        let data = {
            name: name,
            email: email,
            password: password,
        }
        console.log(data);
        if(name === '' || email === '' || password === '' || confirmpassword === '') {
            alert('Please fill all the fields');
        }else if (password !== confirmpassword) {
            alert('Password and Confirm Password do not match');
            return;
        }
    }
    componentRender ++;
    return (
        <>
            <div className='userForm'>
                <h3>My component Render - {componentRender}</h3>
                <h2>User Info Details</h2>
                <form action="#" onSubmit={formSubmitHandler} className='userDetailform'>
                    <div className='formGroup'>
                        <label htmlFor='name'>Name</label>
                        <input type="text" id='name' name="name" value={name} onChange={ChangeHandler} placeholder='Enter your name'/>
                    </div>
                    <div className='formGroup'>
                        <label htmlFor='email'>Email</label>
                        <input type="email" id='email' name="email" value={email} onChange={ChangeHandler} placeholder='Enter your email'/>
                    </div>
                    <div className='formGroup'>
                        <label htmlFor='password'>Password</label>
                        <input type="text" id='password' name="password" value={password} onChange={ChangeHandler} placeholder='Enter your new Password'/>
                    </div>
                    <div className='formGroup'>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input type="text" id='confirmPassword' name="confirmpassword" value={confirmpassword} onChange={ChangeHandler} placeholder='Your Confirm Password'/>
                    </div>
                    <div className='formGroup'>
                        <input type="submit" value="save" />
                    </div>
                </form>
            </div>
        </>
    );
}


export default UserInfoComponentForm;