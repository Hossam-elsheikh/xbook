"use client";
import Image from "next/image";
import React, { useState } from "react";
import HeroImage from "@/public/hero.png";
import Button from "@/components/objects/Button";
import Reader from "@/public/reader.png";
import Writer from "@/public/writer.png";
import Shop from "@/public/shop.png";
import Reading from "@/public/reading.jpg";
import Writing from "@/public/writing.jpg";
import Store from "@/public/bookstore.jpg";
import Logo from "@/public/colored.svg";
import Link from "next/link";
import Select from "react-select";
import { Country, City } from "country-state-city";
import Input from "@/components/forms/Input";
// import { accounts } from "@/lib/data";


const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "none", // Remove border
    boxShadow: "none", // Remove focus outline
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#000", // Customize arrow color
  }),
  menu: (provided) => ({
    ...provided,
    boxShadow: "none", // Remove menu shadow
  }),
};
const CountryCitySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const countryOptions = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  const cityOptions =
    selectedCountry &&
    City.getCitiesOfCountry(selectedCountry.value)?.map((city) => ({
      value: city.name,
      label: city.name,
    }));

  return (
    <div className="flex flex-col gap-4">
      <Select
        options={countryOptions}
        value={selectedCountry}
        onChange={(country) => {
          setSelectedCountry(country);
          setSelectedCity(null); 
        }}
        placeholder="Select Country"
        styles={customStyles}
      />

      <Select
        options={cityOptions}
        value={selectedCity}
        onChange={setSelectedCity}
        placeholder="Select City"
        isDisabled={!selectedCountry}
        styles={customStyles}

      />
    </div>
  );
};
const Register = () => {
  const [activeImage, setActiveImage] = useState(Reading);
  const [selectedAccount, setSelectedAccount] = useState("Reader");

  const accounts = [
    {
      name: "Reader",
      img: Reader,
      sideImage: Reading,
    },
    {
      name: "Writer",
      img: Writer,
      sideImage: Writing,
    },
    {
      name: "Store",
      img: Shop,
      sideImage: Store,
    },
  ];
  const AccCheckboxes = () => (
    <div className="flex items-center justify-center gap-3">
      {accounts.map((acc, i) => (
        <label
          key={i}
          htmlFor={acc.name}
          className="flex flex-col min-h-28 items-center"
          onClick={() => {
            setActiveImage(acc.sideImage);
            setSelectedAccount(acc.name);
          }}
        >
          <Input
            className="peer hidden"
            required={true}
            type="radio"
            id={acc.name}
            checked={selectedAccount === acc.name}
            name="acc"
          />
          <p className="text-center font-semibold cursor-pointer">{acc.name}</p>
          <Image
            src={acc.img}
            width={100}
            height={100}
            alt={acc.name}
            className={`border-2 p-2 transition-all duration-200 cursor-pointer rounded-xl border-gray peer-checked:border-blue-400 ${
              selectedAccount === acc.name ? "border-blue-400" : ""
            }`}
          />
        </label>
      ))}
    </div>
  );
  return (
    <div className="flex flex-col  bg-slate-100 text-main w-full items-center justify-center h-dvh">
      <div className="flex w-full md:min-h-[800px] rounded-2xl bg-white border  md:w-[70%] lg:w-[50%]  mx-auto ">
        <div className="p-10 flex flex-col gap-5 flex-grow w-full md:w-[50%]">
          <Image src={Logo} className="w-24 mb-10 " alt="XBook" />

          <h1 className="text-2xl font-semibold text-center text-main">
            Register as a
          </h1>
          <form className="flex flex-col w-full gap-4 ">
            <AccCheckboxes />
            {selectedAccount !== "Store" && (
              <>
                <Input type="text" name="fName" placeholder="First Name" />
                <Input type="text" name="lName" placeholder="Last Name" />
              </>
            )}
            {selectedAccount === "Store" && 
            <>
            <Input type="text" name="storeName" placeholder="Store Name" />
            <CountryCitySelector />
            <Input type="text" name="storeAddress" placeholder="Address" />
            
            </>
            
            }
            <Input type="email" name="email" placeholder="Email" />
            <Input type="password" name="pass" placeholder="Password" />
            <Input
              type="password"
              name="cPass"
              placeholder="Confirm Password"
            />
            <div className="flex justify-between items-center">
              <Button href="#" text="Create account" className="mx-auto" />
              <Link
                href="/login"
                className="text-center text-blue-400 cursor-pointer"
              >
                {" "}
                Login to your account
              </Link>
            </div>
          </form>
        </div>
        <div className=" hidden 2xl:flex flex-shrink justify-center">
          <Image
            key={activeImage.src}
            className="rounded-e-2xl duration-150 animate-fadeIn"
            width={500}
            src={activeImage}
            alt="side image"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
