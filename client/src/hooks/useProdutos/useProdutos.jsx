import { useEffect, useState } from "react"
import { apiService } from "../../service/api";

export const useProdutos = () => {
    const [produtos, setProdutos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    const fetchData = async() => {
        setIsLoading(true);

        const {data, error} = await apiService.get('/produtos');

        const entradas = data?.filter((item)=> item.secao === 'Entradas');
        const sobremesas = data?.filter((item)=> item.secao === 'Sobremesas');
        const pratosPrincipais = data?.filter((item)=> item.secao === 'Principais');
        setProdutos({entradas, sobremesas,pratosPrincipais});
        
        setError(error);
        setIsLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[]);
    return {
        produtos,
        isLoading,
        error
    };
};