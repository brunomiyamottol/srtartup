const baseUrl =
  process.env.NODE_ENV === "production" ? "https://api.kaaria.ai/api/v1" : "https://localhost:44385/api/v1";

export default baseUrl;

export const baseUrlKaaria =
  process.env.NODE_ENV === "production"
    ? `${process.env.NEXT_PUBLIC_KA_TERMS_CONDITIONS_URL}`
    : `${process.env.NEXT_PUBLIC_KA_TERMS_CONDITIONS_URL}`;
