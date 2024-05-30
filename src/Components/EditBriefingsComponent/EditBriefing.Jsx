import './EditBriefing.css';

const EditBriefing = () => {
    return (
        <div className="EditBriefingContainer">
                <form className='EditBriefingForm'>
                    <div className='EditFormName'>
                        <input type="text" name="nome" placeholder="Nome" />
                    </div>
                    <div className='EditFormContent'>
                        <input type="text" name="descricao" placeholder="Descrição" />
                    </div>
                    <div className='EditFormState'>
                        <input type="text" name="estado" placeholder="Estado" />
                    </div>
                    <div>
                        <button type="submit">Salvar</button>
                    </div>
                </form>
            </div>
    );
}

export default EditBriefing;
