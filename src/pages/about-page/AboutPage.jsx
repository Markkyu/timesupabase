const AboutPage = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 min-h-0 bg-white text-gray-800 font-sans overflow-auto">
        {/* Header */}
        <header className="bg-gray-50 py-12 px-6 md:px-16 text-center shadow-md">
          <h1 className="text-3xl md:text-5xl font-bold flex flex-col md:flex-row items-center justify-center gap-3">
            <img
              src="/src/assets/images/euc-logo.png"
              className="w-12 h-12 md:w-14 md:h-14"
              alt="EUC Logo"
            />
            Timelyfy
            <img
              src="/timelyfy.svg"
              className="w-12 h-12 md:w-14 md:h-14"
              alt="Timelyfy Logo"
            />
          </h1>
          <p className="text-base md:text-lg mt-4 italic max-w-3xl mx-auto">
            A Web-based Automatic Scheduling System using Greedy Algorithm For
            MSEUF-CI
          </p>
          <p className="mt-4 text-sm md:text-md font-light">
            "Creating your time takes time"
          </p>
        </header>

        {/* About Section */}
        <section className="max-w-5xl mx-auto py-12 px-8 md:px-20">
          <h2 className="text-xl md:text-3xl font-semibold text-maroon-700 mb-6 text-center md:text-left">
            About Timelyfy
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify text-base md:text-lg">
            Timelyfy is a web-based platform designed to simplify the process of
            creating class schedules for MSEUF-CI. Timelyfy helps administrators
            manage their time efficiently. Whether it's detecting schedule
            conflicts, automating course allocation, or providing a
            user-friendly interface, Timelyfy takes the stress out of
            scheduling.
          </p>
        </section>

        {/* Developers */}
        <section className="bg-gray-100 py-12 px-8 md:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-8">
              Meet the Developers
            </h3>
            <div className="flex flex-col md:flex-row justify-center gap-8 rounded-3xl bg-zinc-200 py-10 px-6 md:px-12">
              {/* Developer 1 */}
              <div className="bg-white shadow-lg rounded-xl p-8 border w-full md:w-1/2 lg:w-1/3">
                <img
                  className="w-28 h-28 mx-auto bg-gray-300 rounded-full mb-6 object-cover"
                  src="https://cdn.pixilart.com/images/user/profile/large/7ad5a882722beee.png?v=1660092107"
                  alt="Marc Joel Baldoz"
                  title="Marc Joel Baldoz"
                />
                <h4 className="font-semibold text-lg md:text-xl text-maroon-800">
                  Marc Joel Baldoz
                </h4>
                <p className="text-sm md:text-base text-gray-600">
                  Front end Developer
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  User Interface & User Experience
                </p>
              </div>

              {/* Developer 2 */}
              <div className="bg-white shadow-lg rounded-xl p-8 border w-full md:w-1/2 lg:w-1/3">
                <img
                  className="w-28 h-28 mx-auto bg-gray-300 rounded-full mb-6 object-cover"
                  src="https://dthezntil550i.cloudfront.net/7s/latest/7s1803041752176120002886709/3a6b5559-1013-4bad-8223-78974818271d.png"
                  alt="Emmanuel Genaro Ona"
                  title="Emmanuel Genaro Ona"
                />
                <h4 className="font-semibold text-lg md:text-xl text-maroon-800">
                  Emmanuel Genaro Ona
                </h4>
                <p className="text-sm md:text-base text-gray-600">
                  Back end Developer
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  Database & Algorithm
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="shadow-2xl text-center py-6 text-gray-800 text-sm md:text-base">
          <p>&copy; {new Date().getFullYear()} Timelyfy Auto-Scheduler</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
