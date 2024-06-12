import React from "react";
import Header from "../layout/Header";
import "../sass/components/getalluser.scss";
import BorderColorIcon from '@mui/icons-material/BorderColor';

const GetAllUser: React.FC = () => {
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div
                className="card mb-3 small-card"
                style={{ borderRadius: ".5rem" }}
              >
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{ borderRadius: ".5rem" }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="img-fluid my-5 avatar"
                    />
                    <h6 className="card-title">Marie Horwitz</h6>
                    <p className="card-subtitle">Web Designer</p>
                    <i className="fas fa-edit mb-5 icon"></i>
                    <BorderColorIcon/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6 className="info-title">Information</h6>
                      <hr className="mt-0 mb-3" />
                      <div className="pt-1">
                        <div className="col-6 mb-2">
                          <h6 className="info-label">Email</h6>
                          <p className="info-text">info@example.com</p>
                        </div>
                        <div className="col-6 mb-2">
                          <h6 className="info-label">Phone</h6>
                          <p className="info-text">123 456 789</p>
                        </div>
                        <div className="col-6 mb-2">
                          <h6 className="info-label">Technology</h6>
                          <p className="info-text">React, Node</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetAllUser;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Header from "../layout/Header";
// import "../sass/components/getalluser.scss";

// interface User {
//   _id: string;
//   name: string;
//   email: string;
//   technology: string;
// }

// const GetAllUser: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [editUser, setEditUser] = useState<User | null>(null);
//   const [name, setName] = useState<string>("");
//   const [technology, setTechnology] = useState<string>("");

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8080/api/user/getalluser",
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//             },
//           }
//         );
//         setUsers(response.data);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleEdit = (user: User) => {
//     setEditUser(user);
//     setName(user.name);
//     setTechnology(user.technology);
//   };

//   const handleUpdate = async () => {
//     if (!editUser) return;

//     try {
//       await axios.post(
//         `http://localhost:8080/api/user/users/${editUser._id}`,
//         { name, technology },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//           },
//         }
//       );
//       setUsers((prevUsers) =>
//         prevUsers.map((user) =>
//           user._id === editUser._id ? { ...user, name, technology } : user
//         )
//       );
//       setEditUser(null);
//     } catch (error) {
//       console.error("Error updating user:", error);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
//         <div className="container py-5 h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             {users.map((user) => (
//               <div key={user._id} className="col col-lg-6 mb-4 mb-lg-0">
//                 <div
//                   className="card mb-3 small-card"
//                   style={{ borderRadius: ".5rem" }}
//                 >
//                   <div className="row g-0">
//                     <div
//                       className="col-md-4 gradient-custom text-center text-white"
//                       style={{ borderRadius: ".5rem" }}
//                     >
//                       <img
//                         src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
//                         alt="Avatar"
//                         className="img-fluid my-5 avatar"
//                       />
//                       <h6 className="card-title">{user.name}</h6>
//                       <p className="info-text">{user.technology}</p>
//                       <i
//                         className="far fa-edit mb-5 icon"
//                         onClick={() => handleEdit(user)}
//                       ></i>
//                     </div>
//                     <div className="col-md-8">
//                       <div className="card-body p-4">
//                         <h6 className="info-title">Information</h6>
//                         <hr className="mt-0 mb-3" />
//                         <div className="pt-1">
//                           <div className="col-6 mb-2">
//                             <h6 className="info-label">Email</h6>
//                             <p className="info-text">{user.email}</p>
//                           </div>
//                           <div className="col-6 mb-2">
//                             <h6 className="info-label">Technology</h6>
//                             <p className="card-subtitle">{user.technology}</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {editUser && (
//         <div className="modal">
//           <div className="modal-content">
//             <h4>Edit User</h4>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Name"
//             />
//             <input
//               type="text"
//               value={technology}
//               onChange={(e) => setTechnology(e.target.value)}
//               placeholder="Technology"
//             />
//             <button onClick={handleUpdate}>Update</button>
//             <button onClick={() => setEditUser(null)}>Cancel</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default GetAllUser;
