import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode';

export let MediaContext = createContext([]);
export function MediaContextProvider(props) {
    const [userData, setUserData] = useState(null);

    const [links, setLinks] = useState([]);
    const [alert, setAlert] = useState(false);
    const [input, setInput] = useState('');
    const [loader, setLoader] = useState(false);
    async function getShortLink(input) {
        let { data } = await axios.get(`https://api.shrtco.de/v2/shorten?url=${input}`);
        let link = {
            original: data.result.original_link,
            short: data.result.short_link
        }
        setLinks([...links, link]);
        if (userData) {
            localStorage.setItem(userData.email, JSON.stringify([...links, link]));
        }
    }

    function deleteLink(index) {
        let newLinks = [...links];
        newLinks.splice(index, 1);
        setLinks(newLinks);
        if (userData) {
            localStorage.setItem(userData.email, JSON.stringify(newLinks));
        }
    }

    function handleInput(e) {
        let url = e.target.value;
        let apiUrl = url.slice(url.indexOf('.') + 1);
        setInput(apiUrl);
    }

    function handleForm(e) {
        e.preventDefault();
        setLoader(true);
        if (validation()) {
            getShortLink(input);
            setLoader(false);
            setInput('');
            document.getElementById('shortnerInput').value = '';
        }
        else {
            setLoader(false);
        }
    }

    function validation() {
        let regex = /(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
        if (regex.test(input) && input != '') {
            setAlert(false);
            return true
        }
        else {
            setAlert(true);
            return false;
        }
    }

    // Copy Button
    function copyUrl(index) {
        let copyText = links[index].short;
        navigator.clipboard.writeText(copyText);
        let tooltip = document.querySelectorAll(".my-tooltip");
        tooltip[index].style.opacity = 1;
        setTimeout(() => {
            tooltip[index].style.opacity = 0;
        }, 500)
    }
    //____________________________________________________________
    // Login
    let navigate = useNavigate();
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    function getUser(e) {
        let myUser = { ...user };
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
    }
    // Register Form
    async function submitRegister(e) {
        e.preventDefault();
        setLinks([]);
        setIsLoading(true);

        let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signin`, user)
        if (data.message == 'success') {
            localStorage.setItem('userToken', data.token);  // user Token
            getUserData();                                  // user Token
            setIsLoading(false);
            navigate('/');
        }
        else {
            setError(data.message);
            setIsLoading(false);
        }
    }
    //____________________________________________________________
    // keep loged in if reload
    useEffect(() => {
        if (localStorage.getItem('userToken')) { getUserData() }
    }, []);

    // user Token
    function getUserData() {
        let decodedToken = jwtDecode(localStorage.getItem('userToken'));
        setUserData(decodedToken);
        if (localStorage.getItem(decodedToken.email)) {
            let userLinks = JSON.parse(localStorage.getItem(decodedToken.email));
            setLinks(userLinks);
        } else {
            setLinks([]);
        }
    }

    // Log out
    function logOut() {
        localStorage.removeItem('userToken');
        setUserData(null);
        navigate('/');
        setLinks([]);
    }

    return <MediaContext.Provider value={{ userData, alert, loader, handleForm, handleInput, deleteLink, copyUrl, links, getUser, submitRegister, error, isLoading, logOut }}>
        {props.children}
    </MediaContext.Provider>
}
