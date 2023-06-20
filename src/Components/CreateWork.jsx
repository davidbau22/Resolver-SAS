import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useParams} from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { postCreateJob } from '../Redux/actions';


function checkErrors(post){
    let errors = {};
    // if(post.id<= 0 || !post.id){
    //     errors.id = 'Please provide an id for this employee'
    // }
    if(!post.clientName){
        errors.clientName = 'Please choose a client name'
    }

    if(!post.issueDate){
        errors.issueDate = 'Please provide an issued date'
    }

    if(!post.workType){
        errors.workType = 'Please provide the work type'
    }

    if(!post.orderNumber){
        errors.orderNumber = 'Please provide an order number'
    }

    if(!post.resource){
        errors.resource = 'Please select a resource for this employee'
    }

    return errors;
}

export default function CreateWork ()  {
    const dispatch = useDispatch();
    const currentSubsidiary = useSelector( state => state.currentSubsidiary)
    const subsidiaryInfo = useSelector( state => state.infoSubsidiaries)
    const {id} = useParams();
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();


    const [post, setPost] = useState({
        id: id,
        clientName: '',
        issueDate: '', 
        workType: '',
        orderNumber:'',
        resource:''
    })

    function handleSubmit(e){
        e.preventDefault();
        if(Object.values(errors).length>0) {
            console.log(Object.values(errors));
            console.log(post);
            return alert('Please fill in the entire form');
        }
        else if(!post.clientName || !post.resource) return alert('Please fill in the entire form :/');
        else{
            dispatch(postCreateJob(post))
            alert('Task sucessfully created')
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

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
          <div className="card p-4 overflow-hidden" style={{ borderRadius: '20px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
            <h1 className="text-center p-2 mb-0">Crear trabajo</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-2">
                <label htmlFor="client_options">Cliente</label>
                <input
                  list="client_opt"
                  name="clientName"
                  id="client_options"
                  className={`form-control ${errors.clientName ? 'is-invalid' : ''}`}
                  value={post.clientName}
                  onChange={handleInputChange}
                />
                <datalist id="client_opt">
                  {currentSubsidiary.clients && currentSubsidiary.clients.map(client => (
                    <option key={client.id}>{client.name}</option>
                  ))}
                </datalist>
                {errors.clientName && (
                  <div className="invalid-feedback">
                    {errors.clientName}
                  </div>
                )}
              </div>
              <div className="mb-2">
                <label>Fecha</label>
                <input
                  type="text"
                  className={`form-control ${errors.issueDate ? 'is-invalid' : ''}`}
                  onChange={handleInputChange}
                  value={post.issueDate}
                  name="issueDate"
                  placeholder="Por favor escriba la fecha de la asignación"
                />
                {errors.issueDate && (
                  <div className="invalid-feedback">
                    {errors.issueDate}
                  </div>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="work_options">Tipo de trabajo</label>
                <input
                  list="work_opt"
                  name="workType"
                  id="work_options"
                  className={`form-control ${errors.workType ? 'is-invalid' : ''}`}
                  value={post.workType}
                  onChange={handleInputChange}
                />
                <datalist id="work_opt">
                  <option>Trabajo A</option>
                  <option>Trabajo B</option>
                </datalist>
                {errors.workType && (
                  <div className="invalid-feedback">
                    {errors.workType}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label>Orden de trabajo</label>
                <input
                  type="text"
                  className={`form-control ${errors.orderNumber ? 'is-invalid' : ''}`}
                  onChange={handleInputChange}
                  value={post.orderNumber}
                  name="orderNumber"
                  placeholder="Por favor escriba la orden de trabajo de la asignación"
                />
                {errors.orderNumber && (
                  <div className="invalid-feedback">
                    {errors.orderNumber}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="resource_options">Asignar tipo de recurso</label>
                <input
                  list="resource_opt"
                  name="resource"
                  id="resource_options"
                  className={`form-control ${errors.resource ? 'is-invalid' : ''}`}
                  value={post.resource}
                  onChange={handleInputChange}
                />
                <datalist id="resource_opt">
                  <option>Recurso A</option>
                  <option>Recurso B</option>
                </datalist>
                {errors.resource && (
                  <div className="invalid-feedback">
                    {errors.resource}
                  </div>
                )}
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Crear trabajo</button>
              </div>
            </form>
            <div className="d-flex justify-content-center">
              <Link to="/adminhome" className="mt-3">
                <button className="btn btn-secondary">Cancelar</button>
              </Link>
            </div>
          </div>
        </div>
      );
}
