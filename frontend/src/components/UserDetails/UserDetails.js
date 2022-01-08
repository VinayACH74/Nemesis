import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import toast, { Toaster } from "react-hot-toast";

const UserDetails = () => {
  const count = 0;
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();

  const user = async () => {
    try {
      const res = await axios.get("/adminTab/userdetails");
      setUserDetails(res.data);
    } catch (err) {
      console.log(err);
      navigate('/');
    }
  };

  const mainid = async (mainid) => {
    const deletedata = await axios.delete(`/adminTab/userdetails/${mainid}`);
    const message = JSON.stringify(deletedata.data);
    // console.log(message);
    // console.log(mainid);
    // console.log(id);
    if (message === '{"message":"User Deleted"}') {
      toast.success("User deleted successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const refreshPage = () => {
    window.location.reload();
  }

  useEffect(() => {
    user();
  },[count]);

  return (
    <>
      <Navbar />
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Sr No</th>
              <th scope="col">Username</th>
              <th scope="col">Mobileno</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
              <tbody>
          {userDetails?.map((element, id) => {
            return (
                <tr key={id}>
                  <th scope="row">{id + 1}</th>
                  <td>{element.username}</td>
                  <td>{element.mobileno}</td>
                  <td>{element.email}</td>
                  <td>{element.address}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm px-3"
                      onClick={() => {
                        mainid(element._id);
                        refreshPage();
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        fill="currentColor"
                        height="16"
                        className="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>
                    </button>
                  </td>
                </tr>
            );
          })}
              </tbody>
        </table>
      </div>
      <Toaster position="top-center" reverseOrder={false} />

    </>
  );
};

export default UserDetails;
