import { defineStore } from "pinia"
import axios from "axios"
import { useToast } from "vue-toastification";
const toast = useToast();

export const CategorieStore = defineStore({
    'id': 'categorie',
    state: () => ({
        categories: [],
        categorie_name: '',
        status: '',
        isLoading: false,
        bigLoader: false,
        errors: null,
        edit_id: null,
        perPage: 5,
        searchQuery: '',
        totalShowing: 0,
        totalCategorie: 0,
        currentPage: 1,

    }),

    getters: {

    },

    actions: {
        async getCategories() {
            try {
                this.bigLoader = true;
                const response = await axios.get('http://127.0.0.1:8000/api/categories', { params: { searchQuery: this.searchQuery, perPage: this.perPage, page: this.currentPage } });
                if (response.data.status === 200) {
                    this.categories = response.data.categories.data;
                    this.bigLoader = false;
                    this.totalCategorie = response.data.totalCategorie;
                    this.totalShowing = response.data.categories.data.length;
                };
            } catch (e) {
                console.log(e);
            }
        },

        async addCategorie() {
            try {
                if (this.edit_id === null) {
                    this.isLoading = true;
                    this.bigLoader = true;
                    this.errors = null;
                    const response = await axios.post('http://127.0.0.1:8000/api/categories', {
                        categorie_name: this.categorie_name,
                        status: this.status
                    });
                    if (response.data.status === 400) {
                        this.errors = response.data.errors;
                    }
                    if (response.data.status === 200) {
                        this.getCategories();
                        this.resetAddCategorieForm();
                        this.isLoading = false;
                        this.bigLoader = false;
                        toast.success(response.data.message);
                    }
                }else{
                    // update logic here======//
                    this.errors = null;
                    this.isLoading = true;
                    this.bigLoader = true;
                    const response = await axios.put(`http://127.0.0.1:8000/api/categories/${this.edit_id}`, {
                       categorie_name: this.categorie_name,
                       status: this.status,
                    });
                    if (response.data.status === 200) {
                       toast.success(response.data.message);
                       this.getCategories();
                       this.resetAddCategorieForm();
                       this.edit_id = '';
                    }
                }
            } catch (e) {
                this.errors = e.response.data.errors
            } finally {
                this.isLoading = false
                this.bigLoader = false
            }
        },




        setCurrentPage(page) {
            this.currentPage = page;
            this.getCategories();
        },


        editCategory(id) {
            if (id) {
                this.edit_id = id;
                const data = this.categories.find(categorie => categorie.id === this.edit_id);
                this.categorie_name = data.categorie_name;
                this.status = data.status;
            }
        },





        deleteCategorie(id) {
            try {
                this.bigLoader = true;
                Swal.fire({
                    title: "Are you sure?",
                    text: "You Want to delete  this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        const response = await axios.delete(`http://127.0.0.1:8000/api/categories/${id}`);
                        if (response.data.status === 200) {
                            toast.success(response.data.message);
                            this.getCategories();
                        }
                    } else {
                        Swal.fire({
                            title: "Cancelled",
                            text: "Your Categorie  is safe :)",
                            icon: "error"
                        });
                    }
                });
            } catch (e) {
                console.log(e)
            } finally {
                this.bigLoader = false
            }
        },




        resetAddCategorieForm() {
            this.categorie_name = '';
            this.status = '';
        }
    }

});