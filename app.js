body { 
    height: 100%; 
    overflow: auto; 
    background-color: #141414;
    font-family: 'Kumbh Sans', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
  } 
 
.navbar{ 
    background: #131313; 
    height: 80px; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    font-size: 1.2rem; 
    position: sticky; 
    top: 0; 
    z-index: 999; 
} 

.navbar__container { 
    display: flex; 
    justify-content: space-between; 
    height: 80px; 
    z-index: 1; 
    width: 100%; 
    max-width: 1300px; 
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px; 
    padding-left: 0 50px; 
} 

#navbar__logo { 
    background-color: #2a85b0; 
    background-image: linear-gradient(to top, #26d0a6 0%, #2a85b0 100%); 
    background-size: 100%; 
    -webkit-background-clip: text; 
            background-clip: text;
    -moz-background-clip: text;  
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent; 
    display: flex; 
    align-items: center; 
    cursor: pointer; 
    text-decoration: none; 
    font-size: 2rem; 
} 

.fa-gem { 
    margin-right: 0.5rem; 
} 

.navbar__menu { 
    display: flex; 
    align-items: center; 
    list-style: none; 
    text-align: center; 
} 

.navbar__item { 
    height: 80px 
} 

.navbar__links { 
    color: #2a85b0; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    text-decoration: none; 
    padding: 0 1rem; 
    height: 100%; 
} 

.navbar__btn { 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    padding: 0 1rem; 
    width: 100%; 
} 

.button { 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    text-decoration: none; 
    padding: 10px 20px; 
    height: 100%; 
    width: 100%; 
    border: none; 
    outline: none; 
    border-radius: 4px; 
    background: #2a85b0; 
    color: #fff;  
} 

.button:hover { 
    background: #26d0a6; 
    transition: all 0.3s ease; 
} 

.navbar__links:hover { 
    color: #26d0a6; 
    transition: all 0.3s ease; 
} 
/*idk*/

.main__content h1 {
    font-size: 4rem;
    background-color: #2a85b0;
    background-image: linear-gradient(to top, #2a85b0 0% , #26d9a6 100%);
    background-size: 100%;
    -webkit-background-clip: text;
            background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color:transparent;
}

.main__content h2 {
    font-size: 4rem;
    background-color: #2a85b0;
    background-image: linear-gradient(to top, #b721ff 0% , #ff8177 100%);
    background-size: 100%;
    -webkit-background-clip: text;
            background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color:transparent;
}

.main__btn {
    font-size: 1rem;
    background-image: linear-gradient(to top, #26d9a6 0%, #2a85b0 100%);
    padding: 14px 32px;
    border: none;
    border-radius: 4px;
    color: #fff;
    margin-top: 2rem;
    cursor: pointer;
    position: relative;
    transition: all 0.35s;
    outline: none;
}

.main__btn a {
    position: relative;
    z-index: 2;
    color: #fff;
    text-decoration: none;
}

.main__btn:after {
    position:  absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #26d9a6;
    transition: all 0.35s;
    border-radius: 4px;
}

.main__btn:hover {
    color: #fff;
}

.main__btn:hover:after {
    width: 100%;
}

/*Mobile Navbar*/

@media screen and (max-width: 960px) { 
    .navbar__container { 
        display: flex; 
        justify-content: space-between; 
        height: 80px; 
        z-index: 1; 
        width: 100%; 
        max-width: 1300px; 
        padding: 0%; 
    } 

    .navbar__menu { 
        display: grid; 
        grid-template-columns: auto; 
        margin: 0; 
        width: 100%; 
        position: absolute; 
        top: -1000px; 
        opacity: 0; 
        transition: all 0.5s ease; 
        height: 50vh; 
        z-index: -1; 
        background: #131313; 
    } 

    .navbar__menu.active { 
        background: #141414; 
        top: 100%; 
        opacity: 1; 
        transition: all 0.5s ease; 
        z-index: 99; 
        height: 50vh; 
        font-size: 1.6rem; 
    } 

    #navbar__logo { 
        padding-left: 25px; 
    } 

    .navbar__toggle .bar { 
        width: 25px; 
        height: 3px; 
        margin: 5px auto; 
        transition: all 0.3 ease-in-out; 
        background: #fff; 
    } 

    .navbar__item { 
        width: 100%; 
    } 

    .navbar__links { 
        text-align: center; 
        padding: 2rem; 
        width: 100%; 
        display: table; 
    } 

    #mobile-menu { 
        position: absolute; 
        top: 20%; 
        right: 5%; 
        transform: translate(5%, 20%); 
    } 

    .navbar__btn { 
        padding-bottom: 2rem; 
    } 

    .button { 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        width: 80%; 
        height: 80px; 
        margin: 0; 
    } 

    .navbar__toggle .bar { 
        display: block; 
        cursor: pointer; 
    } 

    #mobile-menu.is-active .bar:nth-child(2) { 
        opacity: 0; 
    } 

    #mobile-menu.is-active .bar:nth-child(1) { 
        transform: translateY(8px) rotate(45deg); 
    } 

    #mobile-menu.is-active .bar:nth-child(3) { 
        transform: translateY(-8px) rotate(-45deg); 
    }
}
