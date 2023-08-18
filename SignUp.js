import React, {useState} from 'react';


const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const {name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSub = (event) => {
        event.preventDefault();
        //sending data to some place idfk
        console.log(formData);
    };


    return (
        <div>
            <h2>
                Sign Up Fat Cow!
            </h2>
            <form onSubmit = {handleSub}>
                <div>
                    <label>UserName: </label>
                    <input 
                    type = "text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <button type="submit">Get to MOOing</button>
            </form>
        </div>
    );
};
export default SignUp;