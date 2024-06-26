import { ImageResponse } from "next/og";

export const runtime = "edge";

const defaultLang = "en";
const translations = {
  en: {
    tzdict: "Tz'utujil.org Dictionary",
    dictionary: "Dictionary",
  },
  es: {
    tzdict: "Diccionario Tz'utujil.org",
    dictionary: "Diccionario",
  },
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const word = searchParams.get("word");
  const lang = searchParams.get("lang") || defaultLang;
  const fontData = await fetch(
    new URL("../../../../public/Inter-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          color: "#fff",
          fontWeight: 600,
          fontFamily: "Inter",
        }}
      >
        <svg
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
          height="110"
        >
          <path
            d="M240 97.25c-7.7 7.55-20.7 34.55-23.4 78.75h46.88c-2.68-44.2-15.68-71.2-23.48-78.75zM334.4 176c-5.25-31.25-25.62-57.13-53.25-70.38C288.8 124.6 293.8 149 295.3 176h39.1zm0 32h-39.13c-1.5 27-6.5 51.38-14.12 70.38C308.8 265.1 329.1 239.3 334.4 208zm-71 0h-46.9c2.8 44.3 15.8 71.3 23.5 78.8 7.8-7.5 20.8-34.5 23.4-78.8zm-64.5-102.4c-27.6 13.3-48 39.2-53.3 70.4h39.13c1.57-27 6.57-51.4 14.17-70.4zM448 336V48c0-26.51-21.5-48-48-48H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-32 0-11.72-6.607-21.52-16-27.1v-81.36c9.8-8.74 16-21.34 16-35.54zM240 64c70.75 0 128 57.25 128 128s-57.25 128-128 128-128-57.25-128-128S169.3 64 240 64zm144 384H96c-17.67 0-32-14.33-32-32s14.33-32 32-32h288v64zM198.9 278.4c-7.6-19-12.6-43.4-14.1-70.4h-39.2c5.3 31.3 25.7 57.1 53.3 70.4z"
            fill="#00f0a0"
            class="fill-000000"
          ></path>
        </svg>
        <div style={{ marginTop: 40, fontSize: 65, textAlign: "center" }}>
          {word ? word : "Tz'utujil.org"}
        </div>
        <div style={{ fontSize: 30 }}>
          {word ? translations[lang].tzdict : translations[lang].dictionary}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
