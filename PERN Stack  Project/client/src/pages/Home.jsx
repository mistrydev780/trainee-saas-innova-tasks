import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const getUser = async () => {

        try {

            const { data } = await axios.get(

                "http://localhost:8000/api/auth/me",

                {

                    withCredentials: true

                }

            );

            setUser(data.user);

        }

        catch (error) {

            console.log(error);

            navigate("/signin");

        }

    };

    const logout = async () => {

        try {

            const { data } = await axios.post(

                "http://localhost:8000/api/auth/logout",

                {},

                {

                    withCredentials: true

                }

            );

            alert(data.message);

            navigate("/signin");

        }

        catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        getUser();

    }, []);

    return (

        <div>

            <h1>Home</h1>

            {

                user && (

                    <div>

                        <h2>User Details</h2>

                        <p>

                            <strong>Id :</strong> {user.id}

                        </p>

                        <p>

                            <strong>Name :</strong> {user.name}

                        </p>

                        <p>

                            <strong>Email :</strong> {user.email}

                        </p>

                    </div>

                )

            }

            <br />

            <button onClick={logout}>

                Logout

            </button>

        </div>

    );

};

export default Home;