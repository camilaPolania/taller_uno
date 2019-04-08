import { observable, toJS, action } from 'mobx';

import api from '../utils/api';
import { getEnabledCategories } from 'trace_events';

// clases  modelo --- como se va armar

export type departmentsArray = { name: string, department_id: number }[];
export type categoriesArray = { name: string, category_id: number, department_id: number }[];
export type productsArray = { name: string,  discounted: string, thumbnail: string, id: number }[];

class Storage {

    // arreglos 
    @observable departments: departmentsArray | null = null;
    @observable loadingDepartments: boolean = false;

    @observable categories: categoriesArray | null | false = null;

    @observable products: productsArray | null | false = null;
    @observable loadingProducts: boolean = false;

    @observable currentDepartment: number | null = null;
    @observable currentCategory: number | null = null;

    @action getDerpartments() {
        if (this.loadingDepartments || this.departments) return;

        var departmentsLocal = localStorage.getItem('departments');

        if (departmentsLocal) {
            this.departments = JSON.parse(departmentsLocal);
            return;
        }

        this.loadingDepartments = true;
        var callback = (result: departmentsArray) => {
            localStorage.setItem('departments', JSON.stringify(toJS(result)));

            this.departments = result;
            this.loadingDepartments = false;
        }
        api.getDepartments(callback);
    }






}

const storage = new Storage();

export default storage;

