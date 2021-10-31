// import React from 'react';
// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import useAuth from '../../../Contex/useAuth';

// const SideNav = () => {
//     const { user } = useAuth();
//     const [sidenav, setSidenav] = useState(true);

//     //toggling the side nav
//     const handlenav = () => {
//         setSidenav(!sidenav);
//     }

//     // auto hide 
//     window.addEventListener('resize', () => {
//         if (window.innerWidth < 994) {
//             setSidenav(false)
//         } else {
//             setSidenav(true)
//         }
//     })
//     const menu = [
//         { id: 1, text: 'My Booking', to: "/mybooking" },
//         { id: 2, text: 'Manage Booking', to: "/manageall" },
//         { id: 3, text: 'Add Packege', to: "/addpackege" },
//     ]

//     return (
//         <div>
//             {sidenav && (
//                 <>
//                     <nav className="d-flex position-fixed flex-column sidenav bg-secondary vh-100 px-4">
//                         <div className="d-flex flex-column align-items-center flex-wrap mt-5 pt-5">
//                             <div className="mt-4">
//                                 <img
//                                     src={user?.photoURL}
//                                     className="mx-auto  rounded-circle"
//                                     alt={user?.displayName}
//                                 />
//                             </div>
//                             <div className="pt-2">
//                                 <span className=" fs-5 text-white">{user?.displayName}</span>
//                             </div>
//                         </div>
//                         <div className="mt-5 mb-4">
//                             <ul className="me-4">
//                                 {menu.map(item => (
//                                     <li className="d-flex align-items-center" key={item.id}>
//                                         <NavLink activeStyle={{
//                                             fontWeight: "bold",
//                                             color: "#001c40"
//                                         }} exact to={item.to} className="p-3 nav-link"  >
//                                             <div className="d-flex align-items-center">
//                                                 <span className="me-2 text-white">{item.text}</span>
//                                             </div>
//                                         </NavLink>
//                                     </li>

//                                 ))}

//                             </ul>
//                         </div>
//                     </nav>
//                 </>
//             )}

//             {/* //menu icons  */}
//             <div className="position-absolute  sidenav-icon" onClick={handlenav}>
//                 <i className="bi bi-arrow-right-circle fs-1 fw-bolder text-dark"></i>
//             </div>
//         </div>
//     );
// };

// export default SideNav;