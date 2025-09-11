const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans overflow-auto">
      <header className="bg-gray-50 py-12 px-4 text-center shadow-md">
        <h1 className="text-4xl font-bold flex items-center justify-center">
          <img src="/euc_logo.png" className="size-10 inline mr-2" />
          Timelyfy
        </h1>
        <p className="text-lg mt-2 italic">
          A Web-based Automatic Scheduling System using Greedy Algorithm For
          MSEUF-CI
        </p>
        <p className="mt-4 text-md font-light">
          "Creating your time takes time"
        </p>
      </header>

      <section className="max-w-4xl mx-auto py-8 px-6">
        <h2 className="text-2xl font-semibold text-maroon-700 mb-4">
          About Timelyfy
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Timelyfy is a web-based platform designed to simplify the process of
          creating class schedules for MSEUF-CI. Timelyfy helps administrators
          manage their time efficiently. Whether it's detecting schedule
          conflicts, automating class allocation or providing a user-friendly
          timetable interface, Timelyfy takes the stress out of scheduling.
        </p>
      </section>

      <section className="bg-gray-100 py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Meet the Developers
          </h3>
          <div className="flex flex-wrap justify-center gap-6 rounded-3xl bg-zinc-200 py-6">
            <div className="bg-white shadow rounded-xl p-6 border-2">
              <img
                style={{ height: "100px" }}
                className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4"
                src="https://cdn.pixilart.com/images/user/profile/large/7ad5a882722beee.png?v=1660092107"
                alt="Marc Joel Baldoz"
                title="Marc Joel Baldoz"
              />
              <h4 className="font-medium text-lg text-maroon-800">
                Marc Joel Baldoz
              </h4>
              <p className="text-sm text-gray-600">Front end Developer</p>
              <p className="text-sm text-gray-600">
                User Interface & User Experience
              </p>
            </div>
            <div className="bg-white shadow rounded-xl p-6 border-2">
              <img
                style={{ height: "100px" }}
                className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4"
                src="https://dthezntil550i.cloudfront.net/7s/latest/7s1803041752176120002886709/3a6b5559-1013-4bad-8223-78974818271d.png"
                alt="Emmanuel Genaro Ona"
                title="Emmanuel Genaro Ona"
              />
              <h4 className="font-medium text-lg text-maroon-800">
                Emmanuel Genaro Ona
              </h4>
              <p className="text-sm text-gray-600">Back end Developer</p>
              <p className="text-sm text-gray-600">Database & Algorithm</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="shadow-2xl text-center py-6 text-gray-800">
        <p>&copy; {new Date().getFullYear()} Timelyfy Auto-scheduler</p>
      </footer>
    </div>
  );
};

export default AboutPage;
