import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import './App.css'

// componentes
import { Card } from '../../componentes/Card'

export function App() {
  const [count, setCount] = useState(0)

 

  return (
    <div className="App">
      <header>
        <div>
          <h1>Conheça nossos planos</h1>
          <p>Conheça nossas soluções e escolha o plano ideal para o seu próximo projeto.</p>
        </div>
      </header>

      <section>
        <div id='container'>
          <div className='boxInfo'>
            {
              <Card
              plano = "Free"
              valor = "R$ 0,00"
              />
              
            }
             {
              <div id='basico'>
                <Card
                plano = "Básico"
                valor = "R$ 29,00"
                />
              </div>
              
            }
            {
              <Card
              plano = "Profissional"
              valor = "R$ 59,00"
              />
              
            }
          </div>
        </div>
      </section>

     
    </div>
  )
}


