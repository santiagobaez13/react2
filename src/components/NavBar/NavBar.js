import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
    return (
        <nav>
            <h3>
                Libreria
            </h3>
            <div>
                <button>
                    Inicio
                

                </button>
                <button>
                    Novedades

                </button>
                <button>
                    Los mas vendidos

                </button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;

 