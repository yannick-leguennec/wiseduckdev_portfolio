import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Profil from "./components/Profil/Profil";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Profil />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Let's rock this baby !</h1>
      </main>
    </>
  );
}
