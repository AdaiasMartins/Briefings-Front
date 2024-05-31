import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditBriefingForm.css';

const EditBriefingForm = () => {

    const { id } = useParams();
    console.log('ID:', id);
    const [briefing, setBriefing] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/briefins/${id}`);
                const data = await response.json();
                setBriefing(data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div className="EditBriefingContainer">
            {briefing && (
                <form className='EditBriefingForm'>
                    <div className='EditFormName'>
                        <input type="text" name="nome" value={briefing.nome} />
                    </div>
                    <div className='EditFormContent'>
                        <input type="text" name="descricao" value={briefing.descricao} />
                    </div>
                    <div className='EditFormState'>
                        <input type="text" name="estado" value={briefing.estado} />
                    </div>
                    <div className='EditFormButton'>
                        <button type="submit">Salvar</button>
                    </div>
                </form>)}
        </div>
    );
}

export default EditBriefingForm;
