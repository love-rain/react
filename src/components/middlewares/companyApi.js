import {ADD_COMPANY, DELETE_COMPANY, DETAIL_COMPANY, EDIT_COMPANY, LOAD_COMPANY} from "../company/action";
import axios from 'axios'

const companyApi = store => next => action => {
    if (action.type === LOAD_COMPANY) {
        return axios.get('/companies').then(res => next({
            type: LOAD_COMPANY,
            companies: res.data
        }))
    }
    else if (action.type === DETAIL_COMPANY) {
        return axios.get('/company/'.concat(action.id)).then(res => next({
            type: DETAIL_COMPANY,
            company: res.data,
            key : action.key
        }))
    }
    else if (action.type === ADD_COMPANY) {
        return axios.post('/company', {
            name: action.name,
            phoneManager: action.phoneManager,
            emailManager: action.emailManager,
            nameManager: action.nameManager,
            address: action.address
        }).then(res => next({
                type: ADD_COMPANY,
                company: res.data
            })
        )

    }

    else  if (action.type === EDIT_COMPANY) {
        let id = action.id;
        return axios.put('/company/'.concat(id), {
            name: action.name,
            phoneManager: action.phoneManager,
            emailManager: action.emailManager,
            nameManager: action.nameManager,
            address: action.address
        }).then(res => next({
            type : EDIT_COMPANY,
            company : res.data,
            key_edit : action.key_edit
        }))
    }

    else if (action.type === DELETE_COMPANY) {
        let id = action.id;
        return axios.delete('/company/'.concat(id)).then(() => next({
            type : DELETE_COMPANY,
            key_delete : action.key_delete
        }))
    }

    else return next(action)
};

export default companyApi;