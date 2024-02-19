import React, { useState } from 'react';
import { useNavigate, Redirect } from 'react-router-dom';
import { uploadImage } from '../../services/firebaseService'
import axios from 'axios';
const UserLogin = () => {
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        },
        form: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            border: "1px solid black",
            padding: "2rem",
            borderRadius: "10px",
        },
        input: {
            width: "100%",
            padding: "0.5rem",
            margin: "0.5rem",
        },
        button: {
            width: "100%",
            padding: "0.5rem",
            margin: "0.5rem",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "10px",
        },
        headings: {
            margin: "1rem",
        },
        buttons: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
        },
    }
    //form values
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const navigator = useNavigate();

    const [isLoggingIn, setIsLoggingIn] = useState(true);
    const [loading, setLoading] = useState(false);
    const checkLoggedIn = () => {
        return !!localStorage.getItem("bidding-site-user");
    }

    if (checkLoggedIn()) {
        navigator("/");
    }

    const login = () => {
        console.log(formValues);
        setLoading(true);
        axios.post('https://bidding-site.onrender.com/api/user/login', formValues)
            .then((response) => {
                alert("Logged in successfully!");
                //delete password from user object
                response.data.password = "";
                localStorage.setItem("bidding-site-user", JSON.stringify(response.data));
                setTimeout(() => {
                    navigator("/");
                    window.location.reload();
                }, 1000); // Delay navigator to ensure localStorage is set before redirection
            })
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    alert("Error1: " + error.response.data.message);
                } else if (error.request) {
                    // The request was made but no response was received
                    alert("Error2: No response from server.");
                } else {
                    // Something happened in setting up the request that triggered an Error
                    alert("Error3: " + error.message);
                }
            });
    };
    

    return (
        <div style={styles.container}>
            {isLoggingIn ? (
                <form style={styles.form}>
                    <h1 style={styles.headings}>Login</h1>
                    <input
                        style={styles.input}
                        type="email"
                        placeholder="Email"
                        value={formValues.email}
                        onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                    />
                    <input
                        style={styles.input}
                        type="password"
                        placeholder="Password"
                        value={formValues.password}
                        onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
                    />
                    <div style={styles.buttons}>
                        {/* <button 
                            style={styles.button}
                            onClick={() =>{ 
                                login()
                                setIsLoggingIn(true)
                            }}
                            disabled={formValues.email === "" || formValues.password === "" || isLoggingIn === false}
                        >
                            Login
                        </button> */}
                        <input
                            style={{
                                ...styles.button,
                                ...(loading && { backgroundColor: "red" }),
                                
                            }}
                            type="submit"
                            value="Login"
                            onClick={(e) => {
                                e.preventDefault();
                                login();
                            }}
                            disabled={formValues.email === "" || formValues.password === ""}
                        />
                        <button style={styles.button} onClick={() => setIsLoggingIn(false)}>Signup</button>
                    </div>
                </form>
            ) : (
                <UserSignup />
            )}
        </div>
    );
};

const UserSignup = () => {
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        },
        form: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            border: "1px solid black",
            padding: "2rem",
            borderRadius: "10px",
        },
        input: {
            width: "100%",
            padding: "0.5rem",
            margin: "0.5rem",
            borderRadius: "10px",
            border: "1px solid red",
        },
        button: {
            width: "100%",
            padding: "0.5rem",
            margin: "0.5rem",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "10px",
        },
        headings: {
            margin: "1rem",
        },
        buttons: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            transition: "all 0.3s ease-in-out",
        },
        //button hover
        buttonHover: {
            cursor: "pointer",
            backgroundColor: "white",
            color: "black",
        },
        image: {
            width: "10rem",
            height: "10rem",
            objectFit: "cover",
            borderRadius: "50%",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            //align to left
            alignSelf: "flex-start",
            padding: "0.25rem",
        },
    };

    const navigator = useNavigate();
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        number: "",
        image: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [fieldsValid, setFieldsValid] = useState({
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
        number: false,
        image: false,
    });

    const validateInput = (fieldName, value) => {
        switch (fieldName) {
            case 'name':
                return value.length > 3;
            case 'email':
                return value.includes("@") && value.includes(".");
            case 'password':
                return value.length >= 8;
            case 'confirmPassword':
                return value === formValues.password;
            case 'number':
                return value.length === 11;
            default:
                return true;
        }
    };

    const handleChange = (fieldName, value) => {
        setFormValues({ ...formValues, [fieldName]: value });
        setFieldsValid({ ...fieldsValid, [fieldName]: validateInput(fieldName, value) });
    };

    const signup = () => {
        const user = {
            name: formValues.name,
            email: formValues.email,
            password: formValues.password,
            number: formValues.number,
            image: formValues.image,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            isBanned: false,
        };
        axios.post('https://bidding-site.onrender.com/api/users', user)
            .then((response) => {
                alert("Registered successfully!");
            })
            .catch((error) => {
                alert("Error: " + error);
            });
    };

    return (
        <form style={styles.form}>
            <h1 style={styles.headings}>Signup</h1>
            <input
                style={{ ...styles.input, ...(fieldsValid.name && { border: "1px solid green" }) }}
                type="text"
                placeholder="Name"
                value={formValues.name}
                onChange={(e) => handleChange('name', e.target.value)}
            />
            <input
                style={{ ...styles.input, ...(fieldsValid.email && { border: "1px solid green" }) }}
                type="email"
                placeholder="Email"
                value={formValues.email}
                onChange={(e) => handleChange('email', e.target.value)}
            />
            <input
                style={{ ...styles.input, ...(fieldsValid.password && { border: "1px solid green" }) }}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formValues.password}
                onChange={(e) => handleChange('password', e.target.value)}
            />
            <input
                style={{ ...styles.input, ...(fieldsValid.confirmPassword && { border: "1px solid green" }) }}
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={formValues.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
            />
            <div
                style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "100%" }}
            >
                <label>Show Password</label>
                <input
                    style={{
                        margin: "0.25rem 0 0 0.5rem"
                    }}
                    type="checkbox"
                    onClick={() => setShowPassword(!showPassword)}
                />
            </div>
            <input
                style={{ ...styles.input, ...(fieldsValid.number && { border: "1px solid green" }) }}
                type="number"
                placeholder="Phone Number"
                value={formValues.number}
                onChange={(e) => handleChange('number', e.target.value)}
            />
            <input
                style={{ ...styles.input, ...(fieldsValid.image && { border: "1px solid green" }) }}
                type="file"
                placeholder="Profile Picture"
                onChange={(e) => {
                    uploadImage(e.target.files[0])
                        .then((url) => {
                            setFormValues({ ...formValues, image: url });
                            setFieldsValid({ ...fieldsValid, image: true });
                        })
                        .catch((error) => {
                            alert("Error: " + error);
                        });
                }}
            />
            {
                formValues.image &&
                <img src={formValues.image} alt="Profile" style={styles.image} />
            }



            <div style={styles.buttons}>
                <input
                    style={{
                        ...styles.button,
                        ...(Object.values(fieldsValid).includes(false) && { backgroundColor: "red" }),
                        ...(!Object.values(fieldsValid).includes(false) && { backgroundColor: "green" }),
                    }}
                    type="submit"
                    value="Signup"
                    onClick={(e) => {
                        e.preventDefault();
                        signup();
                    }}
                    disabled={Object.values(fieldsValid).includes(false)}
                />
                <button style={styles.button} onClick={() => navigator("/login")}>Login</button>
            </div>
        </form>
    );
};

export default UserLogin;