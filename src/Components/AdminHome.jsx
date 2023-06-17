import React from 'react'

import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getSubsidiary, getSubsidiaryById,setCurrentWorkers } from '../Redux/actions';

import Subsidiary from './Subsidiary';


export default function AdminHome() {

    const dispatch = useDispatch();
    const allSubsidiaries = useSelector((state) => state.infoSubsidiaries);
    const admin = useSelector((state) => state.loginState);
    const [selectedSubsidiary, setSelectedSubsidiary] = useState('')
    const currentSubsidiary = useSelector((state) => state.currentSubsidiary); 

    useEffect(() => {
        dispatch(getSubsidiary());        
    },[])

    function handleSubsidiarySelection(subTypeId){ 
      console.log(subTypeId,'soy subTypeId----------');   
      setSelectedSubsidiary(subTypeId);
      dispatch(getSubsidiaryById(subTypeId)); 
      /* const workers = currentSubsidiary[0]?.workers || [];
      dispatch(setCurrentWorkers(workers)); */

    }

    return (
    <div>
        <header>{admin.role}</header>
        <h1>{`Bienvenido de nuevo,${admin.name} `}</h1>
        <div>
            {
                allSubsidiaries && allSubsidiaries.map((s) =>{
                    return (
                        <button key={s.id} onClick={() => handleSubsidiarySelection(s.subsidiaryType)}>
                            { `Sucursal ${s.subsidiaryType}`}
                        </button>
                    )
                })
            }
        </div>
        {selectedSubsidiary && (
        <>

            <Subsidiary
              key={currentSubsidiary.subsidiaryType}
              subsidiaryType={currentSubsidiary.subsidiaryType}
              workers={currentSubsidiary.technicians}
              clients={currentSubsidiary.clients}
            />
          
        </>
      )}
    </div>
  );
}
