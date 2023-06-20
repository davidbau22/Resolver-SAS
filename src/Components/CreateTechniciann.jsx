import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postTechnician } from '../Redux/actions';


function checkErrors(post){
    let errors = {};
    if(post.id<= 0 || !post.id){
        errors.id = 'Please provide an id for this employee'
    }
    if(!post.name){
        errors.name = 'Please provide a name for this employee'
    }

    if(!post.email){
        errors.email = 'Please provide an email for thhis new employee'
    }
    if(!post.subsidiary){
        errors.subsidiary = 'Please provide a subsidiary for thhis new employee'
    }

    return errors;
}


export default function CreateTechnician(){

    const dispatch = useDispatch();
    const currentSelectedSubsidiary = useSelector( state => state.currentSubsidiary)
    const subsidiaryInfo = useSelector( state => state.infoSubsidiaries)
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();


    const [post, setPost] = useState({
        id: '',
        name: '',
        email: '', 
        subsidiary: '',
    })

    function handleSubmit(e){
        e.preventDefault();
        if(Object.values(errors).length>0) {
            return alert('Please fill in the entire form');
        }
        else if(!post.name || !post.subsidiary.length>0) return alert('Please fill in the entire form :/');
        else{
            dispatch(postTechnician(post))
            alert('Technician sucessfully created')
            navigate('/adminhome')
        }
    }

    function handleInputChange(e){
        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
        setErrors(checkErrors({
            ...post,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubsidiary(e){
        if(!post.subsidiary.includes(e.target.value)){
            setPost({
                ...post,
                subsidiary:e.target.value
            })
        };
        setErrors(checkErrors({
            ...post, 
            subsidiary:e.target.value
        }));
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
          <div className="card p-4">
            <h1 className="text-center p-2 mb-4">Crear Técnico</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="id">ID</label>
                <input type="text" className="form-control" id="id" onChange={(e) => handleInputChange(e)} value={post.id} name="id" />
                {errors.id && (<p>{errors.id}</p>)}
              </div>
              <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" onChange={(e) => handleInputChange(e)} value={post.name} name="name" />
                {errors.name && (<p>{errors.name}</p>)}
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email" onChange={(e) => handleInputChange(e)} value={post.email} name="email" />
                {errors.email && (<p>{errors.email}</p>)}
              </div>
              <div className="mb-3">
                <label htmlFor="subsidiary">Sucursal</label>
                <select className="form-control" id="subsidiary" onChange={(e) => handleSubsidiary(e)} defaultValue="default">
                  <option value="default" disabled>Choose the corresponding subsidiary</option>
                  {subsidiaryInfo && subsidiaryInfo.map((d) => (
                    <option key={d.id} value={d.subsidiaryType}>{`Sucursal ${d.subsidiaryType}`}</option>
                  ))}
                </select>
                {errors.subsidiary && (<p>{errors.subsidiary}</p>)}
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Confirmar</button>
              </div>
            </form>
            <div className="d-flex justify-content-center">
                <Link to="/adminhome" className="mt-3">
                <button className="btn btn-secondary ">Cancelar</button>
                </Link>
            </div>
          </div>
        </div>
      );


}