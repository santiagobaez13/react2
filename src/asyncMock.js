const products = [
    {

        id: '1',
        name: 'Los 7 maridos de Evelyn Hugo',
        price: '5900',
        img: 'https://intothebooksheart.com/wp-content/uploads/2021/02/Los-siete-maridos-de-evelyn-hugo.jpg',
        stock: '25',
        description: 'Evelyn Hugo, el ícono de Hollywood que se ha recluido en su edad madura, decide al fin contar la verdad sobre su vida llena de glamour y de escándalos.'
    },
    {
        id: '2',
        name: 'Experimiento de amor en nueva york',
        price: '5300',
        img: 'https://vreditoras.com.ar//uploads/libros/097cf01ede1289308f0708f65ac6502eExperimento-de-amor-en-New-York-TAPA-WEB.jpg',
        stock: '10',
        description: 'Rosie está desesperada. Tiene sólo ocho semanas para escribir una novela romantica en medio de su bloqueo creativo. Y encima se le ha derrumbado el techo del baño delante de sus narices. Por suerte, puede huir al apartamento de Lina mientras ella esta de viaje. Pero lo que Rosie no sabe es que tambien se quedará allí Lucas, el primo de su mejor amiga y de quien esta virtualmente enamorada',
    },
    {
        id: '3',
        name: 'El silencio perfecto',
        price: '5800',
        img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681851483i/125261458.jpg',
        stock: '15',
        description: 'Leo tiene todo lo que necesita para ser infeliz: la universidad la está devorando en vida, mantener sus marcas de atletismo le genera problemas con su familia, no se habla con sus amigas y, como si no bastara, tiene que hacer el trabajo más importante del semestre con el peor compañero del universo.  Ashford es un enigma.',
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)

        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                products.find(prod => prod.id === productId

                )
            )
        }, 500
        )
    }
    )
}