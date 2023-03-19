import { Card } from '../../components/Card'
import { useProdutos } from '../../hooks/useProdutos'
import './Produtos.css'

const prato1 = {
    imagem: "http://localhost:8081/assets/salada-jacare.png",
    nome: "Salada de Jacaré",
    descricao: "Mix de folhas coloridas, tomate cereja,croutôns, palmito e lascas de jacaré salteadas, regadas ao molho balsâmico, oliva e mel.",
    valor: 49,
    tempoPreparo: "10 min",
  }

export const Produtos = () => {
    const {error, isLoading, produtos} = useProdutos();
    console.log(produtos)

    return (
        <section className='secao'>
            <h2 className='secao-titulo'>Produtos</h2>
            <hr/>
            <div className='lista'>
                <Card imagem={prato1.imagem} nome={prato1.nome} descricao={prato1.descricao} valor={prato1.valor} tempoPreparo={prato1.tempoPreparo}/>
            </div>
        </section>
    )
}