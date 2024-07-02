"use client";
import TextInput from "@/components/FormInputs/TextInput";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import NavButtons from "../NavButtons";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStep,
  updateCheckoutFormData,
} from "@/redux/slices/checkoutSlice";
import { FanstyMuit } from "@/components/FanstyMuit";

export default function ShippingDetailsForm({ regions, districts, counties }) {
  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.checkout.currentStep);
  const existingFormData = useSelector(
    (store) => store.checkout.checkoutFormData
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...existingFormData,
    },
  });
  
  const initialShippingCost = existingFormData.shippingCost || "";
  const [shippingCost, setShippingCost] = useState(initialShippingCost);

  const [selectedRegion, setSelectedRegion] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [selectedCounty, setSelectedCounty] = useState([]);

  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [filteredCounties, setFilteredCounties] = useState([]);

  useEffect(() => {
    if (selectedRegion.length > 0) {
      const regionId = regions.find(region => region.title === selectedRegion[0].title).id;
      setFilteredDistricts(districts.filter(district => district.regionId === regionId));
    } else {
      setFilteredDistricts([]);
    }
    setSelectedDistrict([]);
    setSelectedCounty([]);
    setFilteredCounties([]);
  }, [selectedRegion]);

  useEffect(() => {
    if (selectedDistrict.length > 0) {
      const districtId = filteredDistricts.find(district => district.title === selectedDistrict[0].title).id;
      setFilteredCounties(counties.filter(county => county.districtId === districtId));
    } else {
      setFilteredCounties([]);
    }
    setSelectedCounty([]);
  }, [selectedDistrict]);

  async function processData(data) {
    data.shippingCost = shippingCost;
    data.region = selectedRegion[0]?.title || "";
    data.district = selectedDistrict[0]?.title || "";
    data.county = selectedCounty[0]?.title || "";

    dispatch(updateCheckoutFormData(data));
    dispatch(setCurrentStep(currentStep + 1));
  }

  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className="text-xl font-semibold mb-4 dark:text-green-400">
        Shipping Details
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Street Address"
          name="streetAddress"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Apt or Unit No"
          name="apartment"
          register={register}
          errors={errors}
          className="w-full"
        />
        {/* <TextInput
          label="City"
          name="city"
          register={register}
          errors={errors}
          className="w-full"
        /> */}
        {/* <TextInput
          label="State"
          name="state"
          register={register}
          errors={errors}
          className="w-full"
        /> */}
        <FanstyMuit
          products={regions}
          selectedProducts={selectedRegion}
          setSelectedProducts={setSelectedRegion}
          label="Select Your Region"
        />
        {
        filteredDistricts.length > 0 &&(
          <FanstyMuit
          products={filteredDistricts}
          selectedProducts={selectedDistrict}
          setSelectedProducts={setSelectedDistrict}
             label="Select Your District"
        />
        )  
        }
     
        {
          filteredCounties.length > 0 &&(
            <FanstyMuit
            products={filteredCounties}
            selectedProducts={selectedCounty}
            setSelectedProducts={setSelectedCounty}
            label="Select Your Sub-County"
          />
          )
        }
    
      </div>
      <NavButtons />
    </form>
  );
}
