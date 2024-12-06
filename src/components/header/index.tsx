import React from "react";
import Container from "../ui/container";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import logo from "@/assets/Frame 28.svg";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate, useSearchParams } from "react-router";
import { useAuthContext } from "@/context/auth/hooks/useAuthContext";
import { useSignOut } from "@/react-query/mutation/auth";
import { useQueryClient } from "@tanstack/react-query";
import qs from "qs";
import { Controller, useForm } from "react-hook-form";
import { QuestionListFilterValues } from "@/types";
import FancyMultiSelect from "@/pages/questions/components/multi-select";
const Header: React.FC = () => {
  const queryClient = useQueryClient();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuthContext();
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
        queryClient.setQueryData(["me"], null);
        navigate("/login");
      },
    });
  };
  const QuestionDefaultValues = {
    title: "",
    tags: [],
  };
  const [searchParams, setSearchParams] = useSearchParams();

  const parsedQueryParams = {
    ...QuestionDefaultValues,
    ...qs.parse(searchParams.toString()),
  };
  const { control, handleSubmit } = useForm<QuestionListFilterValues>({
    defaultValues: parsedQueryParams,
  });
  const onSubmit = (formValues: QuestionListFilterValues) => {
    setSearchParams(
      qs.stringify(formValues, {
        skipNulls: true,
        filter: (_, value) => {
          return value || undefined;
        },
        arrayFormat: "comma",
      }),
    );
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
              <Controller
                control={control}
                name="title"
                render={({ field: { onChange, value } }) => {
                  return (
                    <Input
                      className=" w-48 lg:w-[200px]"
                      value={value}
                      onChange={onChange}
                    />
                  );
                }}
              />
              <Controller
                control={control}
                name="tags"
                render={({ field: { value, onChange } }) => (
                  <FancyMultiSelect value={value} onChange={onChange} />
                )}
              />
              <FiSearch
                className="w-6 cursor-pointer"
                onClick={handleSubmit(onSubmit)}
              />
            </div>

            <div className="flex flex-col justify-center items-center lg:flex-row xl:ml-auto gap-6">
              <Link to="/home">
                <Button>Home</Button>
              </Link>
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
