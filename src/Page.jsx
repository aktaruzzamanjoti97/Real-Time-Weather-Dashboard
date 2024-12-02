import { useContext } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";

const Page = () => {
  const { weatherData, loading } = useContext(WeatherContext);

  return (
    <>
      {loading.state ? (
        <div>
          <p>{loading.message}</p>
        </div>
      ) : (
        <div className="grid place-items-center h-screen">
          <Header />
          <main>
            <section className="">
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
