import './styles.css'

export function Card(props) {
    return(
        <div className='card'>
            <strong>{props.plano}</strong>
            <p>{props.valor}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <hr />
            <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
            </ul>

            <button>ASSINAR</button>
        </div>
    )
}