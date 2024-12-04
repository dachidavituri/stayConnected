import React from "react";
import Container from "../ui/container";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import logo from "@/assets/Frame 28.svg";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router";
import { useAuthContext } from "@/context/auth/hooks/useAuthContext";
import { useSignOut } from "@/react-query/mutation/auth";
import { useQueryClient } from "@tanstack/react-query";
const Header: React.FC = () => {
  const queryClient = useQueryClient();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuthContext();
  console.log(user);

  const { mutate: handleSignOut } = useSignOut();
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const handleSignOutClick = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    handleSignOut(undefined, {
      onSuccess: () => {
        queryClient.setQueryData(['me'], null);
        navigate("/login");
      },
    });
  };
  return (
    <header>
      <Container>
        <div className="flex items-center py-6 justify-between">
          <div className="w-20 mr-14">
            <img src={logo} alt="Logo" />
          </div>
          <div
            className={`burger ${isMenuOpen ? "block" : "hidden"} absolute top-16 right-6 p-6  gap-4 flex flex-col  bg-white shadow-lg 
          xl:static xl:flex xl:shadow-none xl:flex-row xl:items-center xl:gap-6`}
          >
            <div className="flex items-center gap-6">
              <Input className=" w-48 lg:w-[400px]" />
              <FiSearch className="w-6" />
            </div>

            <div className="flex flex-col justify-center items-center lg:flex-row xl:ml-auto gap-6">
              <Link to="/add-question">
                <Button>Add Question</Button>
              </Link>
              <Button variant={"secondary"} onClick={handleSignOutClick}>
                Logout
              </Button>

              <Link to="/profile">
                <div className="bg-black text-white p-2 rounded-md">
                  {user?.username}
                </div>
              </Link>
            </div>
          </div>
          <div className="xl:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
