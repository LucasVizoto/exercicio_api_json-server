import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createFilme, getFilmeById, updateFilme } from "../services/api";
import { toast } from "sonner";

interface Filme{
    name: string;
    url_cartaz: string;
    nm_diretor: string;
    nota_critica: number;
    ano_lancamento: number;
}

function Post_FormularioFilme(){
    // Implementar código para envio do formulário
    const {id} = useParams<{id:string}>();
    const navigate = useNavigate();
    const [filme, setFilme] = useState<Filme>({
        name: '',
        url_cartaz: '',
        nm_diretor: '',
        nota_critica: 0,
        ano_lancamento: 0,
    });
    useEffect(()=>{
        if(id){
            loadFilme();
        }
    },[id]);

    
    const loadFilme = async()=>{
        try{
            const response = await getFilmeById(id as string);
            setFilme(response.data);
        } catch(err){
                toast.error(`Something went wrong :(   ${err}`);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setFilme({
            ...filme,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            if(id){
                await updateFilme(id, filme);
            }else{
                await createFilme(filme);
            }
            navigate('/');
        } catch(err){
            toast.error(`Something went wrong when you try to save something :(   ${err}`);
        }
    };


    return(
        <form onSubmit={handleSubmit}>

            <div>
                <label>Name</label>
                <input
                type="text"
                name="name"
                value={filme.name}
                onChange={handleChange}
                />
            </div>
       
            <div>
                <label>Url da Imagem do Cartaz do Filme</label>
                <input
                type="text"
                name="url_cartaz"
                value={filme.url_cartaz}
                onChange={handleChange}
                />
            </div>

            <div>
                <label>Nome do Diretor</label>
                <input
                type="text"
                name="nm_diretor"
                value={filme.nm_diretor}
                onChange={handleChange}
                />
            </div>

            <div>
                <label>Nota obtida pelo Filme</label>
                <input
                type="number"
                name="nota_critica"
                value={filme.nota_critica}
                onChange={handleChange}
                />
            </div>

            <div>
                <label>Ano de Lançamento do Filme</label>
                <input
                type="number"
                name="ano_lancamento"
                value={filme.ano_lancamento}
                onChange={handleChange}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    )
}

export default Post_FormularioFilme;