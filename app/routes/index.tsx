export default function Index() {
  return (
    <div className="p-4 sm:p-8 max-w-2xl mx-auto flex flex-col">
      <div>
        <h1 className="flex flex-col">
          <span className="text-2xl sm:text-4xl font-bold font-display">
            Felix Wagner
          </span>
          <span className="text-xl sm:text-2xl tracking-[5px] sm:tracking-[12px] uppercase">
            Portfolio
          </span>
        </h1>
      </div>
      <div className="w-full min-h-[50vh] flex flex-col justify-center px-4 py-8 space-y-8">
        <div className="">
          <h2 className="text-sm font-thin pb-2">Currently Working at:</h2>
          <a href="https://thepeaklab.com/">
            <img className="h-4" src="/tpl-logo.png" />
          </a>
        </div>
        <div className="">
          <h2 className="text-sm font-thin pb-2">Checkout:</h2>
          <a href="https://bottlebase.com">
            <img className="h-4" src="/btl-logo.svg" />
          </a>
        </div>
      </div>
      <footer className="flex flex-col">
        <h2 className="text-lg sm:text-xl font-display">Contact</h2>
        <a className="hover:underline px-4 font-thin" href="moin@fawagner.de">
          moin@fawagner.de
        </a>
      </footer>
    </div>
  );
}
