import { defineStore } from "pinia"
import axios from "axios"
import { useToast } from "vue-toastification";
const toast = useToast();
export const userStore = defineStore({
   id: 'user',
   state: () => ({
      authUser: null,
      isLoading: false,
      bigLoader: false,
      errors: null,
      UserValidationError: null,
      users: [],
      edit_id: '',
      name: '',
      email: '',
      password: '',
      phone: '',
      role: '',
      status: '',
      phone: '',
      address: '',
      perPage: 5,
      searchQuery: '',
      totalShowing:0,
      totalUser:0,
      currentPage: 1,
      viewUserModal:false,
      viewUserData :null,
   }),


   getters: {
      user: (state) => state.authUser,
   },



   actions: {

      async loginHandler(data) {
         try {
            this.isLoading = true;
            const response = await axios.post('http://127.0.0.1:8000/api/login', {
               email: data.email,
               password: data.password
            });

            if (response.data.status === 401) {
               toast.error(response.data.message);
            } else {
               this.authUser = response.data.user;
               localStorage.setItem('token', response.data.token);
               localStorage.setItem('user', JSON.stringify(response.data.user));
               this.router.push('/dashboard');
               toast.success(response.data.message);
            }

         } catch (e) {
            this.errors = e.response.data.errors
         } finally {
            this.isLoading = false
         }
      },

      async logout() {
         try {
            const token = localStorage.getItem('token');
            if (token) {
               const headers = {
                  Authorization: `Bearer ${token}`,
               };

               const response = await axios.post('http://127.0.0.1:8000/api/logout', null, { headers });
               if (response.data.status === 200) {
                  localStorage.removeItem('token');
                  localStorage.removeItem('user');
                  this.authUser = null;
                  this.router.push('/login');
                  toast.success(response.data.message);
               }
            }
         } catch (e) {
            console.log(e)
         }
      },



      async addUser() {
         try {

            if (this.edit_id !== '') {
               this.UserValidationError = null;
               this.isLoading = true;
               this.bigLoader = true;
               const response = await axios.post(`http://127.0.0.1:8000/api/updateuser/${this.edit_id}`, {
                  name: this.name,
                  email: this.email,
                  password: this.password,
                  phone: this.phone,
                  role: this.role,
                  status: this.status,
                  address: this.address

               });
               if (response.data.status === 200) {
                  toast.success(response.data.message);
                  this.getUsers();
                  this.resetAddUserForm();
                  this.edit_id = '';
               }
            } else {
               this.isLoading = true;
               this.bigLoader = true;
               const response = await axios.post('http://127.0.0.1:8000/api/adduser', {
                  name: this.name,
                  email: this.email,
                  password: this.password,
                  phone: this.phone,
                  role: this.role,
                  status: this.status,
                  address: this.address
               });
               if (response.data.status === 400) {
                  toast.error(response.data.message);
               }
               if (response.data.status === 200) {
                  toast.success(response.data.message);
                  this.getUsers();
                  this.resetAddUserForm();
               }
            }

         } catch (e) {
            this.UserValidationError = e.response.data.errors
         } finally {
            this.isLoading = false
            this.bigLoader = false
         }
      },



      async getUsers() {
         try {
            this.bigLoader = true;

            const response = await axios.get(`http://127.0.0.1:8000/api/users`,{params:{searchQuery:this.searchQuery,perPage:this.perPage,page:this.currentPage}});
            if (response.data.status === 200) {
               this.users = response.data.users.data
               this.totalShowing = response.data.users.data.length;
               this.totalUser = response.data.totalUser;
            }


         } catch (e) {
            console.log(e)
         } finally {
            this.bigLoader = false
         }
      },



      deleteUser(id) {
         try {
            this.bigLoader = true;
            Swal.fire({
               title: "Are you sure?",
               text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
               if (result.isConfirmed) {
                  const response = await axios.delete(`http://127.0.0.1:8000/api/deleteuser/${id}`);
                  if (response.data.status === 200) {
                     toast.success(response.data.message);
                     this.getUsers();
                  }
               } else {
                  Swal.fire({
                     title: "Cancelled",
                     text: "Your imaginary file is safe :)",
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


      async editUser(id) {
         try {
            this.edit_id = id;

            const data = this.users.find(user => user.id === this.edit_id);
            this.name = data.name;
            this.email = data.email;
            this.role = data.role;
            this.phone = data.phone;
            this.address = data.address;
            this.status = data.status;

         } catch (e) {
            console.log(e)
         }
      },


      showViewUserModal (id){
          this.viewUserModal = true;
          const data = this.users.find(user => user.id === id);
          this.viewUserData = data;
      },

      


      setCurrentPage(page){
          this.currentPage = page;
          this.getUsers();
      },











      resetAddUserForm() {
         this.name = '';
         this.email = '';
         this.password = '';
         this.phone = '';
         this.role = '';
         this.status = '';
         this.address = '';

      }




   }
})


