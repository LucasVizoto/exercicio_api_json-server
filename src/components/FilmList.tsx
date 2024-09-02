import { useEffect, useState } from "react";
import { deleteFilme, getFilmes } from "../services/api";
import { Link } from "react-router-dom";

interface Filme {
    id: string;
    name: string;
    url_cartaz: string;
    nm_diretor: string;
    nota_critica: number;
    ano_lancamento: number;
}

function FilmeLIst(){
    const [filmes , setFilmes] = useState<Filme[]>([]);
    useEffect(()=>{
        loadFilmes();
    }, []);
    const loadFilmes = async () =>{
        const response = await getFilmes();
        setFilmes(response.data);
    };
    const handleDelete = async (id: string) =>{
        await deleteFilme(id);
        loadFilmes();
    };


    return(
        <div className="bg-slate-300 max-w[450px] flex flex-col gap-6 items-center justify-center">
            <h3 className="">Filme List</h3>
            
            <div className="bg-blue-300 rounded-md border-stone-950 hover:border-x-2 hover:border-y-2 font-semibold">
                <Link className="" to="/add">Add Filme</Link>
            </div>

            <ul >
                {filmes.map((filme)=>(
                    <li key= {filme.id}>
                        {filme.name} - ${filme.nota_critica} - <img className="w-[30%]" src={filme.url_cartaz} alt="Here you deserve to see the movie poster, so something went wrong... Sorry :( " /> 
                        <Link to={`/edit/${filme.id}`}>Edit</Link>

                        <button  className="" onClick={()=> handleDelete(filme.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilmeLIst;