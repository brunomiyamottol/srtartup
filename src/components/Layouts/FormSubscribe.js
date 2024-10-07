import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { apiAxios } from "../../service/apiAxios";
import { NavigatorLanguageFormat } from "../../utils/NavigatorLanguageFormat";
import baseUrl from "../../utils/baseUrl";
import LoadingSvg from "../svgs/LoadingSvg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const alertContent = ({ title, text, icon, timer }) => {
  MySwal.fire({
    title,
    text,
    icon,
    timer,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const ProductModuleTypeEnum = {
  StartupValuation: 1,
};

export default function FormSubscribe({ isBanner = false, titleButton }) {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitForm = () => {
    const isValidEmail = validateEmail();

    if (isValidEmail) {
      handleSendEmail();
    }
  };

  const handleSendEmail = async () => {
    const url = `${baseUrl}/productInterestMarketing`;

    const request = {
      email,
      culture: NavigatorLanguageFormat(navigator.language),
      active: true,
      productModuleTypeId: ProductModuleTypeEnum.StartupValuation,
    };

    try {
      setIsLoading(true);

      await apiAxios.post(url, request);

      alertContent({
        title: t("formSubscribeModalTitleSuccess"),
        text: t("formSubscribeModalContentSuccess"),
        icon: "success",
        timer: 3500,
      });
      setEmail("");
    } catch (error) {
      const response = error?.response?.data;

      if (response) {
        const errors = response?.errorMessages;

        if (errors && errors.length > 0) {
          const errMessage = errors.map((x) => x.value).join(". ");

          alertContent({
            title: "",
            text: errMessage,
            icon: "success",
            timer: 3500,
          });
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailRegex.test(email);
  };

  return (
    <div className="w-full md:w-full mt-5">
      <form class="flex flex-wrap sm:items-center sm:flex-nowrap">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder={t("yourEmail")}
          required
          class="text-gray-700 w-full py-4 px-6 border border-gray-300 rounded-l-larger focus:outline-none focus:border-blue-500"
        />

        <button
          type="button"
          class="mx-auto min-w-max lg:mx-0 hover:underline bg-white text-gray-800 font-bold sm:rounded-l-none rounded-l-lg rounded-r-lg my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          style={{ border: "1px solid #f4f4f4" }}
          onClick={handleSubmitForm}
        >
          {isLoading && <LoadingSvg />}
          {titleButton}
        </button>
      </form>
      {email.length > 0 && !validateEmail() && (
        <div style={{ color: isBanner ? "#f3c264" : "red", marginTop: -20, textAlign: "start" }}>
          {t("invalidEmail")}
        </div>
      )}
    </div>
  );
}
