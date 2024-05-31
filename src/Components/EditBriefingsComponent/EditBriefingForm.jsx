import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditBriefingForm.css';

const EditBriefingForm = () => {
    const { id } = useParams();
    const [briefing, setBriefing] = useState({ nome: '', descricao: '', estado: '' });

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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBriefing(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/briefin/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(briefing)
            });
            const updatedBriefing = await response.json();
            if (!response.ok) {
                throw new Error(updatedBriefing.message || 'Failed to update briefing');
            }
            setBriefing(updatedBriefing);
        } catch (error) {
            console.error('Error updating briefing:', error);
        }
    };

    return (
        <div className="EditBriefingContainer">
            {briefing && (
                <form className='EditBriefingForm' onSubmit={handleSubmit}>
                    <div className='EditFormName'>
                        <input type="text" name="nome" value={briefing.nome}  onChange={handleChange} />
                    </div>
                    <div className='EditFormContent'>
                        <input type="text" name="descricao" value={briefing.descricao} onChange={handleChange} />
                    </div>
                    <div className='EditFormState'>
                        <input type="text" name="estado" value={briefing.estado} onChange={handleChange} />
                    </div>
                    <div className='EditFormButton'>
                        <button type="submit">Salvar</button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default EditBriefingForm;
