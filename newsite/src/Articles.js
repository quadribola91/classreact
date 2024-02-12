export default function Articles() {
  return (
    <>
      <div className="space-y-4 p-4">
        <h2 className="font-bold text-2xl text-mono text-center underline text-pink-900">
          Articles
        </h2>
        <details
          className="group border-s-4 border-gray-700 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              VS Code remains the top code editor
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            VS Code was released in 2019 and has grown to become one of the most
            popular code editors, rivaling IDEs like Vim, IntelliJ, and
            Webstorm. Data from Stack Overflow's 2023 survey shows that VS Code
            remains the most popular IDE for developers. Data from The Software
            House's 2022 State of Frontend also shows that VS Code was the
            favorite developer code editor at 74.4%.
          </p>
        </details>

        <details className="group border-s-4 border-gray-300 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              The battle between SSR/SSG frameworks rages on
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            Server-side rendering (SSR) and static-site generation (SSG) are two
            rendering methods that have gained traction recently because of
            their SEO and performance benefits. As more developers and
            businesses adopt SSR and SSG as needed, the battle for supremacy
            among the frameworks that support these rendering methods continues.
          </p>
        </details>
        <details
          className="group border-s-4 border-gray-700 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              The emergence of new styling solutions and component libraries
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            When it comes to website styling options, developers are spoiled
            with multiple choices. There are over 40 CSS frameworks, over 40
            CSS-in-JS libraries, and numerous component libraries across
            Angular, React, and Vue. In 2023, we saw the release of new styling
            solutions like Shadcn UI, Ark UI, Panda CSS, and StyleX (from Meta).
            There is also Wedges, Lemon Squeezy's open-source React UI library
            that was only released a few days ago as of this writing. We can
            expect to see more solutions emerge as developers and open-source
            creators provide their unique approach to designing interfaces and
            building websites.
          </p>
        </details>
        <details
          className="group border-s-4 border-gray-200 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              React.js in 2024: Trends and Statistics for Frontend Developers
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            React.js is an open-source JavaScript library used for building user
            interfaces, and it has become increasingly popular among frontend
            developers in recent years. Here are some trends and statistics
            which indicate why React.js is an essential tool for any frontend
            developer's skillset.
          </p>
        </details>
      </div>
    </>
  );
}
