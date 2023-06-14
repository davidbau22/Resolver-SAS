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

    async function handleSubsidiarySelection(subTypeId){   
        setSelectedSubsidiary(subTypeId);
       await dispatch(getSubsidiaryById(subTypeId)); 
        // const subsidiaryData = currentSubsidiary.find(
        //     (subsidiary) => subsidiary.id === subTypeId
        // );
        // dispatch(setCurrentWorkers(subsidiaryData.workers));
        const workers = currentSubsidiary[0]?.workers || [];
       await dispatch(setCurrentWorkers(workers));

    }

    return (
    <div>
        <header>{admin.role}</header>
        <h1>{`Bienvenido de nuevo,${admin.name} `}</h1>
        <div>
            {
                allSubsidiaries && allSubsidiaries.map((s) =>{
                    return (
                        <button key={s.id} onClick={() => handleSubsidiarySelection(s.id)}>
                            { `Sucursal ${s.subsidiaryType}`}
                        </button>
                    )
                })
            }
        </div>
        {selectedSubsidiary && (
        <>
          {currentSubsidiary.map((r) => (
            <Subsidiary
              key={r.id}
              subsidiaryType={r.subsidiaryType}
              workers={r.workers}
            />
          ))}
        </>
      )}
    </div>
  );
}
